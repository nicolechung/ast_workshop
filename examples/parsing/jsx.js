const babelParser = require('@babel/parser')
const beautify = require('json-beautify')

const code = '<Box>Box</Box>'

const result = babelParser.parse(code, {
  // parse in strict mode and allow module declarations
  sourceType: 'module',
  plugins: ['jsx']
})

console.log(beautify(result, null, 2, 80))
