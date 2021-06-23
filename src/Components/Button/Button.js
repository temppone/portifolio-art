import React from "react";
import { ButtonBox } from "./Button.styled";
import { FlexContainer } from "../../shared/SharedStyles";

const Button = ({ buttonName, ...props }) => {
  return (
    <FlexContainer justifyContent="flex-end" padding="1rem">
      <ButtonBox {...props}>{buttonName}</ButtonBox>
    </FlexContainer>
  );
};

export default Button;
