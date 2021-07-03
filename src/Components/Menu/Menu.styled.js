import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  background: ${({ theme }) => theme.primaryDark};
  width: 100%;
  height: 100vh;
  text-align: center;
  transition: transform 0.1s ease-in-out;
  left: 0;
  top: 0;
  z-index: 2;
  transform: ${({ openMenu }) =>
    openMenu ? "translateX(0)" : "translateX(-100%)"};

  a {
    color: ${({ theme }) => theme.primaryLight};
    transition: transform 0.3 linear;
    font-size: 2rem;
    padding: 2rem 1rem;
  }




`;

export const MenuLink = styled.a``;
