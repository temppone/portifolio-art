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

  &:nth-child(odd):after {
    content: '';
    width: 50%;
    height: 2px;
    background: ${({ theme }) => theme.primaryLight};
    margin: 1rem 0;
    animation: 1s growUpWidth linear;

    @keyframes growUpWidth {
      0% {
        width: 0;
      }
      100% {
        width: 50%;
      }
    }
  }
`;

export const LinkBoxItemImg = styled(Image)`
  width: 100%;
  opacity: 80%;

  &:hover {
    opacity: 100%;
  }
`;

export const LinkBoxItemTitle = styled.h2`
  position: absolute;
  font-size: 3rem;
  color: ${({ theme }) => theme.primaryLight};
`;
