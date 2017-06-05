import React from 'react'
import { FormattedMessage } from 'react-intl'
import Preview from './preview'

export default ({ domain, onToggle, ...props }) => (
  <Preview {...props}>
    <ul className='ul--table'>
      <li className='li--table'>
        <label className='header'>
          <FormattedMessage
            id='community.components--domain.preview.label.domain'
            defaultMessage='Domínio da comunidade'
          />
        </label>
        <p
          className='body'
          onClick={onToggle}
          style={{ cursor: 'pointer' }}
        >
          {domain.domain_name}
        </p>
      </li>
    </ul>
  </Preview>
)
