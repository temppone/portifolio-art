import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

  }
  ul{
    list-style: none;
  }
  
  button{
    box-shadow: none;
    border: none;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 1rem;
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
`;

