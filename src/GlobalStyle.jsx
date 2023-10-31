import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: 'Montserrat Alternates', 'Montserrat';
      font-weights: 500;
      font-style: normal;
      line-height: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 20px;
  }
  
  code {
    font-family: 'Montserrat Alternates', 'Montserrat';
  }
  
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  
  ul {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
  
  h1,
  h2,
  h3,
  p,
  ul {
    margin: 0;
    padding: 0;
  }`