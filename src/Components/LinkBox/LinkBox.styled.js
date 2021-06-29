import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Image from '../Image/Image';

export const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  background: ${({ secundaryDark }) => secundaryDark};



  & > div:hover {
    opacity: 0.5;
    transition: 0.3s;
  }
`;

export const LinkBoxItemImg = styled(Image)`
  width: 300px;
  height: 300px;

  @media (min-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 65rem;
    height: 65rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 50rem;
    height: 50rem;
  }
`;

export const LinkBoxItemTitle = styled.h2`
  position: absolute;
  font-size: 3rem;
  color: ${({ theme }) => theme.primaryLight};


  @media (min-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 10rem;
  }
`;
