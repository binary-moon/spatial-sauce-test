import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { rem } from '../utils/mixins'

const Wrapper = styled(animated.div)`
  background: white;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.black};
  height: 100%;

  ${props => props.theme.mediaQueries.tablet} {
    flex-direction: row;
  }

  &.black {
    background: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
  }

  &.red {
    background: ${props => props.theme.colors.red};
    color: ${props => props.theme.colors.white};
  }

  &.reverse {

    ${props => props.theme.mediaQueries.tablet} {
      flex-direction: row-reverse;
    }
  }

  &.vertical {
    flex-direction: column-reverse;

    ${props => props.theme.mediaQueries.tablet} {
      width: 100%;
    }
  }

  .tileImageTransitionContainer {
    transition: transform .3s;
    transform-origin: 50% 50%;
  }

  &:hover .tileImageTransitionContainer {
    transform: scale(1.15);
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${rem(82)} ${rem(32)};

  ${props => props.theme.mediaQueries.tablet} {
    padding: ${rem(42)} ${rem(32)};
    width: 50%;

    .vertical & {
      width: 100%;
    }
  }

  ${props => props.theme.mediaQueries.desktop} {
    padding: ${rem(82)} ${rem(32)};
  }

  > * + * {

  }
`

const Tag = styled.span`
  font-weight: 900;
  font-size: ${rem(12)};
  line-height: ${rem(14)};
  text-transform: uppercase;

  ${props => props.theme.mediaQueries.desktop} {
    font-size: ${rem(14)};
  }
`

const Title = styled.span`
  font-weight: 900;
  font-size: ${rem(38)};
  line-height: ${rem(38)};
  margin-top: ${rem(24)};

  ${props => props.theme.mediaQueries.desktop} {
    font-size: ${rem(58)};
    line-height: ${rem(58)};
  }
`

const Client = styled.span`
  font-weight: 900;
  font-size: ${rem(18)};
  line-height: ${rem(18)};
  margin-top: ${rem(24)};

  ${props => props.theme.mediaQueries.desktop} {
    font-size: ${rem(28)};
    line-height: ${rem(28)};
  }
`

const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;

  ${props => props.theme.mediaQueries.tablet} {
    width: 50%;

    .vertical & {
      width: 100%;
    }
  }
`

const Tile = ({ tileData, displayOnlyWeMade, reverse }) => {
  const { background, client, tag, title, image, alignment } = tileData

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  })
  const springProps = useSpring({
    y: inView ? 0 : 200,
    opacity: inView ? 1 : 0,
    from: { y: 200, opacity: 0 },
  })

  const imageData = getImage(image)

  return (
    <Wrapper ref={ref} className={classnames(background, alignment, { reverse })} style={springProps}>
      <Content>
        <Tag>{displayOnlyWeMade ? 'Case Study' : tag }</Tag>
        <Title>{title}</Title>
        {client &&
          <Client>{client}</Client>
        }
      </Content>
      <ImageContainer>
        <div className="tileImageTransitionContainer">
          <GatsbyImage image={imageData} alt={title} />
        </div>
      </ImageContainer>
    </Wrapper>
  )
}

export default Tile