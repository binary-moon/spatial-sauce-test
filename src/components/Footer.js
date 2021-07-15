import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { useLocation } from "@reach/router"

import navigationData from '../../content/navigation.json'

import ContentWrapper from './ContentWrapper'
import Logo from './Logo'
import FooterDecoration from './FooterDecoration'

import { rem } from '../utils/mixins'


const Wrapper = styled.footer`
  position: relative;
  padding: ${rem(96)} 0 ${rem(72)};
  overflow: hidden;
  margin-top: ${rem(-30)};
`

const FooterBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, ${props => props.theme.background.red} 0%, ${props => props.theme.background.blue} 100%);
  z-index: -1;

  .redBlue &,
  .blueGreen &,
  .greenYellow &,
  .yellowRed & {
    background: transparent;
  }

`

const StyledContentWrapper = styled(ContentWrapper)`
  display: flex;
  flex-direction: column;
  position: relative;
`

const Copy = styled.span`
  color: ${props => props.theme.colors.white};
  font-size: ${rem(38)};
  line-height: ${rem(48)};
  font-weight: 500;

  ${props => props.theme.mediaQueries.desktop} {
    font-size: ${rem(58)};
    line-height: ${rem(78)};
  }

  > a {
    text-decoration: underline;
    color: ${props => props.theme.colors.white};

    &:hover {
      text-decoration: none;
    }
  }
`

const SocialContainer = styled.div`
  margin-top: ${rem(72)};
`

const SocialTitle = styled.span`
  font-size: ${rem(12)};
  line-height: ${rem(14)};
  text-transform: uppercase;
  font-weight: 900;
  color: ${props => props.theme.colors.white};
`

const SocialNav = styled.nav`
  margin-top: ${rem(20)};
  display: flex;
  flex-direction: column;
`

const Social = styled.a`
  font-size: ${rem(18)};
  line-height: ${rem(28)};
  text-decoration: underline;
  font-weight: 500;
  color: ${props => props.theme.colors.white};
`

const StyledLogo = styled(Logo)`
  margin-top: ${rem(86)};
`

const Terms = styled.span`
  font-size: ${rem(14)};
  line-height: ${rem(18)};
  font-weight: 500;
  color: ${props => props.theme.colors.white};
  margin-top: ${rem(26)};
`

const TopButton = styled.button`
  width: ${rem(49)};
  height: ${rem(49)};
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.background.black};
  font-size: ${rem(30)};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 100%;
  font-weight: 900;
  position: absolute;
  bottom: ${rem(66)};
  right: ${rem(30)};
  cursor: pointer;
`

const Arrow = styled.span`
  transform: translate(0, 3px);
`

const StyledFooterDecoration = styled(FooterDecoration)`
  position: absolute;
  top: 0;
  left: 0;
`

const Circle = styled.div`
  height: 147px;
  width: 77px;
  background: ${props => props.theme.shapes.red};
  border-bottom-left-radius: 147px;
  border-top-left-radius: 147px;
  position: absolute;
  right: 0;
  top: 0;
  
  ${props => props.theme.mediaQueries.desktop} {
    height: 512px;
    width: 268px;
    border-bottom-left-radius: 512px;
    border-top-left-radius: 512px;
  }

  .redBlue & {
    background: ${props => props.theme.background.red};
  }

  .blueGreen & {
    background: ${props => props.theme.background.blue};
  }

  .greenYellow & {
    background: ${props => props.theme.background.green};
  }

  .yellowRed & {
    background: ${props => props.theme.background.yellow};
  }
`

const Footer = (props) => {
  console.log(props)
  const { social } = navigationData;

  const scrollTop = () => {
    window.scroll(0, 0)
  } 
  const location = useLocation();
  
  return (
    <Wrapper>
      <FooterBackground>
        <StyledFooterDecoration />
        <Circle />
      </FooterBackground>
      <StyledContentWrapper>
        {location.pathname !== '/lets-talk' &&
          <Copy>Let's chat about your next project. <br/><Link to="/lets-talk">Get in touch</Link></Copy>
        }
        {location.pathname === '/lets-talk' &&
          <Copy>We’re based in Sydney, available globally.</Copy>
        }
        <SocialContainer>
          <SocialTitle>See us on social</SocialTitle>
          <SocialNav>
            {social.map((item) => <Social href={item.url} target="_blank" key={item.id}>{item.title}</Social>)}
          </SocialNav>
        </SocialContainer>
        <StyledLogo type="white"/>
        <Terms>Spatial Sauce is a subsidiary of Spatial Effects Pty Ltd. ABN: 23621851465</Terms>
        <TopButton onClick={scrollTop}><Arrow>&#8593;</Arrow></TopButton>
      </StyledContentWrapper>
    </Wrapper>
  )
}

export default Footer