import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'

import { rem } from '../utils/mixins'

const Wrapper = styled.button`
  width: ${rem(49)};
  height: ${rem(49)};
  background: ${props => props.theme.colors.white};
  border-radius: 100%;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    width: ${rem(18)};
    height: ${rem(3)};
    background: ${props => props.theme.colors.black};
    transition: .2s transform, .2s left;
    position: relative;
    left: 0;
  }

  > * + * {
    margin-top: ${rem(3)};
  }

  &.isMenuOpen {
    > div:nth-child(1) {
      transform: rotate(135deg) translate3d(0, -4px, 0);
      left: -3px;
    }

    > div:nth-child(2) {
      transform: rotate(-135deg) translate3d(0, 4px, 0);;
      left: -3px;
    }
  }
`

const Hamburger = ({ toggleMenu, isMenuOpen }) => {
  const classes = classnames({isMenuOpen})

  return (
    <Wrapper className={classes} onClick={toggleMenu}>
      <div></div>
      <div></div>
    </Wrapper>
  )
}

export default Hamburger;
