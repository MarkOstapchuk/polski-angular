import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const E2E_DIR = path.resolve(__dirname, '..');
export const WEB_DIR = path.resolve(E2E_DIR, '..');
export const DEFAULT_DIST_DIR = path.join(WEB_DIR, 'dist', 'polski-platform', 'browser');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jsonl': 'application/x-ndjson; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.mp3': 'audio/mpeg',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.ico': 'image/x-icon',
};

const ASSET_EXTENSIONS = new Set([
  '.js', '.mjs', '.css', '.json', '.jsonl', '.webmanifest',
  '.svg', '.png', '.jpg', '.jpeg', '.webp', '.mp3',
  '.woff', '.woff2', '.txt', '.xml', '.ico', '.map',
]);

const STATIC_SEO_ROUTES = new Map([
  ['/nauka/polskie-znaki', 'nauka/polskie-znaki/index.html'],
  ['/nauka/polskie-znaki/', 'nauka/polskie-znaki/index.html'],
  ['/gramatyka/przypadki', 'gramatyka/przypadki/index.html'],
  ['/gramatyka/przypadki/', 'gramatyka/przypadki/index.html'],
  ['/slownictwo/podstawowe-zwroty', 'slownictwo/podstawowe-zwroty/index.html'],
  ['/slownictwo/podstawowe-zwroty/', 'slownictwo/podstawowe-zwroty/index.html'],
  ['/seo/index.html', 'seo/index.html'],
  ['/seo', 'seo/index.html'],
  ['/seo/', 'seo/index.html'],
  ['/ru', 'ru/index.html'],
  ['/ru/', 'ru/index.html'],
  ['/en', 'en/index.html'],
  ['/en/', 'en/index.html'],
]);

function safeResolve(rootDir, relPath) {
  const clean = relPath.replace(/^\/+/, '');
  const resolved = path.resolve(rootDir, clean);
  if (resolved !== rootDir && !resolved.startsWith(rootDir + path.sep)) {
    return null;
  }
  return resolved;
}

function isRegularFile(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch {
    return false;
  }
}

function sendFile(req, res, filePath, { noCache = false } = {}) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  let stat;
  try {
    stat = fs.statSync(filePath);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not found');
    return;
  }

  const headers = {
    'Content-Type': contentType,
    'Accept-Ranges': 'bytes',
  };
  if (noCache || ext === '.html') {
    headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
  }

  const rangeHeader = req.headers.range;
  if (rangeHeader && stat.size > 0) {
    const match = /^bytes=(\d*)-(\d*)$/.exec(String(rangeHeader).trim());
    if (match) {
      if (!match[1] && !match[2]) {
        res.writeHead(416, {
          'Content-Range': `bytes */${stat.size}`,
        });
        res.end();
        return;
      }
      let start = match[1] ? Number.parseInt(match[1], 10) : 0;
      let end = match[2] ? Number.parseInt(match[2], 10) : stat.size - 1;
      if (!match[1] && match[2]) {
        // Suffix byte range: last N bytes
        const suffix = Number.parseInt(match[2], 10);
        start = Math.max(0, stat.size - suffix);
        end = stat.size - 1;
      }
      if (Number.isNaN(start) || Number.isNaN(end) || start > end || start >= stat.size) {
        res.writeHead(416, {
          'Content-Range': `bytes */${stat.size}`,
        });
        res.end();
        return;
      }
      end = Math.min(end, stat.size - 1);
      headers['Content-Range'] = `bytes ${start}-${end}/${stat.size}`;
      headers['Content-Length'] = String(end - start + 1);
      res.writeHead(206, headers);
      if (req.method === 'HEAD') {
        res.end();
        return;
      }
      fs.createReadStream(filePath, { start, end }).pipe(res);
      return;
    }
  }

  headers['Content-Length'] = String(stat.size);
  res.writeHead(200, headers);
  if (req.method === 'HEAD') {
    res.end();
    return;
  }
  fs.createReadStream(filePath).pipe(res);
}

