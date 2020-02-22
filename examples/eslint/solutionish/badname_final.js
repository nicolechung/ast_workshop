module.exports = {
  meta: {
    type: 'no calling badName'
  },
  create (context) {
    return {
      CallExpression (node) {
        if (node.callee.name !== 'badName') {
          return
        }
        context.report({
          node,
          message: 'Do call the badName!'
        })
      }
    }
  }
}
