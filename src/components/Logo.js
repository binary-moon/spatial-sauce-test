import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { Link } from 'gatsby'

import LogoWhite from '../images/logo.svg';
import LogoColored from '../images/logo-colored.svg';

import { rem } from '../utils/mixins'

const Wrapper = styled(Link)`
  width: ${rem(220)};

  svg {
    display: block;
    width: 100%;
  }
`


const Logo = ({ type, className, style }) => {
  return (
    <Wrapper to={'/'} className={className} style={style}>
      {type === 'colored' ? <LogoColored /> : <LogoWhite />}
    </Wrapper>
  )
}

Logo.propTypes = {
  type: PropTypes.string
}

Logo.defeaultProps = {
  type: 'white'
}

export default Logo;
