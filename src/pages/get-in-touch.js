import React, { useEffect } from 'react'

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
    <Layout>
      <ContentHero {...hero} />
      <ContentLifter>
        <ContactForm />
      </ContentLifter>
    </Layout>
  )
}

export default GetInTouch