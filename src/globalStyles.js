import { createGlobalStyle } from 'styled-components'
import '@fontsource/poppins'
import '@fontsource/poppins/900.css'
import '@fontsource/poppins/700.css'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    background: ${props => props.theme.colors.red};
    background: linear-gradient(152deg, ${props => props.theme.colors.red} 0%, ${props => props.theme.colors.blue} 100%);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle
