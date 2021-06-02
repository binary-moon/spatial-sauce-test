import React from 'react'
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"

import { rem } from '../utils/mixins'

const Wrapper = styled.a`
  background: white;
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem(82)} ${rem(32)};
`

const Tag = styled.span`
  font-weight: 900;
  font-size: ${rem(12)};
  line-height: ${rem(14)};
`

const Title = styled.span`
  font-weight: 900;
  font-size: ${rem(38)};
  line-height: ${rem(38)};
  margin-top: ${rem(24)};
`

const Location = styled.span`
  font-weight: 900;
  font-size: ${rem(18)};
  line-height: ${rem(18)};
  margin-top: ${rem(10)};
`

const Tile = () => (
  <Wrapper>
    <Content>
      <Tag>We Made</Tag>
      <Title>Cherry Blossom Festival</Title>
      <Location>Cherry Blossom Festival</Location>
    </Content>
    <StaticImage src="../images/tile-1.png" />
  </Wrapper>
)

export default Tile