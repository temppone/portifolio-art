import styled, { css } from 'styled-components';

export const DndContainer = styled.div`
  margin: 0 auto;
  width: 95%;
  background: #000;
  padding: 1rem;
`;

// export const DndItem = styled.div`
//   padding: 1rem;
//   margin: 0.4rem;
//   background: tomato;

//   ${(props) =>
//     props.isDragging &&
//     css`
//       border: 2px dashed ${({ theme }) => theme.primaryLight};
//       padding: 1rem;
//     `}
// `;
