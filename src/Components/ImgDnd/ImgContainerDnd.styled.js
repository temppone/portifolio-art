import styled, { css } from 'styled-components';

export const ImgsContainer = styled.div`
  background: turquoise;
  padding: 1rem;
  margin: 1rem;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem;
  margin: 0.4rem;
  background: tomato;
  cursor: grab;

  @media (min-width: 600px) {
    width: 15%;
  }
`;

export const ImgDnd = styled.img`
  padding: 1rem;
`;
