import React from "react";
import { HeaderPage, HeaderContent, HeaderLogo } from "./Header.styled";
import Burger from "../Burger";
import Menu from "../Menu";

const Header = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <>
      <HeaderPage>
        <HeaderContent>
          <HeaderLogo>Gustavo Tempone</HeaderLogo>
          <Burger openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </HeaderContent>
      </HeaderPage>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
};

export default Header;
