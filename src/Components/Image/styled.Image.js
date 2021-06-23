import styled from 'styled-components';

export const ImgWrapper = styled.div`
  display: grid;
`;

export const ImgItem = styled.img`
  max-width: 100%;
  display: block;
  grid-area: 1/1;
  opacity: 0;
  transition: 0.2s;
`;

export const ImgSkeleton = styled.div`
  grid-area: 1/1;
  height: 100%;
  background-image: linear-gradient(
    90deg,
    ${({ theme }) => theme.secundaryDark} 0px,
    ${({ theme }) => theme.primaryDark} 50%,
    ${({ theme }) => theme.secundaryDark} 100%
  );
  background-size: 200%;
  animation: skeleton 4s infinite linear;

  @keyframes skeleton {
    from {
      background-position: 0px;
    }
    to {
      background-position: -200%;
    }
  }
`;
