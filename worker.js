import esprima from 'esprima-next'

export const api = {
  icon: '⚡️',
  name: 'syntax.do',
  description: 'Abstract Syntax Tree Parsing API',
  url: 'https://syntax.do/api',
  type: 'https://apis.do/code',
  endpoints: {
    parseScript: 'https://syntax.do/:code',
    parseModule: 'https://syntax.do/:url',
  },
  site: 'https://syntax.do',
  login: 'https://syntax.do/login',
  signup: 'https://syntax.do/signup',
  subscribe: 'https://syntax.do/subscribe',
  repo: 'https://github.com/drivly/syntax.do',
}

const examples = {
  parseScript: 'https://syntax.do/x=x+3',
  parseGist: 'https://syntax.do/gist.githubusercontent.com/nathanclevenger/05c566c2452de53caa20a32cd12fbbca/raw/203017cdae58f14d72a242627a1e10e986444a2f/index.js',
}

export default {
  fetch: async (req, env) => {
    const { user, origin, requestId, method, body, time, pathname, pathSegments, pathOptions, url, query } = await env.CTX.fetch(req).then(res => res.json())
    
    let file, ast, error = undefined
    try {
      const path = pathname.replace(':code','get(Customer.name).map(Customers).compact().sortBy(city,firstName)')
      file = await fetch('https:/' + pathname, req).then(res => res.text()).catch(({name,message}) => { error = {name,message}})
      ast = file ? esprima.parseModule(file) : esprima.parseScript(pathSegments[0])
    } catch ({name,message}) {
      error = {name,message}
    }
    
    let codeLines = error ? file.split('\n') : undefined

    return new Response(JSON.stringify({ api, ast, error, codeLines, file, user }, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
  },
}
