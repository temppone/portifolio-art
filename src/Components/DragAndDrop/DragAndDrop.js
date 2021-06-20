import React from 'react';
import { DndContainer, DndContent, DndItem } from './DragAndDrop.styled';
import { useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

const DragAndDrop = () => {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'CARD',
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const listContent = ['Arroz', 'Batata', 'Feijão', 'Bacon'];

  return (
    <DndContainer>
      <DndContent>
        {listContent.map((listItem) => (
          <DndProvider backend={HTML5Backend}>
            <DndItem ref={dragRef} isDragging={isDragging}>
              {listItem}
            </DndItem>
          </DndProvider>
        ))}
      </DndContent>
    </DndContainer>
  );
};

export default DragAndDrop;
