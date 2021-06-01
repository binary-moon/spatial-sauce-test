import React, { useState, useCallback } from 'react';
import styled from 'styled-components'

import ContentWrapper from '../components/ContentWrapper'
import Logo from '../components/Logo'
import Hamburger from '../components/Hamburger'
import HamburgerMenu from '../components/HamburgerMenu'

import { rem } from '../utils/mixins'

const HeaderWrapper = styled.header`
  position: relative;
`

const Wrapper = styled(ContentWrapper)`
  display: flex;
  padding-top: ${rem(75)};
  padding-bottom: ${rem(75)};
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;

  ${props => props.theme.mediaQueries.desktop} {
    padding-top: ${rem(110)};
    padding-bottom: ${rem(110)};
  }
`

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen)
  }, [isMenuOpen])

  return (
    <HeaderWrapper>
      <HamburgerMenu isMenuOpen={isMenuOpen}/>
      <Wrapper>
        <Logo type={isMenuOpen ? 'colored' : 'white'}/>
        <Hamburger toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      </Wrapper>
    </HeaderWrapper>
  )
}

export default Header;
