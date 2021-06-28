import styled from 'styled-components';

export const DivBarContainer = styled.div`
  width: 10rem;
  height: 2px;
  background: ${({ theme }) => theme.primaryLight};
  margin: 1rem 0;
  animation: 1s growUpWidth linear;

  @keyframes growUpWidth {
    0% {
      width: 0;
    }
    100% {
      width: 10rem;
    }
  }

  @keyframes growUpHeight {
    0% {
      height: 0;
    }
    100% {
      height: 20rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 2px;
    height: 20rem;
    animation: 1s growUpHeight linear;
  }
`;
