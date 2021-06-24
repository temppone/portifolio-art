import styled from 'styled-components';

export const SwitchContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

export const SwitchLabel = styled.label`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 2.4rem;
  height: 1.4rem;
  position: relative;
  transition: background-color 0.2s;
  background: ${({ theme }) => theme.tertiaryDark};
  &:after {
    position: absolute;
    content: '';
    display: block;
    width: 1rem;
    height: 1rem;
    margin: 0.2rem;
    background: ${({ theme }) => theme.primaryLight};
    transition: 0.2s;
  }
`;

export const SwitchInput = styled.input`
  position: absolute;
  opacity: 0;
  z-index: 1;
  width: 2.4rem;
  height: 1.4rem;
  &:checked + ${SwitchLabel} {
    background: ${({ theme }) => theme.secundaryLight};
    &::after {
      content: '';
      display: block;
      width: 1rem;
      height: 1rem;
      margin-left: 20px;
      transition: 0.2s;
      background: ${({ theme }) => theme.tertiaryDark};
    }
  }
`;
