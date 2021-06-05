import * as React from 'react'

import JSONData from '../../content/about.json'

import Layout from '../components/Layout'

import { renderComponent } from '../utils/components';

// markup
const AboutUs = () => {
  const { components } = JSONData
  return (
    <Layout background="blueGreen">
      {
        components.map(element => renderComponent(element.id, element.type, element.props))
      }
    </Layout>
  )
}

export default AboutUs
