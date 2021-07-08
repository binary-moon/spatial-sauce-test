import React from 'react'
import styled from 'styled-components'

import { rem } from '../utils/mixins'

import ContentWrapper from './ContentWrapper'

const Wrapper = styled.div`
  background: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  padding: ${rem(46)} ${rem(32)};

  ${props => props.theme.mediaQueries.desktop} {
    flex-direction: row;
    padding: 0 0 ${rem(122)};
  }
`

const Column = styled.div`
  width: 100%;

  ${props => props.theme.mediaQueries.desktop} {
    width: 50%;
    padding: 0 ${rem(60)}
  }

  ul {
    list-style: none;
  }

  ul > li {
    position: relative;
    font-size: ${rem(16)};
    line-height: ${rem(24)};
    padding: 0 0 0 ${rem(20)};
    font-weight: 500;
    color: ${props => props.theme.colors.black};

    ${props => props.theme.mediaQueries.desktop} {
      font-size: ${rem(20)};
      line-height: ${rem(26)};
    }

    &:before {
      content: '‣';
      font-family: 'Poppins', sans-serif;
      font-size: ${rem(30)};
      font-weight: 500;
      position: absolute;
      top: 0;
      left: 0;
      color: ${props => props.theme.colors.black};
    }
  }

  ul > li + li {
    margin-top: ${rem(20)};
  }
`

const TextTwoCol = ({ columns }) => (
  <ContentWrapper>
    <Wrapper>
      <Column dangerouslySetInnerHTML={{ __html: columns[0] }}/>
      <Column dangerouslySetInnerHTML={{ __html: columns[1] }}/>
    </Wrapper>
  </ContentWrapper>
)

export default TextTwoCol
