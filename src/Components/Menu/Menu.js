import React from 'react';
import { Link } from 'react-router-dom';
import { MenuContainer} from './Menu.styled';


const Menu = ({ openMenu }) => {
  return (
    <MenuContainer openMenu={openMenu}>
      <Link href="/">
        Início
      </Link>
      <Link href="/sobre">
        Sobre
      </Link>
      <Link href="/contato">
        Contato
      </Link>
    </MenuContainer>
  );
};

export default Menu;
