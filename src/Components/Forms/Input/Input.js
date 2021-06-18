import React from "react";
import { InputBox, InputLabel, InputContainer } from "./Input.styled";

const Input = ({ id, label, value, setValue, ...props }) => {
  return (
    <InputContainer>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputBox
        type="text"
        name={id}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        id={id}
        {...props}
      ></InputBox>
    </InputContainer>
  );
};

export default Input;
