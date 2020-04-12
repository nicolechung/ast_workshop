/* eslint react/jsx-key: 0 */

import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { SampleButton } from './sample-button'
import { DangerButton } from './danger-button'
import { mdx } from '@mdx-js/react'

const transformCode = code => `/** @jsx mdx */ ${code}`

/**
 * Pass React components into scope that the CodeBlock component knows about them
 * i.e. how to display how the component looks
 */
const scope = {
  SampleButton,
  DangerButton,
  mdx
}

const previewStyle = {
  style: {
    padding: '20px 5px',
    background: 'white'
  }
}

export default props => {
  const { live, children } = props
  if (live) {
    return (
      <div style={{ backgroundColor: 'black' }}>
        <LiveProvider
          code={children}
          transformCode={transformCode}
          scope={scope}
        >
          <LivePreview {...previewStyle} />
          <LiveEditor />
          <LiveError />
        </LiveProvider>
      </div>
    )
  }
  return <pre>{children}</pre>
}
