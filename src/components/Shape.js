import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'

import { rem } from '../utils/mixins'

const Element = styled.div`
  position: absolute;

  &.triangle {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 79px 150px 79px;

    &.red {
      border-color: transparent transparent ${props => props.theme.colors.red} transparent;
    }
  }

  
`

const Shape = ({ type, color, position }) => (
  <Element className={classnames(type, color)} style={{top: position.y, left: position.x}}></Element>
)

export default Shape
