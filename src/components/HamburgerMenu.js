import React from 'react';
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'

import { rem } from '../utils/mixins'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  background: black;
  width: 100%;
  height: 100%;
`

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
}

const HamburgerMenu = ({ isMenuOpen }) => (
  <AnimatePresence>
    {isMenuOpen &&
      <motion.div initial="hidden" animate="visible" exit="hidden" transition={{ duration: 0.3}} variants={variants}>
        <Wrapper></Wrapper>
      </motion.div>
    }
  </AnimatePresence>
)

export default HamburgerMenu;
