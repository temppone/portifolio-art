import React from 'react';
import Button from '../../Components/Button';
import Input from '../../Components/Input';

import { get, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FlexContainer } from '../../shared/SharedStyles';
import { theme } from '../../theme';
import { LoginContainerForm, LoginTitle } from './Login.styled';
import { TOKEN_POST, USER_GET } from '../../api';

const Login = () => {
  React.useEffect(() => {
    const token = window.localStorage.getItem('token');

    if (token) {
      getUser(token);
      console.log(token);
    }
  }, []);

  const schema = yup.object().shape({
    user: yup
      .string()
      .min(3, 'Pelo menos 3 letras aqui')
      .required('Campo necessário'),
    password: yup
      .string()
      .min(3, 'Pelo menos 8 caracters aqui')
      .required('Campo necessário'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);

    const response = await fetch(url, options);

    const json = await response.json();

    console.log(json);
  };

  const loginSubmit = async (login) => {
    console.log(login.user, login.password);
    const { url, options } = TOKEN_POST({
      username: login.user,
      password: login.password,
    });

    console.log(login.user, login.password);

    const response = await fetch(url, options);
    const json = await response.json();
    window.localStorage.setItem('token', json.token);
    getUser(json.token);
    console.log(json);

    // const {data} = await axios.post(url, options);
    // const json = await data.json;
    // console.log(json);
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
