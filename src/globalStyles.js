import { createGlobalStyle } from 'styled-components'
import '@fontsource/poppins'
import '@fontsource/poppins/900.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/500.css'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    background: ${props => props.theme.background.red};
    background: linear-gradient(90deg, ${props => props.theme.background.red} 0%, ${props => props.theme.background.blue} 100%);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }
`

export default GlobalStyle
