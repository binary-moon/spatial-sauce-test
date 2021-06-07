import React, { useEffect } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

import homeData from "../../content/home.json"

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import TileList from '../components/TileList'
import ContentLifter from '../components/ContentLifter'

import { updateBackgroundColor } from '../utils/theme'

// markup
const IndexPage = () => {
  const { hero } = homeData;

  useEffect(() => {
    updateBackgroundColor('redBlue');
  }, [])
  
  return (
    <ParallaxProvider>
      <Layout>
        <Hero title={hero.title} description={hero.description} />
        <ContentLifter>
          <TileList />
        </ContentLifter>
      </Layout>
    </ParallaxProvider>
  )
}

export default IndexPage