import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 
*,
*::before,
*::after {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
}
body {
    margin: 0;
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
section {
 // border: 2px solid #d3ebd3; 
}

p {
 // border: 2px solid #ffe4e1; 
}
div {
//  border: 2px solid #f0f8ff; 
}
ul {
 // border: 2px solid #f5f5dc; 
}
li {
  //border: 2px solid #e6d7d9; 
  list-style: none;
  margin: 0;
  padding: 0
}
span {
 // border: 2px solid #ffc0cb; 
}
a {
  // border: 2px solid #f3e5ab; 
  text-decoration: none;
}
h2 {
  text-decoration: none;
 // border: 2px solid #f7e1e1; 
}
h3 {
 // border: 2px solid #f5f5f5 ; 
}
`


;

export default GlobalStyle;
