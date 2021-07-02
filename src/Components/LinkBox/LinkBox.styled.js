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
  width: 19rem;
  height: 19rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: 23rem;
    height: 23rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 25rem;
    height: 25rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 800px;
    height: 800px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 30rem;
    height: 30rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 40rem;
    height: 40rem;
  }
`;

export const LinkBoxItemTitle = styled.h2`
  position: absolute;
  font-size: 3rem;
  text-shadow: 1px 1px #333;
  color: ${({ theme }) => theme.primaryLight};

  @media (min-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 10rem;
  }
`;
