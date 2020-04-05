export default function (babel) {
  const { types: t } = babel

  return {
    name: 'example plugin', // not required
    visitor: {
      Identifier (path) {
        path.node.name = path.node.name
          .split('')
          .reverse()
          .join('')
        console.log(t)
      }
    }
  }
}
