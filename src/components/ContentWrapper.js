import React from 'react'
import styled from 'styled-components'

import { rem } from '../utils/mixins'

const Wrapper = styled.div`
  padding-right: ${rem(30)};
  padding-left: ${rem(30)};
  max-width: ${rem(1160)};
  margin-left: auto;
  margin-right: auto;
`

const ContentWrapper = ({ children, className }) => (
  <Wrapper className={className}>{children}</Wrapper>  
)

export default ContentWrapper
