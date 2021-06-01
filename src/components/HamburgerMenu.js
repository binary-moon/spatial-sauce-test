import React from 'react';
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'gatsby'

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
  
  ${props => props.theme.mediaQueries.desktop} {
    padding-top: ${rem(315)};
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
  padding-left: ${rem(92)};

  > * + * {
    margin-top: ${rem(20)};
  }

  ${props => props.theme.mediaQueries.desktop} {
    margin-left: ${rem(-92)};
  }
`

const NavigationItem = styled(Link)`
  display: flex;
  color: ${props => props.theme.colors.white};
  position: relative;
  transition: color .2s;

  &:nth-child(1):hover {
    color: ${props => props.theme.colors.red};
  }

  &:nth-child(2):hover {
    color: ${props => props.theme.colors.green};
  }

  &:nth-child(3):hover {
    color: ${props => props.theme.colors.blue};
  }

  &:nth-child(4):hover {
    color: ${props => props.theme.colors.yellow};
  }

  &:hover .navigationArrow {
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
  padding-left: ${rem(92)};
  margin-top: ${rem(60)};

  > * + * {
    margin-top: ${rem(10)};
  }

  ${props => props.theme.mediaQueries.desktop} {
    margin-top: ${rem(0)};
  }
`

const SocialItem = styled.a`
  color: ${props => props.theme.colors.white};
  display: flex;
`

const SocialText = styled.span`
  border-bottom-width: 2px;
  border-bottom-style: solid;
  padding-bottom: 3px;
  font-size: ${rem(28)};
  line-height: 1;
  font-weight: 500;
  letter-spacing: 0;
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

  ${props => props.theme.mediaQueries.desktop} {
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

  ${props => props.theme.mediaQueries.desktop} {
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

  ${props => props.theme.mediaQueries.desktop} {
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

  ${props => props.theme.mediaQueries.desktop} {
    height: 154px;
    width: 80px;
    border-bottom-left-radius: 154px;
    border-top-left-radius: 154px;
  }
`

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
}

const HamburgerMenu = ({ isMenuOpen }) => {
  const { mainNavigation, social } = navigationData;
  return (
    <AnimatePresence>
      {isMenuOpen &&
        <motion.div initial="hidden" animate="visible" exit="hidden" transition={{ duration: 0.3}} variants={variants}>
          <MenuWrapper>
            <Decoration>
              <Triangle1></Triangle1>
              <Triangle2></Triangle2>
              <Triangle3></Triangle3>
              <Circle></Circle>
            </Decoration>
            <Wrapper>
              <Navigation>
                {mainNavigation.map(item => (
                  <NavigationItem to={item.url}>
                    <Arrow className="navigationArrow">&#8594;</Arrow>
                    <Text>{item.title}</Text>
                  </NavigationItem>
                ))}
              </Navigation>
              <Social>
                {social.map(item => (
                  <SocialItem href={item.url}>
                    <SocialText>{item.title}</SocialText>
                  </SocialItem>
                ))}
              </Social>
            </Wrapper>
          </MenuWrapper>
        </motion.div>
      }
    </AnimatePresence>
  )
}

export default HamburgerMenu;
