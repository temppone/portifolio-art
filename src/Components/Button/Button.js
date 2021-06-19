import React from "react";
import { ButtonBox } from "./Button.styled";
import { FlexContainer } from "../../shared/SharedStyles";
const Button = ({ ButtonName }) => {
  return (
    <FlexContainer justifyContent="flex-end">
      <ButtonBox>{ButtonName}</ButtonBox>
    </FlexContainer>
  );
};

export default Button;
