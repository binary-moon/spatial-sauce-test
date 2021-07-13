import React, { useMemo, useState, useCallback, useEffect } from 'react';
import styled from 'styled-components'
import { animated, useTransition, useSpring } from 'react-spring';
import classnames from 'classnames'
import { useMediaQuery } from 'react-responsive'

import ContentWrapper from '../components/ContentWrapper'
import Logo from '../components/Logo'
import Hamburger from '../components/Hamburger'
import HamburgerMenu from '../components/HamburgerMenu'

import { rem } from '../utils/mixins'

const HeaderWrapper = styled(animated.header)`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
`

const Wrapper = styled(ContentWrapper)`
  display: flex;
  /* padding-top: ${rem(60)};
  padding-bottom: ${rem(60)}; */
  align-items: center;
  justify-content: space-between;
  position: relative;

  ${props => props.theme.mediaQueries.largeDesktop} {
    /* padding-top: ${rem(110)};
    padding-bottom: ${rem(110)}; */
  }
`

const AnimatedHamburgerMenu = animated(HamburgerMenu);

const Header = ({ isOurWorkDetail, noVideo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' })

  const handleScroll = () => {
    if (window.pageYOffset !== 0) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = useCallback(() => {
    if (!isMenuOpen) {
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

  const headerTransitions = useSpring(
    {
      paddingTop: isScrolled ? 20 : 60,
      paddingBottom: isScrolled ? 20 : 60,
      background: isScrolled ? 'rgba(255, 255, 255, 0.95' : 'rgba(255, 255, 255, 0',
      from: {
        paddingTop: 60,
        paddingBottom: 60,
        background: 'rgba(255, 255, 255, 0',
      }
    }
  )

  const logoColor = useMemo(() => {
    if (isMenuOpen) {
      return 'colored'
    } else {
      if (isOurWorkDetail) {
        if (!isDesktop) {
          return 'black'
        } else {
          if (isScrolled) {
            return 'black'
          } else {
            if (noVideo) {
              return 'black'
            }
            return 'white'
          }
        }
      } else {
        if (isScrolled) {
          return 'black'
        }
        return 'white'
      }
    }
  }, [isMenuOpen, isScrolled, isDesktop, isOurWorkDetail, noVideo])

  const isHamburgerDark = useMemo(() => {
    if (!isOurWorkDetail) {
      return isScrolled && !isMenuOpen
    }

    if (!isDesktop) {
      return !isMenuOpen
    }

    return noVideo && !isMenuOpen
  }, [isScrolled, isMenuOpen, isDesktop, isOurWorkDetail, noVideo])

  return (
    <HeaderWrapper className={classnames({isScrolled})} style={headerTransitions}>
      {
        menuTransitions((styles, item) => item && <AnimatedHamburgerMenu style={styles} setIsMenuOpen={setIsMenuOpen} />)
      }
      <Wrapper>
        <Logo type={logoColor}/>
        <Hamburger toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} isDark={isHamburgerDark} />
      </Wrapper>
    </HeaderWrapper>
  )
}

export default Header;
