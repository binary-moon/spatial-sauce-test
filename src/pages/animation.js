import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'

import Logo from '../components/Logo'
import Layout from '../components/Layout'

const AnimatedLogo = styled(animated(Logo))`
`;

// markup
const AnimationPage = () => {
  const [clicked, setClicked] = useState(false);
  const springProps = useSpring({
    opacity: clicked ? 1 : 0,
    from: { opacity: 0 },
  })
  return (
    <Layout>
      <AnimatedLogo style={springProps}/>
      <button onClick={() => setClicked(!clicked)}>Click me</button>
    </Layout>
  )
}

export default AnimationPage
