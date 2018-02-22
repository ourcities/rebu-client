import React from 'react'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`{
  position: ${props => props.position || 'fixed'};
  padding: ${props => props.padding || '0'};
  width: ${props => props.width ? `${props.width}` : '100%'};
  height: 100%;
  ${props => !props.position && css`
    display: flex;
    align-items: center;
    justify-content: center;
  `}
  background-color: ${props => props.bg || '#fff'};
  font-family: Nunito Sans, Source Sans Pro, Arial;
}`

Wrapper.displayName = 'Wrapper'

export default Wrapper
