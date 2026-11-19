#!/usr/bin/env node
import path from 'node:path';
import { createAppServer, DEFAULT_DIST_DIR } from './lib/server.mjs';
import { launchChrome } from './lib/chrome.mjs';
import { TIER1_TESTS } from './tiers/tier1-features.mjs';
import { TIER2_TESTS } from './tiers/tier2-boundaries.mjs';
import { TIER3_TESTS } from './tiers/tier3-cross-feature.mjs';
import { TIER4_TESTS } from './tiers/tier4-journeys.mjs';

function parseArgs(argv) {
  const opts = {
    tiers: new Set(),
    all: false,
    distDir: DEFAULT_DIST_DIR,
    serve: false,
    baseUrl: null,
    json: false,
    filter: null,
    headed: false,
  };

  for (const arg of argv) {
    if (arg === '--all') {
      opts.all = true;
    } else if (arg.startsWith('--tier=')) {
      const raw = arg.slice(7).trim();
      if (!raw) {
        console.error(`Invalid --tier value: "${arg}" (expected comma-separated values from 1,2,3,4)`);
        process.exit(1);
      }
      for (const part of raw.split(',')) {
        const trimmed = part.trim();
        if (!/^[1-4]$/.test(trimmed)) {
          console.error(`Invalid --tier value "${trimmed}" in "${arg}" (allowed: 1, 2, 3, 4)`);
          process.exit(1);
        }
        opts.tiers.add(Number.parseInt(trimmed, 10));
      }
    } else if (arg.startsWith('--dist=')) {
      const val = arg.slice(7).trim();
      if (!val) {
        console.error(`Invalid --dist value: "${arg}"`);
        process.exit(1);
      }
      opts.distDir = path.resolve(val);
    } else if (arg === '--serve') {
      opts.serve = true;
    } else if (arg.startsWith('--base-url=')) {
      const val = arg.slice(11).trim();
      if (!val) {
        console.error(`Invalid --base-url value: "${arg}"`);
        process.exit(1);
      }
      opts.baseUrl = val;
    } else if (arg === '--json') {
      opts.json = true;
    } else if (arg.startsWith('--filter=')) {
      opts.filter = arg.slice(9).toLowerCase();
    } else if (arg === '--headed') {
      opts.headed = true;
    } else if (arg === '--help' || arg === '-h') {
      console.log(`Usage: node e2e/run.mjs [options]
  --tier=1|2|3|4     Run specific tier(s)
  --all              Run all tiers (default)
  --dist=<dir>       Serve built browser dist dir (default: dist/polski-platform/browser)
  --serve            Start isolated ng serve --port 0 --host 127.0.0.1
  --base-url=<url>   Use already-running server URL
  --filter=<str>     Filter tests by ID or title substring
  --json             Emit structured JSON report at the end
  --headed           Launch visible Chrome window for debugging
`);
      process.exit(0);
    } else {
      console.error(`Unknown argument: ${arg}\nRun with --help for usage.`);
      process.exit(1);
    }
  }

  if (opts.all || opts.tiers.size === 0) {
    opts.tiers = new Set([1, 2, 3, 4]);
  }
  return opts;
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const allTests = [
    ...TIER1_TESTS,
    ...TIER2_TESTS,
    ...TIER3_TESTS,
    ...TIER4_TESTS,
  ].filter((t) => {
    if (!opts.tiers.has(t.tier)) return false;
    if (!opts.filter) return true;
    return t.id.toLowerCase().includes(opts.filter) || t.title.toLowerCase().includes(opts.filter);
  });

  if (allTests.length === 0) {
    console.error('No tests matched selection.');
    process.exit(1);
  }

  let server;
  let chrome;
  let cleanupPromise = null;
  let interrupted = false;
  let signalExitCode = null;

  const cleanup = () => {
    if (!cleanupPromise) {
      cleanupPromise = (async () => {
        if (chrome) await chrome.close().catch(() => {});
        if (server) await server.close().catch(() => {});
      })();
    }
    return cleanupPromise;
  };

  const handleSignal = (code) => {
    if (!interrupted) {
      interrupted = true;
      signalExitCode = code;
    }
    void cleanup().then(() => process.exit(code));
  };

  process.on('SIGINT', () => handleSignal(130));
  process.on('SIGTERM', () => handleSignal(143));

  const startedAt = Date.now();
  const results = [];

  try {
    server = await createAppServer({
      baseUrl: opts.baseUrl,
      serve: opts.serve,
      distDir: opts.distDir,
    });
    if (!interrupted) {
      chrome = await launchChrome({ headed: opts.headed });
    }

    if (!opts.json && !interrupted) {
      console.log(`Polski E2E Suite | mode=${server.mode} | baseUrl=${server.baseUrl} | tiers=${[...opts.tiers].sort().join(',')}`);
      console.log('─'.repeat(80));
    }

    for (const test of allTests) {
      if (interrupted) break;
      for (const viewport of test.viewports) {
        if (interrupted) break;
        let res;
        try {
          res = await test.run({ chrome, baseUrl: server.baseUrl, viewport });
        } catch (err) {
          if (interrupted) break;
          res = {
            id: test.id,
            tier: test.tier,
            title: test.title,
            viewport: viewport.label,
            status: 'FAIL',
            durationMs: 0,
            checks: [],
            error: err?.stack || err?.message || String(err),
          };
        }
        if (interrupted) break;
        results.push(res);

        if (!opts.json) {
          const badge = res.status === 'PASS' ? '[PASS]' : '[FAIL]';
          const passedChecks = res.checks.filter((c) => c.passed).length;
          console.log(
            `${badge} ${res.id} (${res.viewport}, ${res.durationMs}ms, ${passedChecks}/${res.checks.length} checks) - ${res.title}`
          );
          if (res.status === 'FAIL') {
            for (const chk of res.checks.filter((c) => !c.passed)) {
              console.log(`       FAIL [${chk.name}]: ${chk.detail}`);
            }
            const failedSummary = res.checks
              .filter((c) => !c.passed)
              .map((c) => `[${c.name}] ${c.detail}`)
              .join(' | ');
            if (res.error && res.error !== failedSummary) {
              console.log(`       ERROR: ${res.error}`);
            }
          }
        }
      }
    }
  } finally {
    await cleanup();
  }

  if (interrupted) {
    process.exit(signalExitCode || 130);
  }

  const totalDurationMs = Date.now() - startedAt;
  const passedCount = results.filter((r) => r.status === 'PASS').length;
  const failedCount = results.filter((r) => r.status === 'FAIL').length;

  const byTier = {};
  for (const tier of [1, 2, 3, 4]) {
    const tierResults = results.filter((r) => r.tier === tier);
    if (tierResults.length > 0) {
      byTier[`tier${tier}`] = {
        total: tierResults.length,
        passed: tierResults.filter((r) => r.status === 'PASS').length,
        failed: tierResults.filter((r) => r.status === 'FAIL').length,
      };
    }
  }

  const summary = {
    mode: server?.mode || 'unknown',
    total: results.length,
    passed: passedCount,
    failed: failedCount,
    durationMs: totalDurationMs,
    byTier,
    results,
  };

  if (opts.json) {
    console.log(JSON.stringify(summary, null, 2));
  } else {
    console.log('─'.repeat(80));
    console.log(
      `Summary: ${passedCount}/${results.length} passed, ${failedCount} failed (${(totalDurationMs / 1000).toFixed(2)}s)`
    );
    for (const [k, v] of Object.entries(byTier)) {
      console.log(`  ${k}: ${v.passed}/${v.total} passed (${v.failed} failed)`);
    }
  }

  process.exit(failedCount === 0 && results.length > 0 ? 0 : 1);
}

main().catch((err) => {
  console.error('Fatal runner error:', err);
  process.exit(1);
});
