import React from "react";
import { InputBox, InputLabel } from "./Input.styled";
import { FlexContainer } from "../../shared/SharedStyles";

const Input = ({ name, label, register, ...props }) => {
  return (
    <FlexContainer flexDirection="column" justfyContent="center">
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <InputBox
        name={name}
        {...register(`${name}`, { required: true })}
        {...props}
      />
    </FlexContainer>
  );
};

export default Input;
