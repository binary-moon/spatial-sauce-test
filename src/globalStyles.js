import { createGlobalStyle } from 'styled-components'
import '@fontsource/poppins'
import '@fontsource/poppins/900.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/500.css'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    background: ${props => props.theme.background.red};
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
