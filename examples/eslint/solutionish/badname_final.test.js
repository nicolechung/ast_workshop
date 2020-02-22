const { RuleTester } = require('eslint')
const rule = require('./badname_final')

const ruleTester = new RuleTester()
ruleTester.run('no calling badName', rule, {
  valid: ['goodName()', 'someOtherName()', 'somethingElse.badName'],
  invalid: [invalid('badName()')]
})

function invalid (code) {
  return {
    code,
    errors: [{ message: 'Do call the badName!' }]
  }
}
