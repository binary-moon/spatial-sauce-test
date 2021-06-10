import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import BackgroundImage from 'gatsby-background-image'
import { ParallaxBanner } from 'react-scroll-parallax';

import ContentWrapper from './ContentWrapper';
import { HeroDecoration } from './HeroDecoration'

import { rem } from '../utils/mixins'

const StyledParallaxBanner = styled(ParallaxBanner)`
  position: relative;
  padding: ${rem(149)} 0 0;
  min-height: ${rem(620)};

  &.blueGreen {
    background: linear-gradient(126deg, ${props => props.theme.background.blue} 52%, ${props => props.theme.background.green} 100%);
  }

  &.greenYellow {
    background: linear-gradient(126deg, ${props => props.theme.background.green} 52%, ${props => props.theme.background.yellow} 100%);
  }

  ${props => props.theme.mediaQueries.tablet} {
    min-height: ${rem(917)};

    ${props => props.theme.mediaQueries.largeDesktop} {
      padding: ${rem(255)} 0 0;
    }
  }
`

const StyledContentWrapper = styled(ContentWrapper)`
  position: relative;
  top: ${rem(160)};

  ${props => props.theme.mediaQueries.desktop} {
    top: ${rem(200)};
  }
`

const Tag = styled.h4`
  font-size: ${rem(12)};
  line-height: ${rem(14)};
  font-weight: 900;
  text-transform: uppercase;
  margin: 0;
  color: ${props => props.theme.colors.white};

  ${props => props.theme.mediaQueries.tablet} {
    font-size: ${rem(14)};
  }
`

const Title = styled.h1`
  font-size: ${rem(38)};
  line-height: ${rem(42)};
  font-weight: 900;
  color: ${props => props.theme.colors.white};
  margin: ${rem(24)} 0 0;

  ${props => props.theme.mediaQueries.tablet} {
    font-size: ${rem(80)};
    line-height: ${rem(90)};
  }
`

const Arrow = styled.span`
  font-size: ${rem(50)};
  line-height: 1;
  color: ${props => props.theme.colors.white};
  margin-top: ${rem(60)};
  display: block;

  ${props => props.theme.mediaQueries.tablet} {
    margin-top: ${rem(60)};
  }
`

const StyledHeroDecoration = styled(HeroDecoration)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`

const BackgroundSection = ({ className, image }) => (
  <BackgroundImage className={className} Tag="section" fluid={image.childImageSharp.fluid}/>
)

const StyledBackgroundSection = styled(BackgroundSection)`
  position: absolute !important;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const ParallaxBackground = ({ image }) => {
  if (image) {
    return (
      <StyledBackgroundSection image={image} />
    )
  }
  return null
}

const ParallaxMidground = ({background, image}) => {
  if (!image) {
    return (
      <StyledHeroDecoration className={classnames(background)} />
    )
  }
  return null
}

const ParallaxForeground = ({tag, title}) => (
  <StyledContentWrapper>
    <Tag>{tag}</Tag>
    <Title>{title}</Title>
    <Arrow>&#8595;</Arrow>
  </StyledContentWrapper>
)

const StyledParallaxBackground = styled(ParallaxBackground)`
`

const StyledParallaxMidground = styled(ParallaxMidground)`
  position: absolute;
  bottom: ${rem(30)};
  left: 0;
`

const StyledParallaxForeground = styled(ParallaxForeground)`
`

const ContentHero = ({ background, tag, title, image }) => {
  return (
    <StyledParallaxBanner
      style={{height: '100vh'}}
      layers = {[
        {
          children: (<StyledParallaxBackground image={image} />),
          amount: 0.5,
          expanded: false,
        },
        {
          children:(<StyledParallaxMidground background={background} image={image}/>),
          amount: -0.5,
          expanded: false,
        },
        {
          children: (<StyledParallaxForeground tag={tag} title={title} />),
          amount: 0,
          expanded: false,
        }
      ]}
      className={classnames(background)}>
    </StyledParallaxBanner>
  )
}

export default ContentHero
