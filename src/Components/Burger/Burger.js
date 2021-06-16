import React from "react";
import { BurgerContainer, BurgerBars } from "./Burger.styled";

const Burger = ({ openMenu, setOpenMenu }) => {
  return (
    <BurgerContainer openMenu={openMenu} onClick={() => setOpenMenu(!openMenu)}>
      <BurgerBars />
      <BurgerBars />
      <BurgerBars />
    </BurgerContainer>
  );
};

export default Burger;
