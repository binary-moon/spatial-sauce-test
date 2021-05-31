import React from 'react'
import styled from 'styled-components'

import { rem } from '../utils/mixins'

const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  font-size: ${rem(60)};
  line-height: ${rem(60)};
  font-weight: 900;
`

const Description = styled.p`
  color: ${props => props.theme.colors.white};
  font-size: ${rem(20)};
  line-height: ${rem(30)};
  font-weight: 700;
  margin-top: ${rem(20)};
`

const Hero = () => (
  <>
    <Title>We are Spatial Sauce.</Title>
    <Description>We use magical technology to infuse engaging ideas into amazing spaces.</Description>
  </>
)

export default Hero
