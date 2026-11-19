import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { CdpClient } from './cdp.mjs';
import { createSupabaseMock, SUPABASE_HOST } from './supabase-mock.mjs';

export const DEFAULT_CHROME_BIN =
  process.env.CHROME_BIN || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const KEY_DEFS = {
  Tab: { code: 'Tab', keyCode: 9 },
  Enter: { code: 'Enter', keyCode: 13, text: '\r' },
  Escape: { code: 'Escape', keyCode: 27 },
  Backspace: { code: 'Backspace', keyCode: 8 },
  ArrowLeft: { code: 'ArrowLeft', keyCode: 37 },
  ArrowRight: { code: 'ArrowRight', keyCode: 39 },
  ArrowUp: { code: 'ArrowUp', keyCode: 38 },
  ArrowDown: { code: 'ArrowDown', keyCode: 40 },
  Space: { code: 'Space', keyCode: 32, key: ' ', text: ' ' },
  ' ': { code: 'Space', keyCode: 32, key: ' ', text: ' ' },
};

function resolveKeyDef(key) {
  if (KEY_DEFS[key]) {
    return { key, ...KEY_DEFS[key] };
  }
  if (/^[0-9]$/.test(key)) {
    return {
      key,
      code: `Digit${key}`,
      keyCode: key.charCodeAt(0),
      text: key,
    };
  }
  if (/^[a-zA-Z]$/.test(key)) {
    return {
      key,
      code: `Key${key.toUpperCase()}`,
      keyCode: key.toUpperCase().charCodeAt(0),
      text: key,
    };
  }
  return {
    key,
    code: key,
    keyCode: key.length === 1 ? key.charCodeAt(0) : 0,
    text: key.length === 1 ? key : undefined,
  };
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function launchChrome({ chromeBin = DEFAULT_CHROME_BIN, headed = false } = {}) {
  if (!fs.existsSync(chromeBin)) {
    throw new Error(`Chrome binary not found at: ${chromeBin}`);
  }

  const userDataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'polski-e2e-chrome-'));
  const args = [
    ...(headed ? [] : ['--headless=new']),
    '--remote-debugging-port=0',
    `--user-data-dir=${userDataDir}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-background-networking',
    '--disable-sync',
    '--disable-component-update',
    '--disable-dev-shm-usage',
    '--mute-audio',
    '--no-pings',
    '--window-size=1280,800',
    'about:blank',
  ];

  const proc = spawn(chromeBin, args, {
    detached: process.platform !== 'win32',
    stdio: ['ignore', 'ignore', 'pipe'],
  });

  const killChromeGroup = (sig) => {
    if (!proc.pid) return;
    try {
      if (process.platform !== 'win32') {
        process.kill(-proc.pid, sig);
      } else {
        proc.kill(sig);
      }
    } catch {
      try {
        proc.kill(sig);
      } catch {
        // ignore
      }
    }
  };

  let stderrBuf = '';
  let browserWsUrl;
  try {
    browserWsUrl = await new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject(new Error(`Timed out waiting for Chrome DevTools WS URL.\nSTDERR:\n${stderrBuf}`));
      }, 15_000);

      proc.stderr.on('data', (chunk) => {
        stderrBuf += chunk.toString('utf8');
        const match = /DevTools listening on (ws:\/\/127\.0\.0\.1:\d+\/devtools\/browser\/[^\s]+)/.exec(
          stderrBuf
        );
        if (match) {
          clearTimeout(timer);
          resolve(match[1]);
        }
      });

      proc.once('exit', (code, signal) => {
        clearTimeout(timer);
        reject(new Error(`Chrome exited prematurely (code=${code}, signal=${signal}).\n${stderrBuf}`));
      });
    });
  } catch (err) {
    killChromeGroup('SIGKILL');
    fs.rmSync(userDataDir, { recursive: true, force: true });
    throw err;
  }

  const port = Number(new URL(browserWsUrl).port);
  const browserCdp = await CdpClient.connect(browserWsUrl);
  let closed = false;

  const signalCleanup = () => {
    if (proc.exitCode === null) killChromeGroup('SIGKILL');
    try {
      fs.rmSync(userDataDir, { recursive: true, force: true });
    } catch {
      // ignore
    }
  };
  process.once('exit', signalCleanup);

  async function close() {
    if (closed) return;
    closed = true;
    process.off('exit', signalCleanup);

    // 1. Ask Chrome to close gracefully via CDP Browser.close (1.5s budget)
    if (!browserCdp.isClosed) {
      await Promise.race([
        browserCdp.send('Browser.close', {}, 1500).catch(() => {}),
        sleep(1500),
      ]);
    }
    try {
      await browserCdp.close();
    } catch {
      // ignore
    }

    // 2. Wait briefly for clean exit, then terminate entire process group
    if (proc.exitCode === null) {
      await Promise.race([
        new Promise((resolve) => proc.once('exit', resolve)),
        sleep(800),
      ]);
    }
    if (proc.exitCode === null) {
      killChromeGroup('SIGTERM');
      await new Promise((resolve) => {
        const timer = setTimeout(() => {
          killChromeGroup('SIGKILL');
          resolve();
        }, 2000);
        proc.once('exit', () => {
          clearTimeout(timer);
          resolve();
        });
      });
    }
    // Reap any surviving helper/renderer processes in the detached process group
    killChromeGroup('SIGKILL');

    try {
      fs.rmSync(userDataDir, { recursive: true, force: true });
    } catch {
      // ignore
    }
  }

  async function createIsolatedPage({
    baseUrl,
    viewport = { width: 1280, height: 800, mobile: false, label: '1280x800' },
    authenticated = false,
    initialProgress = null,
    language = 'pl',
    offline = false,
    faults = {},
    dictOverrides = {},
  } = {}) {
    const { browserContextId } = await browserCdp.send('Target.createBrowserContext', {
      disposeOnDetach: true,
    });
    const { targetId } = await browserCdp.send('Target.createTarget', {
      url: 'about:blank',
      browserContextId,
    });

    const pageWsUrl = `ws://127.0.0.1:${port}/devtools/page/${targetId}`;
    const cdp = await CdpClient.connect(pageWsUrl);

    await cdp.send('Page.enable');
    await cdp.send('Runtime.enable');
    await cdp.send('Network.enable');
    await cdp.send('Log.enable');
    await cdp.send('DOM.enable');
    await cdp.send('Network.setBypassServiceWorker', { bypass: true });

    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: viewport.width,
      height: viewport.height,
      deviceScaleFactor: viewport.mobile ? 2 : 1,
      mobile: Boolean(viewport.mobile),
    });
    await cdp.send('Emulation.setTouchEmulationEnabled', {
      enabled: Boolean(viewport.mobile),
      maxTouchPoints: viewport.mobile ? 5 : 1,
    });

    const supabaseMock = createSupabaseMock({
      initialProgress,
      faults: { ...faults, offline },
      dictOverrides,
    });
    const detachMock = await supabaseMock.attach(cdp);

    await cdp.send('Page.addScriptToEvaluateOnNewDocument', {
      source: supabaseMock.buildSeedScript({ authenticated, language, offline }),
    });

    const consoleErrors = [];
    const pageErrors = [];
    const logErrors = [];
    const failedAssets = [];
    const requestUrls = new Map();

    cdp.on('Runtime.consoleAPICalled', (params) => {
      if (params.type === 'error') {
        const text = (params.args || [])
          .map((a) => a.value ?? a.description ?? a.type)
          .join(' ');
        consoleErrors.push(text);
      }
    });

    cdp.on('Runtime.exceptionThrown', (params) => {
      const desc =
        params.exceptionDetails?.exception?.description ||
        params.exceptionDetails?.text ||
        'Unknown JS exception';
      pageErrors.push(desc);
    });

    cdp.on('Log.entryAdded', (params) => {
      const entry = params.entry;
      if (entry && entry.level === 'error') {
        if (entry.url && entry.url.endsWith('/favicon.ico')) return;
        logErrors.push({
          source: entry.source,
          text: entry.text,
          url: entry.url,
        });
      }
    });

    cdp.on('Network.requestWillBeSent', (params) => {
      if (params.requestId && params.request?.url) {
        requestUrls.set(params.requestId, params.request.url);
      }
    });

    cdp.on('Network.responseReceived', (params) => {
      const resUrl = params.response?.url || '';
      const status = params.response?.status || 0;
      if (
        status >= 400 &&
        !resUrl.endsWith('/favicon.ico') &&
        !resUrl.includes(SUPABASE_HOST) &&
        !resUrl.includes('pons.com')
      ) {
        failedAssets.push({ url: resUrl, status });
      }
    });

    cdp.on('Network.loadingFailed', (params) => {
      const reqUrl = requestUrls.get(params.requestId) || '';
      if (
        !params.canceled &&
        reqUrl &&
        !reqUrl.includes(SUPABASE_HOST) &&
        !reqUrl.includes('pons.com')
      ) {
        failedAssets.push({ url: reqUrl, errorText: params.errorText });
      }
    });

    async function evaluate(fnOrExpr, ...args) {
      if (typeof fnOrExpr === 'function') {
        const serializedArgs = args.map((a) => (a === undefined ? 'undefined' : JSON.stringify(a))).join(', ');
        const expression = `(${fnOrExpr.toString()})(${serializedArgs})`;
        const res = await cdp.send('Runtime.evaluate', {
          expression,
          awaitPromise: true,
          returnByValue: true,
        });
        if (res.exceptionDetails) {
          throw new Error(
            res.exceptionDetails.exception?.description ||
              res.exceptionDetails.text ||
              'Evaluation failed'
          );
        }
        return res.result?.value;
      }
      const res = await cdp.send('Runtime.evaluate', {
        expression: fnOrExpr,
        awaitPromise: true,
        returnByValue: true,
      });
      if (res.exceptionDetails) {
        throw new Error(
          res.exceptionDetails.exception?.description ||
            res.exceptionDetails.text ||
            'Evaluation failed'
        );
      }
      return res.result?.value;
    }

    async function waitForStable(timeoutMs = 8000) {
      const start = Date.now();
      while (Date.now() - start < timeoutMs) {
        const state = await evaluate(() => {
          const href = location.href || document.URL || '';
          if (href.startsWith('chrome-error://')) {
            return { errorPage: true, href };
          }
          if (document.readyState !== 'complete') return { ready: false };
          const appRoot = document.querySelector('app-root');
          if (!appRoot) return { ready: true }; // static HTML page
          return { ready: appRoot.children.length > 0 };
        });
        if (state?.errorPage) {
          throw new Error(`Navigation reached error page: ${state.href}`);
        }
        if (state?.ready) {
          await sleep(120);
          return;
        }
        await sleep(60);
      }
      throw new Error('Timed out waiting for page / Angular app-root hydration');
    }

    async function goto(routeOrUrl, { waitSelector } = {}) {
      const url = routeOrUrl.startsWith('http')
        ? routeOrUrl
        : `${baseUrl}${routeOrUrl.startsWith('/') ? '' : '/'}${routeOrUrl}`;
      let rejectEarly;
      const earlyFailPromise = new Promise((_, reject) => {
        rejectEarly = reject;
      });
      const offFail = cdp.on('Network.loadingFailed', (params) => {
        if (!params.canceled && params.type === 'Document') {
          rejectEarly(new Error(`Navigation failed for ${url}: ${params.errorText || 'Document load failed'}`));
        }
      });
      const loadPromise = cdp.waitForEvent('Page.loadEventFired', () => true, 20_000);
      loadPromise.catch(() => {});
      earlyFailPromise.catch(() => {});
      try {
        const navRes = await cdp.send('Page.navigate', { url });
        if (navRes?.errorText) {
          throw new Error(`Navigation failed for ${url}: ${navRes.errorText}`);
        }
        await Promise.race([loadPromise, earlyFailPromise]);
        await waitForStable();
      } finally {
        offFail();
      }
      if (waitSelector) {
        await waitForSelector(waitSelector);
      }
    }

    async function reload({ waitSelector } = {}) {
      const loadPromise = cdp.waitForEvent('Page.loadEventFired', () => true, 20_000);
      await cdp.send('Page.reload', { ignoreCache: true });
      await loadPromise;
      await waitForStable();
      if (waitSelector) {
        await waitForSelector(waitSelector);
      }
    }

    async function waitFor(predicateFn, { timeoutMs = 10_000, intervalMs = 80, label = 'condition' } = {}, ...args) {
      const start = Date.now();
      let lastVal;
      while (Date.now() - start < timeoutMs) {
        try {
          lastVal = await evaluate(predicateFn, ...args);
          if (lastVal) return lastVal;
        } catch {
          // ignore transient navigation errors
        }
        await sleep(intervalMs);
      }
      throw new Error(`Timed out after ${timeoutMs}ms waiting for ${label} (last=${JSON.stringify(lastVal)})`);
    }

    async function waitForSelector(selector, { timeoutMs = 10_000, visible = true } = {}) {
      const start = Date.now();
      while (Date.now() - start < timeoutMs) {
        const found = await evaluate((sel, vis) => {
          const el = document.querySelector(sel);
          if (!el) return false;
          if (!vis) return true;
          const rect = el.getBoundingClientRect();
          const style = getComputedStyle(el);
          return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
        }, selector, visible);
        if (found) return true;
        await sleep(80);
      }
      const currentPath = await evaluate(() => location.pathname + location.search);
      throw new Error(`Timed out waiting for selector "${selector}" at ${currentPath}`);
    }

    async function getCenter(selector, index = 0) {
      return evaluate((sel, idx) => {
        const els = [...document.querySelectorAll(sel)];
        const el = els[idx];
        if (!el) return null;
        el.scrollIntoView({ block: 'center', inline: 'center', behavior: 'instant' });
        const rect = el.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          width: rect.width,
          height: rect.height,
          disabled: Boolean(el.disabled),
        };
      }, selector, index);
    }

    async function click(selector, index = 0) {
      const box = await getCenter(selector, index);
      if (!box) throw new Error(`Element not found for click: ${selector}[${index}]`);
      if (box.disabled) throw new Error(`Element is disabled for click: ${selector}[${index}]`);
      if (box.width > 0 && box.height > 0) {
        await cdp.send('Input.dispatchMouseEvent', {
          type: 'mouseMoved',
          x: box.x,
          y: box.y,
        });
        await cdp.send('Input.dispatchMouseEvent', {
          type: 'mousePressed',
          x: box.x,
          y: box.y,
          button: 'left',
          clickCount: 1,
        });
        await cdp.send('Input.dispatchMouseEvent', {
          type: 'mouseReleased',
          x: box.x,
          y: box.y,
          button: 'left',
          clickCount: 1,
        });
      } else {
        await evaluate((sel, idx) => {
          document.querySelectorAll(sel)[idx]?.click();
        }, selector, index);
      }
      await sleep(60);
    }

    async function domClick(selector, index = 0) {
      const ok = await evaluate((sel, idx) => {
        const el = document.querySelectorAll(sel)[idx];
        if (!el) return false;
        el.scrollIntoView({ block: 'center', behavior: 'instant' });
        el.click();
        return true;
      }, selector, index);
      if (!ok) throw new Error(`Element not found for domClick: ${selector}[${index}]`);
      await sleep(60);
    }

    async function getVisibleCenter(selector) {
      return evaluate((sel) => {
        const candidates = [...document.querySelectorAll(sel)];
        const el = candidates.find((node) => {
          const style = getComputedStyle(node);
          if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
            return false;
          }
          if (node.closest('[aria-hidden="true"], .visually-hidden')) return false;
          if (node.offsetParent === null && style.position !== 'fixed' && style.position !== 'sticky') {
            return false;
          }
          const rect = node.getBoundingClientRect();
          return rect.width > 0 && rect.height > 0;
        });
        if (!el) return null;
        el.scrollIntoView({ block: 'center', inline: 'center', behavior: 'instant' });
        const rect = el.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          width: rect.width,
          height: rect.height,
          disabled: Boolean(el.disabled),
        };
      }, selector);
    }

    async function clickVisible(selector) {
      const box = await getVisibleCenter(selector);
      if (!box) throw new Error(`Visible element not found for clickVisible: ${selector}`);
      if (box.disabled) throw new Error(`Visible element is disabled for clickVisible: ${selector}`);
      await cdp.send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: box.x, y: box.y });
      await cdp.send('Input.dispatchMouseEvent', {
        type: 'mousePressed',
        x: box.x,
        y: box.y,
        button: 'left',
        clickCount: 1,
      });
      await cdp.send('Input.dispatchMouseEvent', {
        type: 'mouseReleased',
        x: box.x,
        y: box.y,
        button: 'left',
        clickCount: 1,
      });
      await sleep(60);
    }

    async function domClickVisible(selector) {
      const ok = await evaluate((sel) => {
        const candidates = [...document.querySelectorAll(sel)];
        const el = candidates.find((node) => {
          const style = getComputedStyle(node);
          if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
            return false;
          }
          if (node.closest('[aria-hidden="true"], .visually-hidden')) return false;
          if (node.offsetParent === null && style.position !== 'fixed' && style.position !== 'sticky') {
            return false;
          }
          const rect = node.getBoundingClientRect();
          return rect.width > 0 && rect.height > 0;
        });
        if (!el) return false;
        el.scrollIntoView({ block: 'center', behavior: 'instant' });
        el.click();
        return true;
      }, selector);
      if (!ok) throw new Error(`Visible element not found for domClickVisible: ${selector}`);
      await sleep(60);
    }

    async function fill(selector, value, index = 0) {
      const ok = await evaluate((sel, val, idx) => {
        const el = document.querySelectorAll(sel)[idx];
        if (!el) return false;
        el.scrollIntoView({ block: 'center', behavior: 'instant' });
        el.focus();
        const proto =
          el.tagName === 'TEXTAREA'
            ? HTMLTextAreaElement.prototype
            : HTMLInputElement.prototype;
        const setter = Object.getOwnPropertyDescriptor(proto, 'value')?.set;
        if (setter) setter.call(el, val);
        else el.value = val;
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
        return true;
      }, selector, value, index);
      if (!ok) throw new Error(`Input not found for fill: ${selector}[${index}]`);
      await sleep(30);
    }

    async function selectOption(selector, value, index = 0) {
      const ok = await evaluate((sel, val, idx) => {
        const el = document.querySelectorAll(sel)[idx];
        if (!el) return false;
        el.scrollIntoView({ block: 'center', behavior: 'instant' });
        el.focus();
        el.value = val;
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
        return true;
      }, selector, value, index);
      if (!ok) throw new Error(`Select not found: ${selector}[${index}]`);
      await sleep(80);
    }

    async function pressKey(key) {
      const def = resolveKeyDef(key);
      await cdp.send('Input.dispatchKeyEvent', {
        type: 'rawKeyDown',
        key: def.key,
        code: def.code,
        windowsVirtualKeyCode: def.keyCode,
        nativeVirtualKeyCode: def.keyCode,
      });
      if (def.text) {
        await cdp.send('Input.dispatchKeyEvent', {
          type: 'char',
          text: def.text,
          key: def.key,
          code: def.code,
          windowsVirtualKeyCode: def.keyCode,
          nativeVirtualKeyCode: def.keyCode,
        });
      }
      await cdp.send('Input.dispatchKeyEvent', {
        type: 'keyUp',
        key: def.key,
        code: def.code,
        windowsVirtualKeyCode: def.keyCode,
        nativeVirtualKeyCode: def.keyCode,
      });
      await sleep(50);
    }

    async function typeText(text) {
      for (const ch of text) {
        await pressKey(ch);
      }
    }

    async function getWordPoint(selector, index = 0) {
      return evaluate((sel, idx) => {
        const el = document.querySelectorAll(sel)[idx];
        if (!el) return null;
        el.scrollIntoView({ block: 'center', inline: 'center', behavior: 'instant' });
        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
        let node;
        while ((node = walker.nextNode())) {
          const text = node.nodeValue || '';
          const match = /[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]{3,}/.exec(text);
          if (match) {
            const range = document.createRange();
            range.setStart(node, match.index);
            range.setEnd(node, match.index + match[0].length);
            const rect = range.getBoundingClientRect();
            if (rect.width > 0 && rect.height > 0) {
              return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
            }
          }
        }
        const rect = el.getBoundingClientRect();
        return { x: rect.left + Math.min(24, rect.width / 2), y: rect.top + rect.height / 2 };
      }, selector, index);
    }

    async function clickTextWord(selector, index = 0) {
      const pt = await getWordPoint(selector, index);
      if (!pt) throw new Error(`Element not found for clickTextWord: ${selector}[${index}]`);
      await cdp.send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: pt.x, y: pt.y });
      await cdp.send('Input.dispatchMouseEvent', {
        type: 'mousePressed',
        x: pt.x,
        y: pt.y,
        button: 'left',
        clickCount: 1,
      });
      await cdp.send('Input.dispatchMouseEvent', {
        type: 'mouseReleased',
        x: pt.x,
        y: pt.y,
        button: 'left',
        clickCount: 1,
      });
      await sleep(80);
    }

    async function longPress(selector, durationMs = 550, index = 0) {
      const pt = await getWordPoint(selector, index);
      if (!pt) throw new Error(`Element not found for longPress: ${selector}[${index}]`);
      await cdp.send('Input.dispatchMouseEvent', {
        type: 'mouseMoved',
        x: pt.x,
        y: pt.y,
      });
      await cdp.send('Input.dispatchMouseEvent', {
        type: 'mousePressed',
        x: pt.x,
        y: pt.y,
        button: 'left',
        clickCount: 1,
      });
      await sleep(durationMs);
      await cdp.send('Input.dispatchMouseEvent', {
        type: 'mouseReleased',
        x: pt.x,
        y: pt.y,
        button: 'left',
        clickCount: 1,
      });
      await sleep(100);
    }

    async function setOffline(isOffline) {
      supabaseMock.setFaults({ offline: Boolean(isOffline) });
      await evaluate((off) => {
        if (off) sessionStorage.setItem('__e2e_offline', '1');
        else sessionStorage.removeItem('__e2e_offline');
        window.dispatchEvent(new Event(off ? 'offline' : 'online'));
      }, Boolean(isOffline));
      await sleep(100);
    }

    function clearErrorLogs() {
      consoleErrors.length = 0;
      pageErrors.length = 0;
      logErrors.length = 0;
      failedAssets.length = 0;
    }

    async function closePage() {
      try {
        detachMock();
      } catch {
        // ignore
      }
      try {
        await cdp.close();
      } catch {
        // ignore
      }
      try {
        await browserCdp.send('Target.closeTarget', { targetId });
      } catch {
        // ignore
      }
      try {
        await browserCdp.send('Target.disposeBrowserContext', { browserContextId });
      } catch {
        // ignore
      }
    }

    return {
      cdp,
      viewport,
      baseUrl,
      supabaseMock,
      consoleErrors,
      pageErrors,
      logErrors,
      failedAssets,
      goto,
      reload,
      evaluate,
      waitFor,
      waitForSelector,
      waitForStable,
      getCenter,
      click,
      domClick,
      clickVisible,
      domClickVisible,
      fill,
      selectOption,
      pressKey,
      typeText,
      clickTextWord,
      longPress,
      setOffline,
      clearErrorLogs,
      close: closePage,
    };
  }

  return {
    port,
    userDataDir,
    createIsolatedPage,
    close,
  };
}
