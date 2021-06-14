import React from "react";
import { HeaderPage, HeaderContent, HeaderLogo } from "./Header.styled";
import Burger from "../Burger";

const Header = () => {
  return (
    <HeaderPage>
      <HeaderContent>
        <HeaderLogo>Gustavo Tempone</HeaderLogo>
        <Burger />
      </HeaderContent>
    </HeaderPage>
  );
};

export default Header;
