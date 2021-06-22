import { useEffect } from 'react';
import { InputBox, InputLabel, InputError } from './Input.styled';
import { FlexContainer } from '../../shared/SharedStyles';

const Input = ({ name, label, register, inputError, ...props }) => {
  return (
    <FlexContainer flexDirection="column" justfyContent="center">
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <InputBox
        name={name}
        inputError={inputError}
        {...register(`${name}`, { required: true })}
        {...props}
      />

      <InputError>{inputError}</InputError>
    </FlexContainer>
  );
};

export default Input;
