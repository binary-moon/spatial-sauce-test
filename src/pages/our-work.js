import React, { useEffect } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

import Layout from '../components/Layout'
import ContentHero from '../components/ContentHero'
import ContentLifter from '../components/ContentLifter'
import TileList from '../components/TileList'

import { updateBackgroundColor } from '../utils/theme'



const OurWork = () => {
  useEffect(() => {
    updateBackgroundColor('greenYellow');
  }, [])

  const hero = {
    background: "greenYellow",
    tag: "Our Work",
    title: "Experiences that win hearts & minds, forge memories and make places."
  }
  
  return (
    <ParallaxProvider>
      <Layout>
        <ContentHero {...hero} />
        <ContentLifter>
          <TileList displayOnlyWeMade/>
        </ContentLifter>
      </Layout>
    </ParallaxProvider>
  )
}

export default OurWork
