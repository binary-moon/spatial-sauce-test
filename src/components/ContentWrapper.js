import React from 'react'
import styled from 'styled-components'

import { rem } from '../utils/mixins'

const Wrapper = styled.div`
  padding: 0 ${rem(30)};
`

const ContentWrapper = ({ children, className }) => (
  <Wrapper className={className}>{children}</Wrapper>  
)

export default ContentWrapper
