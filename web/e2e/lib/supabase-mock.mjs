export const SUPABASE_HOST = 'tddrqknagbsqjlwujodb.supabase.co';
export const SUPABASE_URL_PATTERN = `*${SUPABASE_HOST}*`;
export const SUPABASE_STORAGE_KEY = 'sb-tddrqknagbsqjlwujodb-auth-token';

export const DEFAULT_USER = {
  id: '00000000-0000-4000-8000-000000000001',
  aud: 'authenticated',
  role: 'authenticated',
  email: 'learner@example.com',
};

const CORS_HEADERS = [
  { name: 'access-control-allow-origin', value: '*' },
  {
    name: 'access-control-allow-headers',
    value:
      'authorization, x-client-info, apikey, content-type, prefer, accept-profile, content-profile, x-supabase-api-version, range, x-upsert',
  },
  { name: 'access-control-allow-methods', value: 'GET, POST, PUT, PATCH, DELETE, OPTIONS' },
  { name: 'access-control-max-age', value: '86400' },
];

function jsonHeaders(extra = []) {
  return [
    ...CORS_HEADERS,
    { name: 'content-type', value: 'application/json; charset=utf-8' },
    ...extra,
  ];
}

function encodeBody(data) {
  if (data === undefined || data === null) return undefined;
  const text = typeof data === 'string' ? data : JSON.stringify(data);
  return Buffer.from(text, 'utf8').toString('base64');
}

function parseJsonBody(postData) {
  if (!postData) return null;
  try {
    return JSON.parse(postData);
  } catch {
    return null;
  }
}

