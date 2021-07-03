import styled from 'styled-components';

export const DivBarContainer = styled.div`
  width: 10rem;
  height: 0.15rem;
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

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 0.15rem;
    height: 20rem;
    animation: 1s growUpHeight linear;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
  }
`;
