import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const Triangle = styled.div`
  width: 33.333%;
  height: 147px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: ${props => props.theme.background.blue};
    clip-path: polygon(0 0, 0% 100%, 100% 100%);
    height: 100%;
  }

  .redBlue &:after {
    background: ${props => props.theme.background.blue};
  }

  .blueGreen &:after {
    background: ${props => props.theme.background.green};
  }

  .greenYellow &:after {
    background: ${props => props.theme.background.yellow};
  }

  .yellowRed &:after {
    background: ${props => props.theme.background.red};
  }

  ${props => props.theme.mediaQueries.desktop} {
    height: 512px;
  }
`

const Empty = styled.div`
  width: 33.333%;
  height: 147px;

  ${props => props.theme.mediaQueries.desktop} {
    height: 512px;
  }
`

const FooterDecoration = ({ className }) => {
  const repeatCount = 21;

  return (
    <Wrapper className={className}>
      {[...Array(repeatCount)].map((shape, index) => {
        if (index === 2) {
          return (<Empty key={index}></Empty>)
        }
        return (<Triangle key={index}></Triangle>)
      })}
    </Wrapper>
  )
}

export default FooterDecoration