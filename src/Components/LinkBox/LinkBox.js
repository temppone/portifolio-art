import React from 'react';
import {  LinkBoxItemImg, LinkBoxItemTitle, NavLink } from './LinkBox.styled';
import { Link } from 'react-router-dom';

import { FlexContainer } from '../../shared/SharedStyles';

const LinkBox = () => {
  return (
    <FlexContainer
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <NavLink>
        <LinkBoxItemImg src="https://source.unsplash.com/random/1000x1000"></LinkBoxItemImg>
        <LinkBoxItemTitle>2021</LinkBoxItemTitle>
      </NavLink>
      <NavLink>
        <LinkBoxItemImg src="https://source.unsplash.com/random/999x999"></LinkBoxItemImg>
        <LinkBoxItemTitle>2020</LinkBoxItemTitle>
      </NavLink>
    </FlexContainer>
  );
};

export default LinkBox;
