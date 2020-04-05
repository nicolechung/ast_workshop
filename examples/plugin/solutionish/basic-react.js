export default function (babel) {
  const { types: t } = babel

  return {
    name: 'Replace Button that has primary variant', // not required
    visitor: {
      JSXElement (path) {
        if (isButtonElement(path) && hasPrimaryVariant(path)) {
          const children = path.node.children
          const PrimaryButton = t.jsxElement(
            t.jsxOpeningElement(t.jsxIdentifier('PrimaryButton'), []),
            t.jsxClosingElement(t.jsxIdentifier('PrimaryButton')),
            children
          )
          path.replaceWith(PrimaryButton)
          path.traverse(removePrimaryVariant)
        }
      }
    }
  }
}

const removePrimaryVariant = {
  JSXAttribute (path) {
    if (path.node.value.value !== 'primary') {
      return
    }
    path.remove()
  }
}

function hasPrimaryVariant (path) {
  return (
    path.node.openingElement.attributes.filter(
      attribute => attribute.value.value === 'primary'
    ).length > 0
  )
}

function isButtonElement (path) {
  return (
    path.node.openingElement.name.name === 'Button' &&
    path.type === 'JSXElement'
  )
}
