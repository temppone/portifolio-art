import React from "react";
import { BurgerContainer, BurgerBars } from "./Burger.styled";

const Burger = () => {
  return (
    <BurgerContainer>
      <BurgerBars />
      <BurgerBars />
      <BurgerBars />
    </BurgerContainer>
  );
};

export default Burger;
