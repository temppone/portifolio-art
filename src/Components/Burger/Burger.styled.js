import styled from "styled-components";

export const BurgerContainer = styled.button`
  display: flex;
  flex-direction: column;
  border: none;
  cursor: pointer;
  z-index: 10;
  background: transparent;
  padding: 5px;

  &:focus{
    outline: none;
  }
`;

export const BurgerBars = styled.div`
  width: 25px;
  height: 3px;
  margin-bottom: 5px;
  background: ${({ theme }) => theme.primaryLight};
  transition: all 0.3s linear;


  @media (min-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
   width: 75px;
   height: 9px;
   margin-bottom: 15px;
  }
`;
