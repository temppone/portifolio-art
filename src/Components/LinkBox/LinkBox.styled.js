import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Image from '../Image/Image';

export const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 85%;
  background: ${({ secundaryDark }) => secundaryDark};
`;

export const LinkBoxItemImg = styled(Image)`
  width: 300px;
  height: 300px;

  @media (min-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 35rem;
    height: 35rem;
  }
`;

export const LinkBoxItemTitle = styled.h2`
  position: absolute;
  font-size: 3rem;
  color: ${({ theme }) => theme.primaryLight};
`;
