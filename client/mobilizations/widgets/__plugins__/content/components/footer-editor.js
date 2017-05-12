import React from 'react'

export default ({ children, ...props }) => (
  <div style={{ position: 'relative' }}>
    {children && children.map(child => React.cloneElement(child, props))}
  </div>
)
