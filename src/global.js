import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
   
  a{
  text-decoration: none;
  color: ${({ theme }) => theme.primaryDark};
  }

  a:hover{
    color: ${({ theme }) => theme.primaryLight};
  }

  html, body, #root{
    height: 100%;
  }

  html {
    font-size: 16px;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    font-family: 'Roboto', sans-serif;
  }
  
  body{-webkit-font-smoothing: antialiased !important}

  ul{
    list-style: none;
  }
`;
