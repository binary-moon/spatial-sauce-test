import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

export const HeroBackgroundImageMobile = ({ className }) => {
  
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "hero-mobile.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 828) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
    />
  )
}