import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { ParallaxProvider } from 'react-scroll-parallax'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'
import ContentHero from '../components/ContentHero'
import ContentLifter from '../components/ContentLifter'

import { updateBackgroundColor } from '../utils/theme'
import { renderComponent } from '../utils/components';

// markup
const AboutUs = ({ data }) => {
  const components = data.allAboutContentJson.edges;

  useEffect(() => {
    updateBackgroundColor('blueGreen');
  }, [])

  const hero = {
    background: "blueGreen",
    tag: "Who we are",
    title: "We create experiences that people fall in love with."
  }

  return (
    <ParallaxProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Spatial Sauce - About Us</title>
      </Helmet>
      <Layout>
        <ContentHero {...hero} aboutUsHero />
        <ContentLifter>
          {
            components.map(element => renderComponent(element.node.id, element.node.type, element.node.props, element.node.shape))
          }
        </ContentLifter>
      </Layout>
    </ParallaxProvider>
  )
}

export default AboutUs

export const query = graphql`
  {
    allAboutContentJson {
      edges {
        node {
          id
          type
          props {
            title
            tag
            background
            content
            reverse
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
      }
    }
  }
`
