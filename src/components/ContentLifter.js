import React from 'react'
import styled from 'styled-components'

import { rem } from '../utils/mixins';

const Wrapper = styled.div`
  position: relative;
  margin-top: ${rem(-60)};

  ${props => props.theme.mediaQueries.desktop} {
    margin-top: ${rem(-100)};
  }
`

const ContentLifter = ({ className, children }) => (
  <Wrapper className={className}>{children}</Wrapper>
)

export default ContentLifter