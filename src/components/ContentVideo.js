import React from 'react'
import styled from 'styled-components'

import ContentWrapper from './ContentWrapper'

const Wrapper = styled.div`
  position: relative;
  padding-bottom:56.25%;
  height: 0;
  overflow: hidden;

  > iframe {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
  }
`

const ContentVideo = ({videoSrc, title}) => {
  return (
    <ContentWrapper>
      <Wrapper>
        <iframe 
          src={videoSrc}
          title={title}
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </Wrapper>
    </ContentWrapper>
  )
}

export default ContentVideo