export async function startDistServer(distDir = DEFAULT_DIST_DIR) {
  const rootDir = path.resolve(distDir);
  const appHtmlPath = path.join(rootDir, 'app.html');
  const fallbackIndexPath = path.join(rootDir, 'index.html');
  const spaEntry = isRegularFile(appHtmlPath) ? appHtmlPath : fallbackIndexPath;

  if (!isRegularFile(spaEntry)) {
    throw new Error(
      `Dist SPA entry not found in ${rootDir} (expected app.html or index.html). Run 'npm run build' or pass --serve / --base-url.`
    );
  }

  const server = http.createServer((req, res) => {
    const method = req.method || 'GET';
    if (method !== 'GET' && method !== 'HEAD') {
      res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Method not allowed');
      return;
    }

    let pathname;
    try {
      const parsed = new URL(req.url || '/', 'http://127.0.0.1');
      pathname = decodeURIComponent(parsed.pathname);
    } catch {
      res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Bad Request');
      return;
    }

    // Check raw path traversal attempts before normalization
    if (pathname.includes('\0')) {
      res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Bad Request');
      return;
    }

    // 1. Static SEO routes (matching vercel.json & public/seo)
    if (STATIC_SEO_ROUTES.has(pathname)) {
      const seoFile = safeResolve(rootDir, STATIC_SEO_ROUTES.get(pathname));
      if (seoFile && isRegularFile(seoFile)) {
        sendFile(req, res, seoFile, { noCache: true });
        return;
      }
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('SEO page not found');
      return;
    }

    // 2. Root '/' serves app.html (PublicHomeComponent, matching ng serve)
    if (pathname === '/') {
      sendFile(req, res, spaEntry, { noCache: true });
      return;
    }

    // 3. Exact file match in distDir
    const candidate = safeResolve(rootDir, pathname);
    if (!candidate) {
      res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Forbidden');
      return;
    }
    if (isRegularFile(candidate)) {
      sendFile(req, res, candidate);
      return;
    }

    // 4. Missing asset files must return 404 (never masked by SPA fallback)
    const ext = path.extname(pathname).toLowerCase();
    if (ext && ASSET_EXTENSIONS.has(ext)) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(`Asset not found: ${pathname}`);
      return;
    }

    // 5. SPA routes (/auth, /course/*, /learn/*, /feedback, extensionless) -> app.html
    sendFile(req, res, spaEntry, { noCache: true });
  });

  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', () => {
      server.removeListener('error', reject);
      resolve();
    });
  });

  const addr = server.address();
  const baseUrl = `http://127.0.0.1:${addr.port}`;

  return {
    mode: 'dist',
    baseUrl,
    distDir: rootDir,
    async close() {
      server.closeAllConnections?.();
      await new Promise((resolve) => server.close(() => resolve()));
    },
  };
}

async function killChildGroup(child) {
  if (!child || child.exitCode !== null) return;
  const pid = child.pid;
  const signalGroup = (sig) => {
    if (!pid) return;
    try {
      if (process.platform !== 'win32') {
        process.kill(-pid, sig);
      } else {
        child.kill(sig);
      }
    } catch {
      try {
        child.kill(sig);
      } catch {
        // ignore
      }
    }
  };
  signalGroup('SIGTERM');
  await new Promise((resolve) => {
    if (child.exitCode !== null) {
      resolve();
      return;
    }
    const killTimer = setTimeout(() => {
      signalGroup('SIGKILL');
      resolve();
    }, 2000);
    child.once('exit', () => {
      clearTimeout(killTimer);
      resolve();
    });
  });
}

export async function startNgServe(webDir = WEB_DIR) {
  const ngBin = path.join(webDir, 'node_modules', '.bin', 'ng');
  const child = spawn(ngBin, ['serve', '--port', '0', '--host', '127.0.0.1'], {
    cwd: webDir,
    detached: process.platform !== 'win32',
    stdio: ['ignore', 'pipe', 'pipe'],
    env: { ...process.env, FORCE_COLOR: '0', CI: '1' },
  });

  const onProcessExit = () => {
    if (child.exitCode !== null || !child.pid) return;
    try {
      if (process.platform !== 'win32') process.kill(-child.pid, 'SIGKILL');
      else child.kill('SIGKILL');
    } catch {
      // ignore
    }
  };
  process.once('exit', onProcessExit);

  let stdoutBuf = '';
  let stderrBuf = '';

  let baseUrl;
  try {
    baseUrl = await new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        void killChildGroup(child).finally(() => {
          reject(new Error(`Timed out waiting for ng serve.\nSTDOUT:\n${stdoutBuf}\nSTDERR:\n${stderrBuf}`));
        });
      }, 90_000);

      const checkReady = (buf) => {
        const match = /http:\/\/127\.0\.0\.1:\d+/.exec(buf);
        if (match) {
          clearTimeout(timer);
          resolve(match[0]);
        }
      };

      child.stdout.on('data', (chunk) => {
        stdoutBuf += chunk.toString('utf8');
        checkReady(stdoutBuf);
      });
      child.stderr.on('data', (chunk) => {
        stderrBuf += chunk.toString('utf8');
        checkReady(stderrBuf);
      });
      child.once('exit', (code) => {
        clearTimeout(timer);
        reject(new Error(`ng serve exited prematurely (${code}).\n${stderrBuf}`));
      });
    });
  } catch (err) {
    process.off('exit', onProcessExit);
    await killChildGroup(child);
    throw err;
  }

  return {
    mode: 'serve',
    baseUrl,
    async close() {
      process.off('exit', onProcessExit);
      await killChildGroup(child);
    },
  };
}

export async function createAppServer({ baseUrl, serve = false, distDir = DEFAULT_DIST_DIR } = {}) {
  if (baseUrl) {
    return {
      mode: 'external',
      baseUrl: baseUrl.replace(/\/+$/, ''),
      async close() {},
    };
  }
  if (serve) {
    return startNgServe();
  }
  return startDistServer(distDir);
}
