import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 80%;
  background: ${({ secundaryDark }) => secundaryDark};

  &:after {
    content: '';
    width: 50%;
    height: 2px;
    background: ${({ theme }) => theme.primaryLight};
    margin: 1rem 0;
  }
`;

export const LinkBoxItemImg = styled.img`
  width: 100%;
  transition: all 0.5s;
  opacity: 90%;

  &:hover {
    opacity: 70%;
  }
`;

export const LinkBoxItemTitle = styled.h2`
  position: absolute;
  font-size: 3rem;
  color: ${({ theme }) => theme.primaryLight};
`;
