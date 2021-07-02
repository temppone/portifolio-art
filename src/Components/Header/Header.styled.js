import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {FlexContainer} from '../../shared/SharedStyles'

export const HeaderPage = styled(FlexContainer)`
  height: 70px;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: yellow;
  width: 100%;
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
