import * as React from 'react'
import { Parallax, ParallaxLayer} from '@react-spring/parallax'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import TileList from '../components/TileList'

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Parallax pages={2} style={{top: '0', left: '0'}}>
        <Hero />
        <ParallaxLayer
          offset={0.9}
          speed={0}
        >
          <TileList />
        </ParallaxLayer>
      </Parallax>
    </Layout>
  )
}

export default IndexPage
