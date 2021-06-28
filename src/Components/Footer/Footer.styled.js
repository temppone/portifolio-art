import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-space-between;
  flex-direction: column;
  align-items: center;
  background: transparent;
  padding: 2rem;
  color: ${({ theme }) => theme.primaryLight};

  ul li {
    display: inline;
    padding: 0.5rem;
  }

  ul li a {
    color: ${({ theme }) => theme.primaryLight};
    padding: 0.2rem;
  }
`;

export const FooterContent = styled.div`
  padding-bottom: 1rem;

`;
