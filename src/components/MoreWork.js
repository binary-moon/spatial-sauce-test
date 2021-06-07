import React from 'react'
import styled from 'styled-components'

import TileList from './TileList'

import { rem } from '../utils/mixins'

const Wrapper = styled.div`
  padding: ${rem(64)} 0 0;

  ${props => props.theme.mediaQueries.desktop} {
    padding: ${rem(136)} 0 0;
  }
`

const Title = styled.h4`
  font-weight: 700;
  font-size: ${rem(18)};
  line-height: ${rem(28)};
  color: ${props => props.theme.colors.black};
  text-align: center;
`

const StyledTileList = styled(TileList)`
  margin-top: ${rem(40)};

  ${props => props.theme.mediaQueries.desktop} {
    margin-top: ${rem(64)};
  }
`

const MoreWork = () => {
  return (
    <Wrapper>
      <Title>More of our work</Title>
      <StyledTileList maxLimit={3} />
    </Wrapper>
  )
}

export default MoreWork
