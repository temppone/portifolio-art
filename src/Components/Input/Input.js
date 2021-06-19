import React from "react";
import { InputBox, InputLabel, InputContainer } from "./Input.styled";
import { FlexContainer } from "../../shared/SharedStyles";

const Input = ({ id, label, value, setValue, ...props }) => {
  return (
    <FlexContainer flexDirection="column" justfyContent="center">
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputBox
        type="text"
        name={id}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        id={id}
        {...props}
      ></InputBox>
    </FlexContainer>
  );
};

export default Input;
