import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
`;

export const ButtonBox = styled.button`
  background: ${({ theme }) => theme.secundaryLight};
  color: ${({ theme }) => theme.primaryDark};
  transition: 0.1s ease-in-out;


  &:hover {
    background: ${({ theme }) => theme.primaryHover};
  }
`;
