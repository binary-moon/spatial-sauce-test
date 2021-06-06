import React from 'react'
import styled from 'styled-components'

import { rem } from '../utils/mixins'

const Wrapper = styled.div`
  padding: ${rem(64)} 0 ${rem(40)};
`

const Title = styled.h4`
  font-weight: 700;
  font-size: ${rem(18)};
  line-height: ${rem(28)};
  color: ${props => props.theme.colors.black};
  text-align: center;
`

const MoreWork = () => {
  return (
    <Wrapper>
      <Title>More of our work</Title>
    </Wrapper>
  )
}

export default MoreWork
