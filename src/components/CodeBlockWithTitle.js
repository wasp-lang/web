import React, { useState } from 'react'
import CodeBlock from '@theme/CodeBlock'

export default function CodeBlockWithTitle ({ title, children, language }) {
  return (
    <div className='code-with-header'>
      <div className="code-header">{ title }</div>

      <CodeBlock className={language}>
        { children }
      </CodeBlock>
    </div>
  )
}
