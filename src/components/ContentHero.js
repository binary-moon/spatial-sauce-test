import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import BackgroundImage from 'gatsby-background-image'
import { ParallaxBanner } from 'react-scroll-parallax';
import { useMediaQuery } from 'react-responsive'

import ContentWrapper from './ContentWrapper';
import { HeroDecoration } from './HeroDecoration'

import { rem } from '../utils/mixins'

const StyledParallaxBanner = styled(ParallaxBanner)`
  position: relative;
  padding: ${rem(149)} 0 0;
  min-height: ${rem(620)};
  background: white;

  &.blueGreen {
    background: linear-gradient(126deg, ${props => props.theme.background.blue} 52%, ${props => props.theme.background.green} 100%);
  }

  &.greenYellow {
    background: linear-gradient(126deg, ${props => props.theme.background.green} 52%, ${props => props.theme.background.yellow} 100%);
  }

  &.yellowRed {
    background: linear-gradient(126deg, ${props => props.theme.background.yellow} 52%, ${props => props.theme.background.red} 100%);
  }

  &.largeHero {
    min-height: ${rem(620)};
    
    ${props => props.theme.mediaQueries.tablet} {
      min-height: ${rem(860)};

      ${props => props.theme.mediaQueries.largeDesktop} {
        padding: ${rem(255)} 0 0;
      }
    }
  }

`

const StyledContentWrapper = styled(ContentWrapper)`
  position: relative;
  top: ${rem(144)};

  ${props => props.theme.mediaQueries.desktop} {
    top: ${rem(184)};
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

  ${props => props.theme.mediaQueries.desktop} {
    color: ${props => props.theme.colors.white};
  }

  .isOurWorkDetail & {
    color: ${props => props.theme.colors.black};

    ${props => props.theme.mediaQueries.desktop} {
      color: ${props => props.theme.colors.white};
    }
  }


  .isOurWorkDetail.noVideo & {
    color: ${props => props.theme.colors.black};

    ${props => props.theme.mediaQueries.desktop} {
      color: ${props => props.theme.colors.black};
    }
  }
`

const Client = styled.h4`
  font-size: ${rem(18)};
  line-height: ${rem(18)};
  font-weight: 700;
  margin: 0;
  color: ${props => props.theme.colors.white};
  margin: ${rem(24)} 0 0;

  ${props => props.theme.mediaQueries.tablet} {
    font-size: ${rem(28)};
  line-height: ${rem(28)};
  }

  ${props => props.theme.mediaQueries.desktop} {
    color: ${props => props.theme.colors.white};
  }

  .isOurWorkDetail & {
    color: ${props => props.theme.colors.black};

    ${props => props.theme.mediaQueries.desktop} {
      color: ${props => props.theme.colors.white};
    }
  }


  .isOurWorkDetail.noVideo & {
    color: ${props => props.theme.colors.black};

    ${props => props.theme.mediaQueries.desktop} {
      color: ${props => props.theme.colors.black};
    }
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

  ${props => props.theme.mediaQueries.desktop} {
    color: ${props => props.theme.colors.white};
  }

  .isOurWorkDetail & {
    color: ${props => props.theme.colors.black};

    ${props => props.theme.mediaQueries.desktop} {
      color: ${props => props.theme.colors.white};
    }
  }

  .isOurWorkDetail.noVideo & {
    color: ${props => props.theme.colors.black};

    ${props => props.theme.mediaQueries.desktop} {
      color: ${props => props.theme.colors.black};
    }
  }
`

const Arrow = styled.span`
  font-size: ${rem(40)};
  line-height: 1;
  color: ${props => props.theme.colors.white};
  margin-top: ${rem(30)};
  display: block;

  ${props => props.theme.mediaQueries.tablet} {
    font-size: ${rem(50)};
    margin-top: ${rem(60)};
  }

  ${props => props.theme.mediaQueries.desktop} {
    color: ${props => props.theme.colors.white};
  }

  .isOurWorkDetail & {
    color: ${props => props.theme.colors.red};

    ${props => props.theme.mediaQueries.desktop} {
      color: ${props => props.theme.colors.white};
    }
  }

  .isOurWorkDetail.noVideo & {
    color: ${props => props.theme.colors.black};

    ${props => props.theme.mediaQueries.desktop} {
      color: ${props => props.theme.colors.black};
    }
  }
`

const StyledHeroDecoration = styled(HeroDecoration)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  .isOurWorkDetail & {
    display: none;
  }
`

const BackgroundSection = ({ className, image }) => (
  <BackgroundImage className={className} Tag="section" fluid={image.childImageSharp.fluid}/>
)

const VideoWrapper = styled.div`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;

  > iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
  }
`

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
`

const FadeFilm = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: .35;
`

const StyledBackgroundSection = styled(BackgroundSection)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const ParallaxBackground = ({ image, video }) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' })
  if (isDesktop && video) {
    return (
      <VideoWrapper>
        <Backdrop />
        <iframe src={video} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        <FadeFilm />
      </VideoWrapper>
    )
  }
  if (image) {
    return (
      <StyledBackgroundSection image={image} />
    )
  }
  return null
}

const ParallaxMidground = ({background, video}) => {
  if (!video) {
    return (
      <StyledHeroDecoration className={classnames(background)} />
    )
  }
  return null
}

const ParallaxForeground = ({tag, title, client}) => (
  <StyledContentWrapper>
    <Tag>{tag}</Tag>
    <Title>{title}</Title>
    {client && <Client>{client}</Client>}
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

const ContentHero = ({ background, tag, title, client, image, video, isOurWorkDetail }) => {
  return (
    <StyledParallaxBanner
      layers = {[
        {
          children: (<StyledParallaxBackground image={image} video={video}/>),
          amount: 0,
          expanded: true,
        },
        {
          children:(<StyledParallaxMidground background={background} video={video}/>),
          amount: -0.5,
          expanded: false,
        },
        {
          children: (<StyledParallaxForeground tag={tag} title={title} client={client} background={background} video={video} />),
          amount: 0,
          expanded: false,
        }
      ]}
      className={classnames(background, {largeHero: !isOurWorkDetail}, {isOurWorkDetail}, {noVideo: !video})}>
    </StyledParallaxBanner>
  )
}

export default ContentHero
