import * as React from 'react'
import { graphql } from 'gatsby'
import { ParallaxProvider } from 'react-scroll-parallax'

import homeData from "../../content/home.json"

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import TileList from '../components/TileList'
import ContentLifter from '../components/ContentLifter'

import { prepareTileListData } from '../utils/data'

// markup
const IndexPage = ({ data }) => {
  const { hero, tiles } = homeData;
  console.log({ data })
  const tileListData = prepareTileListData(data.allOurWorkJson.edges);
  return (
    <ParallaxProvider>
      <Layout>
        <Hero title={hero.title} description={hero.description} />
        <ContentLifter>
          <TileList tiles={tileListData}/>
        </ContentLifter>
      </Layout>
    </ParallaxProvider>
  )
}

export default IndexPage

export const query = graphql`
  {
    allOurWorkJson {
      edges {
        node {
          slug
          title
          card {
            slug
            tag
            title
            client
            background
            alignment
            url
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`