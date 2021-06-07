import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { ParallaxBanner } from 'react-scroll-parallax';

import { HeroBackgroundImage } from './HeroBackgroundImage'
import { HeroBackgroundImageMobile } from './HeroBackgroundImageMobile'
import { HeroDecoration } from '../HeroDecoration'
import ContentWrapper from '../../components/ContentWrapper';

import { rem } from '../../utils/mixins'

const StyledParallaxBanner = styled(ParallaxBanner)`
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

  ${props => props.theme.mediaQueries.largeDesktop} {
    top: ${rem(255)};
  }
`

const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  font-size: ${rem(60)};
  line-height: ${rem(60)};
  font-weight: 900;

  ${props => props.theme.mediaQueries.tablet} {
    font-size: ${rem(100)};
    line-height: ${rem(110)};
  }

  ${props => props.theme.mediaQueries.largeDesktop} {
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

  ${props => props.theme.mediaQueries.tablet} {
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

  ${props => props.theme.mediaQueries.largeDesktop} {
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

const BackgroundImage = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' })
  if (isDesktop) {
    return <StyledHeroBackgroundImage />
  }
  return <StyledHeroBackgroundImageMobile></StyledHeroBackgroundImageMobile>
}

const ContentComponent = ({title, description}) => (
  <Content>
    <ContentWrapper>
      <Title dangerouslySetInnerHTML={{ __html: title }}></Title>
      <Description>{description}</Description>
      <Arrow>&#8595;</Arrow>
    </ContentWrapper>
  </Content>
)

export const Hero = ({title, description}) => {
  
  return (
    <StyledParallaxBanner
      style={{height: '100vh'}}
      layers={[
        {
          children: (<BackgroundImage />),
          amount: 0,
          expanded: false,
        },
        {
          children: (<StyledHeroDecoration />),
          amount: -0.5,
          expanded: false,
        },
        {
          children: (<ContentComponent title={title} description={description} />),
          amount: 0.5,
          expanded: false,
        }
      ]}
    >
    </StyledParallaxBanner>
  )
}
