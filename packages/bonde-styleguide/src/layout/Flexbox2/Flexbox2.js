import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


/**
 * The only true flexbox container.
 */
const Flexbox = styled.div`
  display: flex;

  ${props => props.padding && `padding: ${props.padding};`}
  
  ${props => props.horizontal && `
    width: 100%;
    flex-direction: row;
  `}
  ${props => props.vertical && `
    height: 100%;
    flex-direction: column;
  `}

  ${props => props.middle && `
    align-items: center;
    justify-content: center;
  `}

  ${props => props.spacing && `
    justify-content: space-${props.spacing}  
  `}
`

Flexbox.displayName = 'Flexbox2'

Flexbox.propTypes = {
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool,
  middle: PropTypes.bool,
  spacing: PropTypes.oneOf(['around', 'between'])
}

/* @component */
export default Flexbox
