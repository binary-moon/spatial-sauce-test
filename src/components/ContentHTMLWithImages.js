import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { rem } from '../utils/mixins'

import ContentWrapper from './ContentWrapper'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.white};
  padding: 0 0 ${rem(30)};

  ${props => props.theme.mediaQueries.tablet} {
    padding: ${rem(60)} ${rem(55)};
    flex-direction: row;
  }

  ${props => props.theme.mediaQueries.desktop} {
    padding: ${rem(80)} ${rem(55)};
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

  > * + * {
    margin-top: ${rem(30)};
  }

  ${props => props.theme.mediaQueries.desktop} {
    width: ${rem(420)};
    margin: 0 0 0 ${rem(105)};
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

const ContentHTMLWithImages = ({ images, title, children, content }) => {
  return (
    <ContentWrapper>
      {children}
      <Container>
        <Content>
          {title &&
            <Title>{title}</Title>
          }
          {
            <HTMLContent dangerouslySetInnerHTML={{ __html: content }} />
          }
        </Content>
        <ImageContainer>
          {images.map(image => (
            <GatsbyImage image={getImage(image.src)} alt={image.alt} />
          ))}
        </ImageContainer>
      </Container>
    </ContentWrapper>
  )
}

export default ContentHTMLWithImages
