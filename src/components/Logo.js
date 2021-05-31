import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

import LogoWhite from '../images/logo.svg';
import LogoColored from '../images/logo-colored.svg';

import { rem } from '../utils/mixins'

const Wrapper = styled.div`
  width: ${rem(220)};

  svg {
    display: block;
    width: 100%;
  }
`


const Logo = ({ type }) => {
  return (
    <Wrapper>
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
