export class CdpClient {
  #ws;
  #nextId = 1;
  #pending = new Map();
  #listeners = new Map();
  #closed = false;

  constructor(ws) {
    this.#ws = ws;
    ws.addEventListener('message', (event) => {
      let msg;
      try {
        msg = JSON.parse(typeof event.data === 'string' ? event.data : Buffer.from(event.data).toString('utf8'));
      } catch {
        return;
      }
      if (msg.id !== undefined) {
        const entry = this.#pending.get(msg.id);
        if (!entry) return;
        this.#pending.delete(msg.id);
        clearTimeout(entry.timer);
        if (msg.error) {
          entry.reject(new Error(`CDP ${entry.method} error (${msg.error.code}): ${msg.error.message}`));
        } else {
          entry.resolve(msg.result ?? {});
        }
        return;
      }
      if (msg.method) {
        const set = this.#listeners.get(msg.method);
        if (set) {
          for (const handler of [...set]) {
            try {
              handler(msg.params ?? {});
            } catch {
              // Do not break message pump on listener errors
            }
          }
        }
      }
    });

    const rejectAll = (reason) => {
      this.#closed = true;
      for (const [, entry] of this.#pending) {
        clearTimeout(entry.timer);
        entry.reject(new Error(reason));
      }
      this.#pending.clear();
    };

    ws.addEventListener('close', () => rejectAll('CDP WebSocket closed'));
    ws.addEventListener('error', () => rejectAll('CDP WebSocket error'));
  }

  static async connect(wsUrl, timeoutMs = 10_000) {
    const ws = new WebSocket(wsUrl);
    await new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        try {
          ws.close();
        } catch {
          // ignore
        }
        reject(new Error(`Timed out connecting CDP WebSocket: ${wsUrl}`));
      }, timeoutMs);
      ws.addEventListener('open', () => {
        clearTimeout(timer);
        resolve();
      }, { once: true });
      ws.addEventListener('error', () => {
        clearTimeout(timer);
        reject(new Error(`Failed to connect CDP WebSocket: ${wsUrl}`));
      }, { once: true });
    });
    return new CdpClient(ws);
  }

  get isClosed() {
    return this.#closed || this.#ws.readyState !== WebSocket.OPEN;
  }

  send(method, params = {}, timeoutMs = 20_000) {
    if (this.isClosed) {
      return Promise.reject(new Error(`Cannot send CDP ${method}: connection closed`));
    }
    const id = this.#nextId++;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.#pending.delete(id);
        reject(new Error(`CDP timeout after ${timeoutMs}ms: ${method}`));
      }, timeoutMs);
      this.#pending.set(id, { method, resolve, reject, timer });
      this.#ws.send(JSON.stringify({ id, method, params }));
    });
  }

  on(method, handler) {
    let set = this.#listeners.get(method);
    if (!set) {
      set = new Set();
      this.#listeners.set(method, set);
    }
    set.add(handler);
    return () => {
      set.delete(handler);
      if (set.size === 0) this.#listeners.delete(method);
    };
  }

  waitForEvent(method, predicate = () => true, timeoutMs = 15_000) {
    if (this.isClosed) {
      return Promise.reject(new Error(`CDP WebSocket closed before waiting for event: ${method}`));
    }
    return new Promise((resolve, reject) => {
      let settled = false;
      const cleanup = () => {
        clearTimeout(timer);
        off();
        this.#ws.removeEventListener('close', onClose);
        this.#ws.removeEventListener('error', onError);
      };
      const onClose = () => {
        if (settled) return;
        settled = true;
        cleanup();
        reject(new Error(`CDP WebSocket closed while waiting for event: ${method}`));
      };
      const onError = () => {
        if (settled) return;
        settled = true;
        cleanup();
        reject(new Error(`CDP WebSocket error while waiting for event: ${method}`));
      };
      const timer = setTimeout(() => {
        if (settled) return;
        settled = true;
        cleanup();
        reject(new Error(`Timed out waiting for CDP event: ${method}`));
      }, timeoutMs);
      const off = this.on(method, (params) => {
        if (settled) return;
        let match = false;
        try {
          match = predicate(params);
        } catch {
          match = false;
        }
        if (match) {
          settled = true;
          cleanup();
          resolve(params);
        }
      });
      this.#ws.addEventListener('close', onClose, { once: true });
      this.#ws.addEventListener('error', onError, { once: true });
    });
  }

  async close() {
    if (this.#closed) return;
    this.#closed = true;
    try {
      this.#ws.close();
    } catch {
      // ignore
    }
  }
}
