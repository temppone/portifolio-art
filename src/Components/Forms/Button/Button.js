import React from "react";
import { ButtonContainer, ButtonBox } from "./Button.styled";

const Button = ({ ButtonName }) => {
  return (
    <ButtonContainer>
      <ButtonBox>{ButtonName}</ButtonBox>
    </ButtonContainer>
  );
};

export default Button;
