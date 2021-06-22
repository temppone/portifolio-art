import styled from 'styled-components';

export const ImgsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: turquoise;
  padding: 1rem;
  margin: 1rem;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 1rem;
  margin: 0.4rem;
  background: tomato;
  cursor: grab;

  @media (min-width: 600px) {
    width: 20%;
  }
`;

export const ImgDnd = styled.img`
  padding: 1rem;
`;
