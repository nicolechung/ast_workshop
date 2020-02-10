const babelParser = require("@babel/parser")
const prettyjson = require('prettyjson');
const code = `const name = 'Nicole'`

const result = babelParser.parse(code, {
    // parse in strict mode and allow module declarations
  sourceType: "module",
    plugins: [
        "jsx",
        ]
})

console.log(prettyjson.render(result))