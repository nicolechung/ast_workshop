module.exports = function (babel) {
  const { types: t } = babel

  return {
    name: 'change component attribute align', // not required
    visitor: {
      JSXElement (path) {
        if (path.node.openingElement.name.name === 'Flex') {
          path.node.openingElement.attributes = path.node.openingElement.attributes.map(
            attribute => {
              if (attribute.name.name === 'align') {
                attribute.name.name = 'alignContent'
              }
              return attribute
            }
          )
        }
      }
    }
  }
}
