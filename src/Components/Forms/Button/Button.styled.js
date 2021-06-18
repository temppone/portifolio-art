import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
`;

export const ButtonBox = styled.button`
  background: ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.primaryDark};
`;
