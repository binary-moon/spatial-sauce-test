import { createGlobalStyle } from 'styled-components'
import '@fontsource/poppins'
import '@fontsource/poppins/900.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/500.css'

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    background: ${props => props.theme.background.grey};

    &.redBlue {
      background: ${props => props.theme.background.red};
      background: linear-gradient(90deg, ${props => props.theme.background.red} 0%, ${props => props.theme.background.blue} 100%);
    }

    &.blueGreen {
      background: ${props => props.theme.background.blue};
      background: linear-gradient(90deg, ${props => props.theme.background.blue} 0%, ${props => props.theme.background.green} 100%);
    }

    &.greenYellow {
      background: ${props => props.theme.background.green};
      background: linear-gradient(90deg, ${props => props.theme.background.green} 0%, ${props => props.theme.background.yellow} 100%);
    }

    &.yellowRed {
      background: ${props => props.theme.background.yellow};
      background: linear-gradient(90deg, ${props => props.theme.background.yellow} 0%, ${props => props.theme.background.red} 100%);
    }
  }

  &.scrollLock {
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  button {
    font-family: 'Poppins', sans-serif;
  }
`

export default GlobalStyle
