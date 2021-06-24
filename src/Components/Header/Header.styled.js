import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderPage = styled.header`
  height: 70px;
  width: 100%;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

export const HeaderLogo = styled(Link)`
  background: transparent;
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primaryLight};

  &:hover {
    color: ${({ theme }) => theme.secundaryLight};
  }
`;
