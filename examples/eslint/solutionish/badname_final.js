module.exports = {
  meta: {
    type: 'suggestion'
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
