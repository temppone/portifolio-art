import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-space-between;
  flex-direction: column;
  align-items: center;
  background: transparent;
  padding: 2rem;
  color: ${({ theme }) => theme.primaryLight};
  bottom: 0;
  width: 100%;
  height: 7rem;

  ul li {
    display: inline;
    padding: 0.5rem;
  }

  ul li a {
    color: ${({ theme }) => theme.primaryLight};
    padding: 0.1rem;
  }
  ul li a:hover {
    color: ${({ theme }) => theme.secundaryLight};
  }
  ul li a:focus {
    color: ${({ theme }) => theme.tertiaryLight};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    position: absolute;
  }
`;

export const FooterContent = styled.div`
  padding-bottom: 1rem;
`;
