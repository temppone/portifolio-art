import React from "react";
import { LoginContainer } from "./Login.styled";
import Button from "../Forms/Button";
import Input from "../Forms/Input";

const Login = () => {
  return (
    <LoginContainer>
      <Input label="Nome de usuário" id="usuario" />
      <Button ButtonName="Entrar" />
    </LoginContainer>
  );
};

export default Login;
