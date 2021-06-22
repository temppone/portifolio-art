import React from 'react';
import { FlexContainer } from '../../shared/SharedStyles';
import ImgDnd from '../../Components/ImgDnd/ImgDnd';
import { UserContext } from '../../shared/UserContext';
import { PainelHeader } from './Painel.styled';

const Painel = () => {
  const { data } = React.useContext(UserContext);

  return (
    <FlexContainer flexDirection="column" justifyContent="center">
      <PainelHeader>
      </PainelHeader>
      <ImgDnd />
    </FlexContainer>
  );
};

export default Painel;
