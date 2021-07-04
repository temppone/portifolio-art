import styled from 'styled-components';

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  background: transparent;
  height: 100vh;
  font-weight: bold;
  font-size: 1.2rem;
  
  div{
    width: 20rem;
    height: 0.15rem;
    animation: 3s growUpWidth linear;
  }
`;

export const LoadingContent = styled.div``;
