name = "syntax-do"
# route = { pattern = "*/*", zone_name = "syntax.do" }
main = "worker.js"
compatibility_date = "2022-08-25"

services = [
  { binding = "CTX", service = "ctx-do", environment = "production" }
]
