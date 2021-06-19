//TODO disebled no botão quando o usuário enviar o login

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
  cursor: pointer;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.primaryHover};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.primaryLight};
  }

  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;
