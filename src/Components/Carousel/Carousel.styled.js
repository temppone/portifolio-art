import styled from 'styled-components';
import Image from '../Image/Image';

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 1280px;
    margin: 0 auto;
    overflow-x: hidden;
    /* display: flex;
  margin-top: 2rem;
  width: 100%;
  height: 80vh;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch; */
  }

  button {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
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
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 0.5rem;
    min-width: 90%;
    height: 80vh;
    align-items: center;
    transition: 0.5s;
    transform: ${({ x }) => `translateX(${x}%)`};
    scroll-snap-align: center;
  }
`;

export const CarouselImgTitle = styled.h2`
  padding: 2rem 0 1rem 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    margin-bottom: 1.5rem;
    align-self: flex-start;
    height: 80px;
  }
`;

export const CarouselImg = styled(Image)`
  width: 100%;
  object-fit: cover;
`;

export const ButtonLeft = styled.button`
  left: 0%;
`;

export const ButtonRight = styled.button`
  right: 0;
`;
