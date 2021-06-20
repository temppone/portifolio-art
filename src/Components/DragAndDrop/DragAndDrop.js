import React from 'react';
import { DndContainer, DndItem } from './DragAndDrop.styled';
import { useDrag } from 'react-dnd';

const DragAndDrop = () => {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'CARD',
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const listContent = ['Arroz', 'Batata', 'Feijão', 'Bacon'];

  return (
    <div ref={dragRef}>
      {listContent.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
};

export default DragAndDrop;
