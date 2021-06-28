import styled from 'styled-components';
import Image from '../Image/Image';

export const CarouselContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  width: 100%;
  height: 80vh;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  @media (min-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 1280px;
    margin: 0 auto;
    overflow-x: hidden;
  }

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 10%;
    height: 80%;
    background: transparent;
    color: #fff;
    border: none;
    @media (min-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
      background: ${({ theme }) => theme.primaryLight};
      height: 5%;
      width: 3%;
    }
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

  @media (min-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    min-width: 100%;
  }
`;

export const CarouselImgTitle = styled.h2`
  width: 100%;
  margin-bottom: 1.5rem;
  align-self: flex-start;
  height: 80px;

  @media (min-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    text-align: center;
  }
`;

export const CarouselImg = styled(Image)`
  width: 100%;
  object-fit: cover;
  @media (min-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 50rem;
    height: 50rem;
  }
`;

export const ButtonLeft = styled.button`
  left: 0%;
`;

export const ButtonRight = styled.button`
  right: 0;
`;
