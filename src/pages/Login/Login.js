import React from "react";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { FlexContainer } from "../../shared/SharedStyles";
import { theme } from "../../theme";
import { LoginContainer, LoginTitle } from "./Login.styled";

const Login = () => {
  return (
    <LoginContainer>
      <FlexContainer
        flexDirection="column"
        background={theme.secundaryDark}
        width="80%"
        margin="0 auto"
      >
        <LoginTitle>Login</LoginTitle>
        <Input label="Usuário" id="usuario" placeholder="Digite seu usuário" />
        <Input label="Senha" id="senha" placeholder="Digite sua senha" />
        <Button ButtonName="Entrar" />
      </FlexContainer>
    </LoginContainer>
  );
};

export default Login;
