import React, { useEffect } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

import Layout from '../components/Layout'
import ContentHero from '../components/ContentHero'
import ContentLifter from '../components/ContentLifter'
import ContactForm from '../components/ContactForm'

import { updateBackgroundColor } from '../utils/theme'

const GetInTouch = () => {
  useEffect(() => {
    updateBackgroundColor('yellowRed');
  }, [])

  const hero = {
    background: "yellowRed",
    tag: "Get in touch",
    title: "Let’s create some magic together. Get in touch."
  }

  return (
    <ParallaxProvider>
      <Layout>
        <ContentHero {...hero} />
        <ContentLifter>
          <ContactForm />
        </ContentLifter>
      </Layout>
    </ParallaxProvider>
  )
}

export default GetInTouch