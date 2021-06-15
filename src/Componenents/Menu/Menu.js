import React from "react";
import { MenuContainer, MenuLink } from "./Menu.styled";

const Menu = ({ openMenu }) => {
  return (
    <MenuContainer openMenu={openMenu}>
      <MenuLink href="/">Início</MenuLink>
      <MenuLink href="/">Sobre</MenuLink>
      <MenuLink href="/">Contato</MenuLink>
    </MenuContainer>
  );
};

export default Menu;
