import React, { useEffect } from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import { graphql } from 'gatsby'
import { ParallaxProvider } from 'react-scroll-parallax'

import Layout from '../components/Layout'
import ContentHero from '../components/ContentHero'
import ContentLifter from '../components/ContentLifter'
import MoreWork from '../components/MoreWork'

import { renderComponent } from '../utils/components'
import { updateBackgroundColor } from '../utils/theme'

const StyledContentLifter = styled(ContentLifter)`
  .ImageFullScreen {

    ${props => props.theme.mediaQueries.desktop} {
      display: none;
    }
  }

  &.noVideo .ImageFullScreen {

    ${props => props.theme.mediaQueries.desktop} {
      display: block;
    }
  }
`

const OurWorkDetail = ({ data }) => {
  const pageData = data.ourWorkJson;
  const { hero, components } = pageData
  const { video } = hero

  useEffect(() => {
    updateBackgroundColor();
  }, [])

  return (
    <ParallaxProvider>
      <Layout noVideo={!pageData.hero.video} isOurWorkDetail>
        <ContentHero {...hero} isOurWorkDetail />
        <StyledContentLifter className={classnames({noVideo: !video})}>
          {
            components.map(element => renderComponent(element.id, element.type, element.props, element.shape))
          }
        </StyledContentLifter>
        <MoreWork currentWork={pageData.title} />
      </Layout>
    </ParallaxProvider>
  )
};

export default OurWorkDetail

export const query = graphql`
  query ($slug: String!) {
    ourWorkJson(slug: {eq: $slug}, components: {elemMatch: {props: {}}}) {
      id
      title
      components {
        type
        props {
          title
          content
          videoSrc
          image {
	 					src {
              childImageSharp {
                gatsbyImageData
              }
            }
            alt
          }
          images {
	 					src {
              childImageSharp {
                gatsbyImageData
              }
            }
            alt
          }
        }
      }
      hero {
        client
        tag
        title
        background
        video
      }
    }
  }
`;