import React from 'react';
import { FlexContainer } from '../../shared/SharedStyles';
import ImgDnd from '../../Components/ImgDnd/ImgDnd';

const Painel = () => {
  return (
    <FlexContainer flexDirection="column" justifyContent="center">
      <ImgDnd />
    </FlexContainer>
  );
};

export default Painel;
