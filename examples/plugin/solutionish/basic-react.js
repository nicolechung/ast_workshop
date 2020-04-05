module.exports = function (babel) {
  const { types: t } = babel

  return {
    name: 'change component name', // not required
    visitor: {
      VariableDeclaration (path) {
        path.node.declarations[0].id = t.identifier('NeatButton')
      }
    }
  }
}
