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
  transform: ${({openMenu}) => openMenu ? 'translateY(0)' : 'translateY(-100%)'} ;


`;

export const MenuLink = styled.a`
  color: ${({ theme }) => theme.primaryLight};
  transition: transform 0.3 linear;
  font-size: 3rem;
  padding: 3rem;
`;
