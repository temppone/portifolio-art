import styled from 'styled-components';

export const ImgWrapper = styled.div`
  display: grid;
`;

export const ImgItem = styled.img`
  width: 350px;
  height: 350px;
  display: block;
  grid-area: 1/1;
  opacity: 0;
  transition: 0.2s;
`;

export const ImgSkeleton = styled.div`
  display: block;
  grid-area: 1/1;
  height: 350px;
  width: 350px;
  background-image: linear-gradient(
    90deg,
    ${({ theme }) => theme.tertiaryDark} 0px,
    ${({ theme }) => theme.secundaryDark} 50%,
    ${({ theme }) => theme.tertiaryDark} 100%
  );
  background-size: 200%;
  animation: skeleton 2s infinite linear;

  @keyframes skeleton {
    from {
      background-position: 0px;
    }
    to {
      background-position: -200%;
    }
  }
`;
