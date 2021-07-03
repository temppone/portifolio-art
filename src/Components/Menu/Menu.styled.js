import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  background: ${({ theme }) => theme.primaryDark};
  width: 100%;
  height: 100vh;
  text-align: center;
  left: 0;
  top: 0;
  z-index: 2;

  transition: opacity 0.35s cubic-bezier(0.55, 0, 1, 0.45),
    visibility 0.35s cubic-bezier(0.55, 0, 1, 0.45),
    transform 0.35s cubic-bezier(0.55, 0, 1, 0.45);

  transform: ${({ openMenu }) =>
    openMenu ? 'translateY(0)' : 'translateY(-100%)'};

  a {
    color: ${({ theme }) => theme.primaryLight};
    transition: transform 0.3 linear;
    font-size: 2rem;
    padding: 2rem 1rem;
    transition: all 0.8s linear;
    width: 100%;
    margin: 0 auto;

    opacity: ${({ openMenu }) => (openMenu ? '1' : '0')};

    @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
      font-size: 3rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 3.5rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 4rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      font-size: 4.5rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
      font-size: 5rem;
    }

    :hover,
    :hover div {
      transform: scale(1.1);
      transition: all 0.3s linear;
    }
  }
`;

export const SquareMenu = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  background: ${({ theme }) => theme.primaryLight};
  display: inline-block;
  transform: translateY(-60%);
`;

export const MenuLink = styled.a``;
