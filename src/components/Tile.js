import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'

import { rem } from '../utils/mixins'

const Wrapper = styled(animated.a)`
  background: white;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.black};

  ${props => props.theme.mediaQueries.desktop} {
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

    ${props => props.theme.mediaQueries.desktop} {
      flex-direction: row-reverse;
    }
  }

  &.vertical {
    flex-direction: column-reverse;

    ${props => props.theme.mediaQueries.desktop} {
      width: 50%;
    }
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${rem(82)} ${rem(32)};

  ${props => props.theme.mediaQueries.desktop} {
    width: 50%;

    .vertical & {
      width: 100%;
    }
  }
`

const Tag = styled.span`
  font-weight: 900;
  font-size: ${rem(12)};
  line-height: ${rem(14)};

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

const Location = styled.span`
  font-weight: 700;
  font-size: ${rem(18)};
  line-height: ${rem(18)};
  margin-top: ${rem(24)};

  ${props => props.theme.mediaQueries.desktop} {
    font-size: ${rem(28)};
    line-height: ${rem(28)};
  }
`

const Image = styled.img`
  width: 100%;

  ${props => props.theme.mediaQueries.desktop} {
    width: 50%;

    .vertical & {
      width: 100%;
    }
  }
`

const Tile = ({ tileData }) => {
  const { background, tag, title, location, image, alignment } = tileData
  const { ref, inView } = useInView({
    threshold: 0,
  })
  const springProps = useSpring({
    y: inView ? 0 : 200,
    opacity: inView ? 1 : 0,
    from: { y: 200, opacity: 0 },
  })
  return (
    <Wrapper ref={ref} className={classnames(background, alignment)} style={springProps}>
      <Content>
        <Tag>{tag}</Tag>
        <Title>{title}</Title>
        {location &&
          <Location>{location}</Location>
        }
      </Content>
      <Image src={image} />
    </Wrapper>
  )
}

export default Tile