import styled, { css } from 'styled-components';

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

  ${(props) =>
    props.isDragging &&
    css`
      border: 2px dashed ${({ theme }) => theme.primaryLight};
      padding: 1rem;
      background: transparent;
      cursor: grabbing;

      img {
        opacity: 0;
      }
    `}

`;

export const ImgDnd = styled.img`
  padding: 1rem;
`;
