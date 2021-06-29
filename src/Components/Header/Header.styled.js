import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderPage = styled.header`
  height: 70px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    height: 140px;
    width: 1280px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 1280px;
    margin: 0 auto;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 1090px;
    margin: 0 auto;
    padding: 2rem 3rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1rem 0;
  }
`;

export const HeaderLogo = styled(Link)`
  background: transparent;
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primaryLight};

  &:hover {
    color: ${({ theme }) => theme.secundaryLight};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
   font-size: 4rem;
  }
`;
