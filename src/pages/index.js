import * as React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

import homeData from "../../content/home.json"

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import TileList from '../components/TileList'

// markup
const IndexPage = () => {
  const { hero, tiles } = homeData;
  return (
    <ParallaxProvider>
      <Layout>
        <Hero title={hero.title} description={hero.description} />
        <TileList tiles={tiles}/>
      </Layout>
    </ParallaxProvider>
  )
}

export default IndexPage
