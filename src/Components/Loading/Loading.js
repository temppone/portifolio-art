import React from 'react';
import { LoadingContainer, LoadingContent } from './Loading.styled';
import  DivBar  from '../DivBar';

const Loading = () => {
  return (
    <LoadingContainer>
      Carregando
      <DivBar />
    </LoadingContainer>
  );
};

export default Loading;
