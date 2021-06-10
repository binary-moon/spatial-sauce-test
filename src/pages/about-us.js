import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { ParallaxProvider } from 'react-scroll-parallax'

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
    tag: "About Us",
    title: "We infuse creative ideas with innovative technology and spatial design."
  }

  return (
    <ParallaxProvider>
      <Layout>
        <ContentHero {...hero} />
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
          shape {
            type
            color
            position {
              x
              y
            }
          }
          props {
            alignment
            title
            copy
            text
            tag
            background
            content
            image {
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
