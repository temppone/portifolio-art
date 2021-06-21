import React from 'react';
import { ImgDnd, ImgContainer } from './ImgContainerDnd.styled';
import { useDrag, useDrop } from 'react-dnd';

const ImgContainerDnd = ({ imgUrl }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'CARD',
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRefs] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {},
  });
  return (
    <ImgContainer
      ref={dragRef}
      isDragging={isDragging}
      justifyContent="center"
      flexDirection="column"
    >
      <ImgDnd src={imgUrl}></ImgDnd>
      {console.log(imgUrl)}
    </ImgContainer>
  );
};

export default ImgContainerDnd;
