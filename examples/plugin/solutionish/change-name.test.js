const pluginTester = require('babel-plugin-tester').default
const plugin = require('./change-name')
const path = require('path')

/**
 * Note: the require below only works A PATH ABOVE this folder!
 */
pluginTester({
  plugin,
  babelOptions: require('./babel.config.js'),
  tests: {
    'changes this code': {
      fixture: path.join(__dirname, '__fixtures__/button.js'),
      outputFixture: path.join(__dirname, '__fixtures__/button-changed.js')
    }
  }
})
