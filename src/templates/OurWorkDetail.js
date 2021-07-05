import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { ParallaxProvider } from 'react-scroll-parallax'

import Layout from '../components/Layout'
import ContentHero from '../components/ContentHero'
import ContentLifter from '../components/ContentLifter'
import MoreWork from '../components/MoreWork'

import { renderComponent } from '../utils/components'
import { updateBackgroundColor } from '../utils/theme'

const OurWorkDetail = ({ data }) => {
  const pageData = data.ourWorkJson;
  const { hero, components } = pageData

  useEffect(() => {
    updateBackgroundColor();
  }, [])

  console.log({pageData})

  return (
    <ParallaxProvider>
      <Layout noVideo={!pageData.hero.video} isOurWorkDetail>
        <ContentHero {...hero} isOurWorkDetail />
        <ContentLifter>
          {
            components.map(element => renderComponent(element.id, element.type, element.props, element.shape))
          }
        </ContentLifter>
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