import React from 'react';
import { LinkBoxItemImg, LinkBoxItemTitle, NavLink } from './LinkBox.styled';

const LinkBox = ({ imgAlt, imgBoxItem, LinkBoxTitle, albumId }) => {
  return (
    <NavLink to={albumId}>
      <LinkBoxItemImg alt={imgAlt} src={imgBoxItem}></LinkBoxItemImg>
      <LinkBoxItemTitle>{LinkBoxTitle}</LinkBoxItemTitle>
    </NavLink>
  );
};

export default LinkBox;
