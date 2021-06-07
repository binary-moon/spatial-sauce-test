import React, { useEffect } from 'react'

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
    title: "Experiences that engage the senses, create memories and make places. "
  }
  
  return (
    <Layout>
      <ContentHero {...hero} />
      <ContentLifter>
        <TileList />
      </ContentLifter>
    </Layout>
  )
}

export default OurWork
