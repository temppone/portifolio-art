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
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.primaryLight};
    transition: transform 0.3 linear;
    font-size: 2rem;
    padding: 2rem 1rem;
    transition: all 0.8s linear;
    width: 90%;
    margin: 0 auto;

    opacity: ${({ openMenu }) => (openMenu ? '1' : '0')};

    @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
      width: 80%;
      font-size: 3rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      width: 70%;      
      font-size: 3.5rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      width: 50%;
      font-size: 4rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      width: 30%;
      font-size: 4.5rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
      width: 20%;
      font-size: 5rem;
    }

    :hover,
    :hover div {
      transform: scale(1.1);
      transition: all 0.1s ease-in-out;
    }
  }
`;

// export const SquareMenu = styled.div`
//   width: 0.5rem;
//   height: 0.5rem;
//   background: ${({ theme }) => theme.primaryLight};
//   display: inline-block;

//   @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
//       width: 0.6rem;
//       height: 0.6rem;
//     }

//     @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
//       width: 0.8rem;
//       height: 0.8rem;
//     }

//     @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
//       width: 1rem;
//       height: 1rem;
//     }

//     @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
//       width: 1.2rem;
//       height: 1.2rem;
//     }

//     @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
//       width: 1.4rem;
//       height: 1.4rem;
//     }
// `;

export const MenuLink = styled.a``;
