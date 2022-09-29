# syntax.do
Abstract Syntax Tree Parser API

Parse an Abstract Syntax Tree of a JavaScript string: <https://syntax.do/x=x+3>
```json
{
  "api": {
    "icon": "⚡️",
    "name": "syntax.do",
    "description": "Abstract Syntax Tree Parsing API",
    "url": "https://syntax.do/api",
    "type": "https://apis.do/code",
    "endpoints": {
      "list": "https://syntax.do/:code",
      "get": "https://syntax.do/:url"
    },
    "site": "https://syntax.do",
    "login": "https://syntax.do/login",
    "signup": "https://syntax.do/signup",
    "subscribe": "https://syntax.do/subscribe",
    "repo": "https://github.com/drivly/syntax.do"
  },
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "ExpressionStatement",
        "expression": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "Identifier",
            "name": "x"
          },
          "right": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Identifier",
              "name": "x"
            },
            "right": {
              "type": "Literal",
              "value": 3,
              "raw": "3"
            }
          }
        }
      }
    ],
    "sourceType": "script"
  },
  "error": {
    "name": "TypeError",
    "message": "Fetch API cannot load: https://x=x+3"
  }
}
```

Or Parse JavaScript from a remote URL: <https://syntax.do/gist.githubusercontent.com/nathanclevenger/bd151f1c57e27ed1c0fa18f12e10ece1/raw/fc176b741a84f191114602c517b899ed27c09748/index.js>
```json
{
  "file": "export default api = (number = 5) => ({ number, squared: number^2, cubed: number^3 }) ",
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "ExportDefaultDeclaration",
        "declaration": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "Identifier",
            "name": "api"
          },
          "right": {
            "type": "ArrowFunctionExpression",
            "id": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "left": {
                  "type": "Identifier",
                  "name": "number"
                },
                "right": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5"
                }
              }
            ],
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "number"
                  },
                  "computed": false,
                  "value": {
                    "type": "Identifier",
                    "name": "number"
                  },
                  "kind": "init",
                  "method": false,
                  "shorthand": true
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "squared"
                  },
                  "computed": false,
                  "value": {
                    "type": "BinaryExpression",
                    "operator": "^",
                    "left": {
                      "type": "Identifier",
                      "name": "number"
                    },
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "shorthand": false
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "cubed"
                  },
                  "computed": false,
                  "value": {
                    "type": "BinaryExpression",
                    "operator": "^",
                    "left": {
                      "type": "Identifier",
                      "name": "number"
                    },
                    "right": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3"
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "shorthand": false
                }
              ]
            },
            "generator": false,
            "expression": true,
            "async": false
          }
        }
      }
    ],
    "sourceType": "module"
  }
}
```
