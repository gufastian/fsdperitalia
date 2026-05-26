const COUNT_KEY = 'action_clicks';

function json(data, init = {}) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      ...init.headers,
    },
  });
}

async function readCount(env) {
  return Number(await env.COUNTER_KV.get(COUNT_KEY)) || 0;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return json({}, { status: 204 });
    }

    if (url.pathname !== '/api/counter') {
      return json({ error: 'not_found' }, { status: 404 });
    }

    if (request.method === 'GET') {
      return json({ count: await readCount(env) });
    }

    if (request.method === 'POST') {
      const count = await env.COUNTER_KV.get(COUNT_KEY, { type: 'text' });
      const next = (Number(count) || 0) + 1;
      await env.COUNTER_KV.put(COUNT_KEY, String(next));
      return json({ count: next });
    }

    return json({ error: 'method_not_allowed' }, { status: 405 });
  },
};
