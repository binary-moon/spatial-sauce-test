import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { rem } from '../utils/mixins'

import ContentWrapper from './ContentWrapper'

const Row = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.white};

  ${props => props.theme.mediaQueries.tablet} {
    flex-direction: row;
    padding: ${rem(60)} ${rem(55)};
  }

  ${props => props.theme.mediaQueries.desktop} {
    padding: ${rem(80)} ${rem(55)};
  }

  &.reverse {
    ${props => props.theme.mediaQueries.tablet} {
      flex-direction: row-reverse;
    }
  }
`

const Content = styled.div`
  width: 100%;
  padding: ${rem(42)} ${rem(32)};

  ${props => props.theme.mediaQueries.desktop} {
    width: calc(100% - ${rem(420)});
    padding: 0;
  }

  > * + * {
    margin: ${rem(30)} 0 0;  
  }
`

const ImageContainer = styled.div`
  width: 100%;

  > img {
    width: 100%;
    display: block;
  }

  ${props => props.theme.mediaQueries.desktop} {
    width: ${rem(420)};
    margin: 0 0 0 ${rem(105)};
  }

  .reverse & {
    ${props => props.theme.mediaQueries.desktop} {
      margin: 0 ${rem(105)} 0 0;
    }
  }
`

const Title = styled.h3`
  font-size: ${rem(14)};
  line-height: ${rem(14)};
  font-weight: 900;
  text-transform: uppercase;
  margin: 0;
  color: ${props => props.theme.colors.red};
`

const Copy = styled.p`
  font-size: ${rem(16)};
  line-height: ${rem(24)};
  font-weight: 500;
  margin: ${rem(30)} 0 0;
  color: ${props => props.theme.colors.black};

  ${props => props.theme.mediaQueries.desktop} {
    font-size: ${rem(30)};
    line-height: ${rem(40)};
    margin: ${rem(40)} 0 0;
  }

  &.small {
    font-size: ${rem(12)};
    line-height: ${rem(14)};

    ${props => props.theme.mediaQueries.desktop} {
      font-size: ${rem(16)};
      line-height: ${rem(24)};
    }
  }
`

const HTMLContent = styled.div`
  p {
    font-size: ${rem(12)};
    line-height: ${rem(14)};
    font-weight: 500;

    ${props => props.theme.mediaQueries.desktop} {
      font-size: ${rem(16)};
      line-height: ${rem(24)};
    }
  }

  > * + * {
    margin: ${rem(30)} 0 0;  
  }
`

const ContentRowWithImage = ({ alignment, image, title, copy, children, textSize, content }) => {
  const imageData = getImage(image.src)
  return (
    <ContentWrapper>
      {children}
      <Row className={classnames(alignment)}>
        <Content>
          {title &&
            <Title>{title}</Title>
          }
          {copy &&
            <Copy className={classnames({small: textSize === 'small'})}>{copy}</Copy>
          }
          {
            <HTMLContent dangerouslySetInnerHTML={{ __html: content }} />
          }
        </Content>
        <ImageContainer>
          <GatsbyImage image={imageData} alt={image.alt} />
        </ImageContainer>
      </Row>
    </ContentWrapper>
  )
}

export default ContentRowWithImage
