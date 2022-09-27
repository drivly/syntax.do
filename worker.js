import esprima from 'esprima-next'

export const api = {
  icon: '⚡️',
  name: 'syntax.do',
  description: 'Abstract Syntax Tree Parsing API',
  url: 'https://syntax.do/api',
  type: 'https://apis.do/code',
  endpoints: {
    list: 'https://syntax.do/list',
    get: 'https://syntax.do/:id',
  },
  site: 'https://syntax.do',
  login: 'https://syntax.do/login',
  signup: 'https://syntax.do/signup',
  subscribe: 'https://syntax.do/subscribe',
  repo: 'https://github.com/drivly/syntax.do',
}

export default {
  fetch: async (req, env) => {
    const { user, origin, requestId, method, body, time, pathname, pathSegments, pathOptions, url, query } = await env.CTX.fetch(req).then(res => res.json())
    
    let file, ast, error = undefined
    try {
      file = await fetch('https:/' + pathname, req).then(res => res.text()).catch()
      ast = file ? esprima.parseScript(file) : esprima.parseScript(pathSegment[0])
    } catch ({name,message}) {
      error = {name,message}
    }

    return new Response(JSON.stringify({ api, file, ast, error, user }, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
  },
}
