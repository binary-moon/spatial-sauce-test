import React, { useEffect } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

import homeData from "../../content/home.json"

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import TileList from '../components/TileList'
import ContentLifter from '../components/ContentLifter'

import { updateBackgroundColor } from '../utils/theme'

// markup
const IndexPage = () => {
  const { hero } = homeData;

  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "ogimage.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const ogImageSrc = data.desktop.childImageSharp.fluid.src

  useEffect(() => {
    updateBackgroundColor('redBlue');
  }, [])
  
  return (
    <ParallaxProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Spatial Sauce</title>
        <meta property='og:image' content={ogImageSrc} />
      </Helmet>
      <Layout>
        <Hero title={hero.title} description={hero.description} />
        <ContentLifter>
          <TileList randomize />
        </ContentLifter>
      </Layout>
    </ParallaxProvider>
  )
}

export default IndexPage