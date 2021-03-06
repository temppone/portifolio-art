import styled from "styled-components";

export const InputLabel = styled.label`
  display: block;
  padding-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: 500;
`;

export const InputBox = styled.input`
  border-radius: 1;
  border: none;
  padding: 1rem;
  font-size: 1.1rem;
  width: 100%;
  transition: 0.2s ease-in-out;
  background: ${({ theme }) => theme.secundaryDark};
  color: ${({ theme }) => theme.primaryLight};

  border: solid 0.1rem
    ${({ inputError, theme }) =>
      inputError ? theme.warningError : theme.tertiaryDark};

  &:focus {
    background: ${({ theme }) => theme.tertiaryDark};
    /* border: solid 0.1rem ${({ theme }) => theme.tertiaryLight}; */
  }
`;

export const InputError = styled.p`
  padding-top: 0.3rem;
  color: ${({ theme }) => theme.warningError};
`;
