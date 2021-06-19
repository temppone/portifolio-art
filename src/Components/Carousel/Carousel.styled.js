import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  width: 100%;
  height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 10%;
    height: 80%;
    background: transparent;
    color: #fff;
    border: none;
  }
`;

export const CarouselItem = styled.div`
  padding: 0 0.5rem;
  min-width: 90%;
  height: 80vh;
  align-items: center;
  transition: 0.5s;
  transform: ${({ x }) => `translateX(${x}%)`};
  scroll-snap-align: center;
`;

export const CarouselImgTitle = styled.h2`
  width: 100%;
  margin-bottom: 1.5rem;
  align-self: flex-start;
  height: 80px;
`;

export const CarouselImg = styled.img`
  width: 100%;
  background: violet;
  object-fit: cover;
`;

export const ButtonLeft = styled.button`
  left: 0%;
`;

export const ButtonRight = styled.button`
  right: 0;
`;
