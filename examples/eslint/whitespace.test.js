const { RuleTester } = require('eslint')
const rule = require('./whitespace')

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 6 } })

ruleTester.run('curly brackets should have spaces', rule, {
  valid: ['const { foo,bar,baz,bing } = noSpace'],
  invalid: [
    {
      code: 'const {foo,bar,baz,bing} = noSpace',
      errors: [
        {
          message: 'No space after the opening bracket!'
        },
        {
          message: 'No space before the closing bracket!'
        }
      ]
    }
  ]
})
