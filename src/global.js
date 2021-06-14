import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html {
  font-size: 16px;
  background: ${({ theme }) => theme.primaryDark};
  color: ${({ theme }) => theme.primaryLight};
  font-family: 'Roboto', sans-serif;
}
a{
  text-decoration: none;
  color: ${({ theme }) => theme.primaryDark};
}

a:hover{
  color: ${({ theme }) => theme.primaryLight};
}
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');

`;
