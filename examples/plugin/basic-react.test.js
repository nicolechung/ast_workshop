const pluginTester = require('babel-plugin-tester').default
const plugin = require('./basic-react')
const path = require('path')

pluginTester({
  plugin,
  babelOptions: require('./babel.config.js'),
  tests: {
    'changes this code': {
      fixture: path.join(__dirname, '__fixtures__/basic-react/button.js'),
      outputFixture: path.join(
        __dirname,
        '__fixtures__/basic-react/button-changed.js'
      )
    }
  }
})
