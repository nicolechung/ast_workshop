import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import CodeBlock from '../components/code-block'

/**
 * Pass components used in markdown so you don't have to use import
 */
const mdComponents = {
  h1: props => <h1 style={{ color: 'tomato' }} {...props} />,
  code: CodeBlock
}

export default ({ Component, pageProps }) => (
  <MDXProvider components={mdComponents}>
    <Component {...pageProps} />
  </MDXProvider>
)
