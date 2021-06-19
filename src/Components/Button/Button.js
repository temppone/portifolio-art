import React from "react";
import { ButtonBox } from "./Button.styled";
import { FlexContainer } from "../../shared/SharedStyles";

const Button = ({ buttonName, ...props }) => {
  return (
    <FlexContainer justifyContent="flex-end">
      <ButtonBox {...props}>{buttonName}</ButtonBox>
    </FlexContainer>
  );
};

export default Button;
