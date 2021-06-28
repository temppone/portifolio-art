import styled from 'styled-components';

export const DivBarContainer = styled.div`
  width: 50%;
  height: 2px;
  background: ${({ theme }) => theme.primaryLight};
  margin: 1rem 0;
  animation: 1s growUpWidth linear;

  @keyframes growUpWidth {
    0% {
      width: 0;
    }
    100% {
      width: 50%;
    }
  }

  @keyframes growUpWidth {
    0% {
      width: 0;
    }
    100% {
      width: 50%;
    }
  }
`;
