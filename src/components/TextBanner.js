import React from 'react'
import styled from 'styled-components'

import { rem } from '../utils/mixins'

import ContentWrapper from './ContentWrapper'

const Wrapper = styled.div`
  background: ${props => props.theme.colors.white};
  padding: ${rem(52)} ${rem(30)};
  display: flex;
  flex-direction: column;

  ${props => props.theme.mediaQueries.desktop} {
    padding: ${rem(135)} ${rem(80)};
  }

  > * + * {
    margin-top: ${rem(30)};

    ${props => props.theme.mediaQueries.desktop} {
      margin-top: ${rem(40)};
    }
  }
`

const Title = styled.span`
  font-size: ${rem(14)};
  line-height: ${rem(14)};
  font-weight: 900;
  color: ${props => props.theme.colors.red};
  text-align: center;
`

const Text = styled.span`
  font-size: ${rem(30)};
  line-height: ${rem(40)};
  font-weight: 500;
  color: ${props => props.theme.colors.black};
  text-align: center;

  ${props => props.theme.mediaQueries.desktop} {
    font-size: ${rem(60)};
    line-height: ${rem(70)};
  }
`

const TextBanner = ({ text, title }) => (
  <ContentWrapper>
    <Wrapper>
      <Title>{ title }</Title>
      <Text>{ text }</Text>
    </Wrapper>
  </ContentWrapper>
)

export default TextBanner
