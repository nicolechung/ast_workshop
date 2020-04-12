const pluginTester = require('babel-plugin-tester').default
const plugin = require('./change-attribute')
const path = require('path')

pluginTester({
  plugin,
  babelOptions: require('./babel.config.js'),
  tests: {
    'changes this code': {
      fixture: path.join(__dirname, '__fixtures__/attribute.js'),
      outputFixture: path.join(__dirname, '__fixtures__/attribute-changed.js')
    }
  }
})
