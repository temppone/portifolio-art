import React from 'react';
import { Link } from 'react-router-dom';
import { MenuContainer, SquareMenu } from './Menu.styled';


const Menu = ({ openMenu }) => {
  return (
    <MenuContainer openMenu={openMenu}>
      <Link href="/">
        Início
      </Link>
      <Link href="/">
        Sobre
      </Link>
      <Link href="/">
        Contato
      </Link>
    </MenuContainer>
  );
};

export default Menu;
