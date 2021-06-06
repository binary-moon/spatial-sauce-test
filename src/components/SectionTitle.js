import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'

import { rem } from '../utils/mixins'

import ContentWrapper from './ContentWrapper'
import { HeroDecoration } from './HeroDecoration'

const Wrapper = styled.div`
  position: relative;
  padding: ${rem(40)} 0;

  ${props => props.theme.mediaQueries.desktop} {
    padding: ${rem(66)} 0;
  }
`

const StyledHeroDecoration = styled(HeroDecoration)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  transform: translate(0, 60px);
  z-index: -1;
`

const StyledContentWrapper = styled(ContentWrapper)`
  display: flex;
  flex-direction: column;
  position: relative;
`

const Tag = styled.span`
  font-size: ${rem(12)};
  line-height: ${rem(14)};
  font-weight: 900;
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;

  ${props => props.theme.mediaQueries.desktop} {
    font-size: ${rem(14)};
    line-height: ${rem(14)};
  }
`

const Title = styled.span`
  font-size: ${rem(38)};
  line-height: ${rem(38)};
  font-weight: 900;
  color: ${props => props.theme.colors.white};
  margin: ${rem(20)} 0 0;

  ${props => props.theme.mediaQueries.desktop} {
    font-size: ${rem(80)};
    line-height: ${rem(90)};
  }
`

const SectionTitle = ({ tag, title, background }) => (
  <Wrapper>
    <StyledHeroDecoration className={classnames(background)} />
    <StyledContentWrapper>
      <Tag>{tag}</Tag>
      <Title>{title}</Title>
    </StyledContentWrapper>
  </Wrapper>
)

export default SectionTitle
