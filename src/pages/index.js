import * as React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import TileList from '../components/TileList'

// markup
const IndexPage = () => {
  return (
    <ParallaxProvider>
      <Layout>
        <Hero />
        <TileList />
      </Layout>
    </ParallaxProvider>
  )
}

export default IndexPage
