import React from 'react';
import {
  SwitchContainer,
  SwitchInput,
  SwitchLabel,
} from './SwitchButton.styled';

const SwitchButton = () => {
  return (
    <SwitchContainer>
      <SwitchInput id="checkbox" type="checkbox" />
      <SwitchLabel htmlFor="checkbox" />
    </SwitchContainer>
  );
};

export default SwitchButton;
