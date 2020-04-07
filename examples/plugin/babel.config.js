const presets = [
  [
    '@babel/preset-env',
    {
      targets: '> 2%',
      modules: false
    }
  ]
]
const plugins = ['@babel/plugin-syntax-jsx']

module.exports = { presets, plugins }
