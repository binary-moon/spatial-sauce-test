import React, { useEffect } from 'react';
import styled from 'styled-components'
import { Link } from 'gatsby'
import { useTrail, animated } from 'react-spring'
import classnames from 'classnames'

import navigationData from '../../content/navigation.json'

import ContentWrapper from '../components/ContentWrapper'

import { rem } from '../utils/mixins'

const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  background: black;
  width: 100%;
  height: 100%;
  padding-top: ${rem(160)};
  
  ${props => props.theme.mediaQueries.largeDesktop} {
    padding-top: ${rem(270)};
  }
`

const Wrapper = styled(ContentWrapper)`
  display: flex;
  flex-direction: column;

  ${props => props.theme.mediaQueries.desktop} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  padding-left: ${rem(60)};

  > * + * {
    margin-top: ${rem(20)};
  }

  ${props => props.theme.mediaQueries.largeDesktop} {
    padding-left: ${rem(92)};
    margin-left: ${rem(-92)};
  }
`

const NavigationItem = styled(animated(Link))`
  display: flex;
  color: ${props => props.theme.colors.white};
  position: relative;
  transition: color .2s;

  &:nth-child(1):hover,
  &:nth-child(1).active {
    color: ${props => props.theme.colors.red};
  }

  &:nth-child(2):hover,
  &:nth-child(2).active {
    color: ${props => props.theme.colors.green};
  }

  &:nth-child(3):hover,
  &:nth-child(3).active {
    color: ${props => props.theme.colors.blue};
  }

  &:nth-child(4):hover,
  &:nth-child(4).active {
    color: ${props => props.theme.colors.yellow};
  }

  &:hover .navigationArrow,
  &.active .navigationArrow {
    opacity: 1;
    transform: translate(-100%, 0);
  }
`

const Arrow = styled.span`
  font-size: ${rem(50)};
  line-height: 1;
  position: absolute;
  top: ${rem(-8)};
  left: ${rem(-16)};
  transform: translate(-120%, 0);
  opacity: 0;
  transition: opacity .5s, transform .5s;

  ${props => props.theme.mediaQueries.desktop} {
    top: ${rem(8)};
  }
`

const Text = styled.span`
  border-bottom-width: 2px;
  border-bottom-style: solid;
  padding-bottom: 3px;
  font-size: ${rem(38)};
  line-height: 1;
  font-weight: 500;
  letter-spacing: 0;

  ${props => props.theme.mediaQueries.desktop} {
    font-size: ${rem(58)};
  }
`

const Social = styled.nav`
  display: flex;
  flex-direction: column;
  padding-left: ${rem(60)};
  margin-top: ${rem(30)};

  > * + * {
    margin-top: ${rem(10)};
  }

  ${props => props.theme.mediaQueries.largePhone} {
    margin-top: ${rem(60)};
  }

  ${props => props.theme.mediaQueries.desktop} {
    padding-left: ${rem(92)};
    margin-top: ${rem(0)};
  }
`

const SocialItem = styled(animated.a)`
  color: ${props => props.theme.colors.white};
  display: flex;
`

const SocialText = styled.span`
  border-bottom-width: 2px;
  border-bottom-style: solid;
  padding-bottom: 3px;
  font-size: ${rem(24)};
  line-height: 1;
  font-weight: 500;
  letter-spacing: 0;

  ${props => props.theme.mediaQueries.largePhone} {
    font-size: ${rem(28)};
  }
`

const Decoration = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`

const Triangle1 = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 23.5px 45px 23.5px;
  border-color: transparent transparent ${props => props.theme.colors.red}  transparent;
  position: absolute;
  bottom: 0;
  left: 0;

  ${props => props.theme.mediaQueries.tablet} {
    border-width: 0 81px 154px 81px;
  }
`

const Triangle2 = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 23.5px 45px 23.5px;
  border-color: transparent transparent ${props => props.theme.colors.green}  transparent;
  position: absolute;
  bottom: 0;
  left: 33%;

  ${props => props.theme.mediaQueries.tablet} {
    border-width: 0 81px 154px 81px;
  }
`

const Triangle3 = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 23.5px 45px 23.5px;
  border-color: transparent transparent ${props => props.theme.colors.blue}  transparent;
  position: absolute;
  bottom: 0;
  left: 66%;

  ${props => props.theme.mediaQueries.tablet} {
    border-width: 0 81px 154px 81px;
  }
`

const Circle = styled.div`
  height: 45px;
  width: 22.5px;
  position: absolute;
  bottom: 0;
  right: 0;
  background: ${props => props.theme.colors.yellow};
  border-bottom-left-radius: 45px;
  border-top-left-radius: 45px;

  ${props => props.theme.mediaQueries.tablet} {
    height: 154px;
    width: 80px;
    border-bottom-left-radius: 154px;
    border-top-left-radius: 154px;
  }
`

const HamburgerMenu = ({ className, style, setIsMenuOpen }) => {
  const { mainNavigation, social } = navigationData;

  const { pathname } = window.location

  const navigationTrail = useTrail(mainNavigation.length, {
    delay: 200,
    config: { mass: 10, tension: 2000, friction: 200 },
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: -20 }
  })

  const socialTrail = useTrail(social.length, {
    delay: 350,
    config: { mass: 10, tension: 2000, friction: 200 },
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: -20 }
  })

  useEffect(() => {
    return () => document.body.classList.remove('scrollLock');
  }, [])

  const handleClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <MenuWrapper className={className} style={style}>
      <Decoration>
        <Triangle1></Triangle1>
        <Triangle2></Triangle2>
        <Triangle3></Triangle3>
        <Circle></Circle>
      </Decoration>
      <Wrapper>
        <Navigation>
        {navigationTrail.map((styles, index) => (
          <NavigationItem 
            key={mainNavigation[index].id} 
            to={mainNavigation[index].url} 
            style={styles}
            className={classnames({active: pathname === mainNavigation[index].url})}
            onClick={handleClick}
          >
            <Arrow className="navigationArrow">&#8594;</Arrow>
            <Text>{mainNavigation[index].title}</Text>
          </NavigationItem>
        ))}
        </Navigation>
        <Social>
          {socialTrail.map((styles, index) => (
            <SocialItem key={social[index].id} href={social[index].url} style={styles} target="_blank">
              <SocialText>{social[index].title}</SocialText>
            </SocialItem>
          ))}
        </Social>
      </Wrapper>
    </MenuWrapper>
  )
}

export default HamburgerMenu;
