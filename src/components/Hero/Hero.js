import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import { HeroBackgroundImage } from './HeroBackgroundImage'
import { HeroBackgroundImageMobile } from './HeroBackgroundImageMobile'
import {HeroDecoration } from './HeroDecoration'
import ContentWrapper from '../../components/ContentWrapper';

import { rem } from '../../utils/mixins'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: ${rem(620)};

  ${props => props.theme.mediaQueries.desktop} {
    height: ${rem(975)};
  }
`

const Content = styled.div`
  position: absolute;
  top: ${rem(149)};
  left: 0;
  width: 100%;

  ${props => props.theme.mediaQueries.desktop} {
    top: ${rem(255)};
  }
`

const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  font-size: ${rem(60)};
  line-height: ${rem(60)};
  font-weight: 900;

  ${props => props.theme.mediaQueries.desktop} {
    font-size: ${rem(130)};
    line-height: ${rem(120)};
  }
`

const Description = styled.p`
  color: ${props => props.theme.colors.white};
  font-size: ${rem(20)};
  line-height: ${rem(30)};
  font-weight: 700;
  margin-top: ${rem(21)};

  ${props => props.theme.mediaQueries.desktop} {
    font-size: ${rem(30)};
    line-height: ${rem(40)};
    margin-top: ${rem(60)};
    max-width: ${rem(600)};
  }
`

const Arrow = styled.span`
  font-size: ${rem(50)};
  line-height: 1;
  color: ${props => props.theme.colors.white};
  margin-top: ${rem(21)};
  display: block;

  ${props => props.theme.mediaQueries.desktop} {
    margin-top: ${rem(60)};
  }
`

const StyledHeroBackgroundImage = styled(HeroBackgroundImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`

const StyledHeroBackgroundImageMobile = styled(HeroBackgroundImageMobile)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`

const StyledHeroDecoration = styled(HeroDecoration)`
  position: absolute;
  bottom: ${rem(30)};
  left: 0;
`

export const Hero = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' })
  return (
    <Wrapper>
      <ParallaxLayer
        offset={0}
        speed={0}
      >
        {isDesktop ? <StyledHeroBackgroundImage /> : <StyledHeroBackgroundImageMobile />}
      </ParallaxLayer>
      <ParallaxLayer
        offset={0}
        speed={0.25}
      >
        <StyledHeroDecoration />
      </ParallaxLayer>
      <ParallaxLayer
        offset={0}
        speed={0.5}
      >
        <Content>
          <ContentWrapper>
            <Title>We are <br />Spatial Sauce.</Title>
            <Description>We use magical technology to infuse engaging ideas into amazing spaces.</Description>
            <Arrow>&#8595;</Arrow>
          </ContentWrapper>
        </Content>
      </ParallaxLayer>
    </Wrapper>
  )
}
