import React from 'react';
import { Link } from 'react-router-dom';
import { MenuContainer, SquareMenu } from './Menu.styled';


const Menu = ({ openMenu }) => {
  return (
    <MenuContainer openMenu={openMenu}>
      <Link href="/">
        <SquareMenu /> Início
      </Link>
      <Link href="/">
        <SquareMenu /> Sobre
      </Link>
      <Link href="/">
        <SquareMenu /> Contato
      </Link>
    </MenuContainer>
  );
};

export default Menu;
