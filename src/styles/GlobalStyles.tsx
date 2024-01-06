import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 
*,
*::before,
*::after {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
}
  body {
    font-family: 'Poppins', sans-serif;
    max-width: 1193px;
    margin: auto;
  }

`;

export default GlobalStyle;
