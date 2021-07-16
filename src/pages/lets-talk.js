import React, { useEffect } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { Helmet } from 'react-helmet'

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
    tag: "Let's Talk",
    title: "Feeling Spatial yet?\n Let’s create some magic together."
  }

  return (
    <ParallaxProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Spatial Sauce - Let's Talk</title>
      </Helmet>
      <Layout>
        <ContentHero {...hero} contactHero/>
        <ContentLifter>
          <ContactForm />
        </ContentLifter>
      </Layout>
    </ParallaxProvider>
  )
}

export default GetInTouch