export function createSupabaseMock({
  user = DEFAULT_USER,
  initialProgress = null,
  dictOverrides = {},
  faults = {},
} = {}) {
  const progressByUser = new Map();
  if (initialProgress) {
    progressByUser.set(user.id, structuredClone(initialProgress));
  }
  const feedbackRows = [];
  const dictMap = new Map(Object.entries(dictOverrides));
  const requests = [];
  const state = {
    user: { ...DEFAULT_USER, ...user },
    faults: { ...faults },
  };

  function makeSession(u = state.user) {
    const now = Math.floor(Date.now() / 1000);
    return {
      access_token: 'mock-access-token',
      refresh_token: 'mock-refresh-token',
      token_type: 'bearer',
      expires_in: 3600,
      expires_at: now + 3600,
      user: u,
    };
  }

  async function fulfill(cdp, requestId, status, bodyObj, headers = jsonHeaders()) {
    const encoded = bodyObj === undefined ? undefined : encodeBody(bodyObj);
    const params = {
      requestId,
      responseCode: status,
      responseHeaders: headers,
    };
    if (encoded !== undefined) params.body = encoded;
    await cdp.send('Fetch.fulfillRequest', params);
  }

  async function handleRequestPaused(cdp, event) {
    const { requestId, request } = event;
    const urlStr = request.url;
    if (!urlStr.includes(SUPABASE_HOST)) {
      await cdp.send('Fetch.continueRequest', { requestId });
      return;
    }

    const url = new URL(urlStr);
    const method = (request.method || 'GET').toUpperCase();
    const pathname = url.pathname;
    const parsedBody = parseJsonBody(request.postData);

    requests.push({
      method,
      pathname,
      search: url.search,
      body: parsedBody,
      timestamp: Date.now(),
    });

    if (method === 'OPTIONS') {
      const reqHeaders =
        request.headers?.['access-control-request-headers'] ||
        request.headers?.['Access-Control-Request-Headers'];
      const optHeaders = reqHeaders
        ? [
            { name: 'access-control-allow-origin', value: '*' },
            { name: 'access-control-allow-headers', value: String(reqHeaders) },
            { name: 'access-control-allow-methods', value: 'GET, POST, PUT, PATCH, DELETE, OPTIONS' },
            { name: 'access-control-max-age', value: '86400' },
          ]
        : CORS_HEADERS;
      await cdp.send('Fetch.fulfillRequest', {
        requestId,
        responseCode: 204,
        responseHeaders: optHeaders,
      });
      return;
    }

    if (state.faults.offline) {
      await cdp.send('Fetch.failRequest', {
        requestId,
        errorReason: 'InternetDisconnected',
      });
      return;
    }

    // Auth: token (password / refresh_token)
    if (pathname.startsWith('/auth/v1/token')) {
      if (
        state.faults.invalidLogin ||
        (parsedBody && parsedBody.password === 'wrong-password')
      ) {
        await fulfill(cdp, requestId, 400, {
          error: 'invalid_grant',
          error_description: 'Invalid login credentials',
          msg: 'Invalid login credentials',
        });
        return;
      }
      const email = parsedBody?.email || state.user.email;
      const u = { ...state.user, email };
      await fulfill(cdp, requestId, 200, makeSession(u));
      return;
    }

    // Auth: signup
    if (pathname.startsWith('/auth/v1/signup')) {
      const email = parsedBody?.email || state.user.email;
      const u = { ...state.user, email };
      if (state.faults.signupNeedsConfirm) {
        await fulfill(cdp, requestId, 200, { user: u, session: null });
        return;
      }
      const session = makeSession(u);
      await fulfill(cdp, requestId, 200, { user: u, session });
      return;
    }

    // Auth: logout
    if (pathname.startsWith('/auth/v1/logout')) {
      await fulfill(cdp, requestId, 204, undefined, CORS_HEADERS);
      return;
    }

    // Auth: user
    if (pathname === '/auth/v1/user') {
      if (state.faults.sessionError) {
        await fulfill(cdp, requestId, 401, { message: 'Invalid JWT' });
        return;
      }
      await fulfill(cdp, requestId, 200, state.user);
      return;
    }

    // REST: user_progress
    if (pathname === '/rest/v1/user_progress') {
      if (method === 'GET') {
        if (state.faults.progressGetStatus) {
          await fulfill(cdp, requestId, state.faults.progressGetStatus, {
            message: 'Simulated user_progress read error',
          });
          return;
        }
        const eqParam = url.searchParams.get('user_id') || '';
        const uid = eqParam.startsWith('eq.') ? eqParam.slice(3) : state.user.id;
        const progress = progressByUser.get(uid);
        await fulfill(cdp, requestId, 200, progress ? [{ progress }] : []);
        return;
      }

      if (method === 'POST' || method === 'PATCH' || method === 'PUT') {
        if (state.faults.progressSaveStatus) {
          await fulfill(cdp, requestId, state.faults.progressSaveStatus, {
            message: 'Simulated user_progress write error',
          });
          return;
        }
        const rows = Array.isArray(parsedBody) ? parsedBody : parsedBody ? [parsedBody] : [];
        for (const row of rows) {
          const uid = row.user_id || state.user.id;
          if (row.progress) {
            progressByUser.set(uid, structuredClone(row.progress));
          }
        }
        await fulfill(cdp, requestId, 201, rows);
        return;
      }
    }

    // REST: app_feedback
    if (pathname === '/rest/v1/app_feedback') {
      if (state.faults.feedbackStatus) {
        await fulfill(cdp, requestId, state.faults.feedbackStatus, {
          message: 'Simulated app_feedback write error',
        });
        return;
      }
      const rows = Array.isArray(parsedBody) ? parsedBody : parsedBody ? [parsedBody] : [];
      for (const row of rows) feedbackRows.push(structuredClone(row));
      await fulfill(cdp, requestId, 201, rows);
      return;
    }

    // Edge Function: pons-dictionary
    if (pathname === '/functions/v1/pons-dictionary') {
      if (state.faults.ponsStatus) {
        await fulfill(cdp, requestId, state.faults.ponsStatus, {
          error: 'Simulated PONS error',
        });
        return;
      }
      if (state.faults.ponsEmpty) {
        await fulfill(cdp, requestId, 200, { translations: [] });
        return;
      }
      const word = String(parsedBody?.word || '').trim();
      const custom = dictMap.get(word) || dictMap.get(word.toLowerCase());
      const translations = custom ?? [
        `${word || 'słowo'} — sample translation`,
        `to ${word || 'translate'} (mock)`,
      ];
      await fulfill(cdp, requestId, 200, { translations });
      return;
    }

    // Default fallback for any unhandled supabase route
    await fulfill(cdp, requestId, 404, { message: `Unhandled mock route: ${method} ${pathname}` });
  }

  function buildSeedScript({ authenticated = true, language = 'pl', offline = false } = {}) {
    const session = makeSession(state.user);
    const offlineUser = { id: state.user.id, email: state.user.email };
    return `(() => {
      try {
        if (!location || !location.origin || !location.origin.startsWith('http')) return;
        try {
          Object.defineProperty(Navigator.prototype, 'onLine', {
            get() { return sessionStorage.getItem('__e2e_offline') !== '1'; },
            configurable: true,
          });
        } catch {}
        if (!sessionStorage.getItem('__e2e_seeded')) {
          sessionStorage.setItem('__e2e_seeded', '1');
          ${offline ? "sessionStorage.setItem('__e2e_offline', '1');" : "sessionStorage.removeItem('__e2e_offline');"}
          ${language ? `localStorage.setItem('polski-language', ${JSON.stringify(language)});` : ''}
          ${
            authenticated
              ? `localStorage.setItem(${JSON.stringify(SUPABASE_STORAGE_KEY)}, ${JSON.stringify(JSON.stringify(session))});
                 localStorage.setItem('polski-offline-user', ${JSON.stringify(JSON.stringify(offlineUser))});`
              : `localStorage.removeItem(${JSON.stringify(SUPABASE_STORAGE_KEY)});
                 localStorage.removeItem('polski-offline-user');`
          }
        }
      } catch {}
    })();`;
  }

  return {
    user: state.user,
    faults: state.faults,
    progressByUser,
    feedbackRows,
    dictMap,
    requests,
    buildSeedScript,
    async attach(cdp) {
      await cdp.send('Fetch.enable', {
        patterns: [{ urlPattern: SUPABASE_URL_PATTERN, requestStage: 'Request' }],
      });
      return cdp.on('Fetch.requestPaused', (event) => {
        void handleRequestPaused(cdp, event).catch(() => {
          try {
            void cdp.send('Fetch.failRequest', {
              requestId: event.requestId,
              errorReason: 'Failed',
            });
          } catch {
            // ignore
          }
        });
      });
    },
    getProgress(userId = state.user.id) {
      return progressByUser.get(userId) ?? null;
    },
    setFaults(patch) {
      Object.assign(state.faults, patch);
    },
  };
}
