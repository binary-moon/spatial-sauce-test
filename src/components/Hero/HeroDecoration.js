import React from 'react'
import styled from 'styled-components'

import { rem } from '../../utils/mixins'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 147px 0 0 154px;
  border-color: transparent transparent transparent ${props => props.theme.shapes.red};

  ${props => props.theme.mediaQueries.desktop} {
    border-width: 512px 0 0 536px;
  }
`

const Circle = styled.div`
  height: 147px;
  width: 77px;
  background: ${props => props.theme.shapes.red};
  border-bottom-left-radius: 147px;
  border-top-left-radius: 147px;

  ${props => props.theme.mediaQueries.desktop} {
    height: 512px;
  width: 268px;
  border-bottom-left-radius: 512px;
  border-top-left-radius: 512px;
  }
`

export const HeroDecoration = ({ className }) => (
  <Wrapper className={className}>
    <Triangle></Triangle>
    <Triangle></Triangle>
    <Circle></Circle>
  </Wrapper>
)