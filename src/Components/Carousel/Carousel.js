/* 
TODO
Hover que mostra as setas pra cada lado
Alguma forma de colocar os itens do centro do carousel no centro com a borda do anterior e do próximo sendo mostrada na tela
Scroll com o dedo no celular
Ou arrumar uma forma de voltar ao início sem que mostre todo o scroll até o início
*/

import React from 'react';
import {
  CarouselContainer,
  CarouselImg,
  CarouselImgTitle,
  CarouselItem,
  ButtonLeft,
  ButtonRight,
} from './Carousel.styled';
import { CarouselContent } from './CarouselContent';

const Carousel = () => {
  const [x, setX] = React.useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (CarouselContent.length - 1)) : setX(x + 100);
    console.log('left', x);
  };
  const goRight = () => {
    x === -100 * (CarouselContent.length - 1) ? setX(0) : setX(x - 100);
    console.log('right', x);
  };

  return (
    <CarouselContainer>
      {CarouselContent.map((item, index) => {
        return (
          <CarouselItem x={x} key={index}>
            <CarouselImgTitle>{item.imgTitle}</CarouselImgTitle>
            <CarouselImg src={item.img}></CarouselImg>
          </CarouselItem>
        );
      })}
      <ButtonRight onClick={goRight}></ButtonRight>
      <ButtonLeft onClick={goLeft}></ButtonLeft>
    </CarouselContainer>
  );
};

export default Carousel;
