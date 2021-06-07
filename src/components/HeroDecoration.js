import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 147px 0 0 154px;
  border-color: transparent transparent transparent ${props => props.theme.shapes.red};

  ${props => props.theme.mediaQueries.tablet} {
    border-width: 294px 0 0 308px;
  }

  ${props => props.theme.mediaQueries.desktop} {
    border-width: 512px 0 0 536px;
  }

  .blueGreen & {
    border-color: transparent transparent transparent ${props => props.theme.shapes.green};

    ${props => props.theme.mediaQueries.desktop} {
      border-color: transparent transparent transparent ${props => props.theme.shapes.blue};
    }
  }

  .greenYellow & {
    border-color: transparent transparent transparent ${props => props.theme.shapes.green};

    ${props => props.theme.mediaQueries.desktop} {
      border-color: transparent transparent transparent ${props => props.theme.shapes.green};
    }
  }

  .yellowRed & {
    border-color: transparent transparent transparent ${props => props.theme.shapes.yellow};

    ${props => props.theme.mediaQueries.desktop} {
      border-color: transparent transparent transparent ${props => props.theme.shapes.yellow};
    }
  }
`

const Circle = styled.div`
  height: 147px;
  width: 77px;
  background: ${props => props.theme.shapes.red};
  border-bottom-left-radius: 147px;
  border-top-left-radius: 147px;

  ${props => props.theme.mediaQueries.tablet} {
    height: 294px;
    width: 154px;
    border-bottom-left-radius: 294px;
    border-top-left-radius: 294px;
  }

  ${props => props.theme.mediaQueries.desktop} {
    height: 512px;
    width: 268px;
    border-bottom-left-radius: 512px;
    border-top-left-radius: 512px;
  }

  .blueGreen & {
    background: ${props => props.theme.shapes.green};

    ${props => props.theme.mediaQueries.desktop} {
      background: ${props => props.theme.shapes.blue};
    }
  }

  .greenYellow & {
    background: ${props => props.theme.shapes.green};

    ${props => props.theme.mediaQueries.desktop} {
      background: ${props => props.theme.shapes.green};
    }
  }

  .yellowRed & {
    background: ${props => props.theme.shapes.yellow};

    ${props => props.theme.mediaQueries.desktop} {
      background: ${props => props.theme.shapes.yellow};
    }
  }
`

export const HeroDecoration = ({ className }) => (
  <Wrapper className={className}>
    <Triangle></Triangle>
    <Triangle></Triangle>
    <Circle></Circle>
  </Wrapper>
)