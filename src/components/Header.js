import React, { useState, useCallback } from 'react';
import styled from 'styled-components'
import { animated, useTransition } from 'react-spring';

import ContentWrapper from '../components/ContentWrapper'
import Logo from '../components/Logo'
import Hamburger from '../components/Hamburger'
import HamburgerMenu from '../components/HamburgerMenu'

import { rem } from '../utils/mixins'

const HeaderWrapper = styled.header`
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
`

const Wrapper = styled(ContentWrapper)`
  display: flex;
  padding-top: ${rem(60)};
  padding-bottom: ${rem(60)};
  align-items: center;
  justify-content: space-between;
  position: relative;

  ${props => props.theme.mediaQueries.largeDesktop} {
    padding-top: ${rem(110)};
    padding-bottom: ${rem(110)};
  }
`

const AnimatedHamburgerMenu = animated(HamburgerMenu);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    if (!isMenuOpen) {
      window.scroll(0, 0)
      document.body.classList.add('scrollLock')
    } else {
      document.body.classList.remove('scrollLock')
    }

    setIsMenuOpen(!isMenuOpen)
  }, [isMenuOpen])

  const menuTransitions = useTransition(isMenuOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return (
    <HeaderWrapper>
      {
        menuTransitions((styles, item) => item && <AnimatedHamburgerMenu style={styles} />)
      }
      <Wrapper>
        <Logo type={isMenuOpen ? 'colored' : 'white'}/>
        <Hamburger toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      </Wrapper>
    </HeaderWrapper>
  )
}

export default Header;
