import styled from "styled-components";

export const LinkBoxContainer = styled.div`
  width: 100%;
`;

export const LinkBoxItem = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 90%;
  margin: 1rem auto 1rem auto;
`;

export const LinkBoxItemImg = styled.img`
  width: 100%;
  transition: all 0.5s;
  opacity: 90%;

  &:hover {
    opacity: 70%;
  }
`;

export const LinkBoxItemTitle = styled.h2`
  position: absolute;
  font-size: 3rem;
  color: ${({ theme }) => theme.primaryLight};
`;
