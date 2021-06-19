import React from "react";
import Button from "../../Components/Button";
import Input from "../../Components/Input";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FlexContainer } from "../../shared/SharedStyles";
import { theme } from "../../theme";
import { LoginContainerForm, LoginTitle } from "./Login.styled";

const Login = () => {
  const schema = yup.object().shape({
    user: yup
      .string()
      .min(3, "Pelo menos 3 letras aqui")
      .required("Campo necessário"),
    password: yup
      .string()
      .min(8, "Pelo menos 8 caracters aqui")
      .required("Campo necessário"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const loginSubmit = (login) => {
    console.log(login);
  };

  //   // fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
  //   //   method: "POST",
  //   //   headers: {
  //   //     "Content-Type": "application/json",
  //   //   },
  //   // });
  // };

  return (
    <LoginContainerForm onSubmit={handleSubmit(loginSubmit)}>
      <FlexContainer
        flexDirection="column"
        background={theme.secundaryDark}
        width="80%"
        margin="0 auto"
      >
        <LoginTitle>Login</LoginTitle>
        <Input
          name="user"
          label="Usuário"
          type="text"
          placeholder="Digite seu usuário"
          register={register}
          inputError={errors.user?.message}
        />

        <Input
          name="password"
          id="password"
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          register={register}
          inputError={errors.password?.message}
        />

        <Button
          type="submit"
          onClick={handleSubmit}
          buttonName="Entrar"
          disabled={false}
        />
      </FlexContainer>
    </LoginContainerForm>
  );
};

export default Login;
