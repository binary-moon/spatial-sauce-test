import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ContentWrapper from './ContentWrapper'

const ImageFullScreen = ({ image }) => {
  const imageData = getImage(image.src)
  return (
    <ContentWrapper className="ImageFullScreen">
      <GatsbyImage image={imageData} alt={image.alt} />
    </ContentWrapper>
  )
}

export default ImageFullScreen
