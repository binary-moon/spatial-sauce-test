import { createGlobalStyle } from 'styled-components'
import '@fontsource/poppins'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    background: ${props => props.theme.colors.red}
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle
