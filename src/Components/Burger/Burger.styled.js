import styled from 'styled-components';

export const BurgerContainer = styled.button`
  display: flex;
  flex-direction: column;
  border: none;
  cursor: pointer;
  z-index: 10;
  background: transparent;
  padding: 5px;

  &:focus {
    outline: none;
  }
  div:first-child {
    transform: ${({ openMenu }) => (openMenu ? 'rotate(45deg)' : 'rotate(0)')};
  }

  div:nth-child(2) {
    opacity: ${({ openMenu }) => (openMenu ? '0' : '1')};
    transform: ${({openMenu}) => openMenu ? 'translateX(20px)' : 'translateX(0)'};
  }

  div:nth-child(3) {
    transform: ${({ openMenu }) => (openMenu ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`;

export const BurgerBars = styled.div`
  width: 25px;
  height: 3px;
  margin-bottom: 5px;
  background: ${({ theme }) => theme.primaryLight};
  transition: all 0.3s linear;
  transform-origin: 1px;
`;
