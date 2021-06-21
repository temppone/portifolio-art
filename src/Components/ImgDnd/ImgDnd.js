import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { ImgDnd, ImgContainer, ImgsContainer } from './ImgContainerDnd.styled';

const ImgContainerDnd = ({ imgUrl }) => {
  const imgs = [
    'https://source.unsplash.com/random/700x700',
    'https://source.unsplash.com/random/910x800',
    'https://source.unsplash.com/random/1000x990',
    'https://source.unsplash.com/random/600x900',
    'https://source.unsplash.com/random/1100x1000',
    'https://source.unsplash.com/random/1099x500',
    'https://source.unsplash.com/random/700x730',
    'https://source.unsplash.com/random/1110x800',
    'https://source.unsplash.com/random/1900x990',
    'https://source.unsplash.com/random/890x900',
    'https://source.unsplash.com/random/970x1000',
    'https://source.unsplash.com/random/999x500',
  ];

  const [dragImgs, setDragImgs] = React.useState(imgs);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    //Transformo items em um array com as imagens
    const items = Array.from(imgs);
    console.log(items);

    //Deleto o item que eu quero mudar de lugar
    //Com o splice eu pego a posição do item e removo ele
    //Na variável reorderedItem eu tenho o id do item deletado
    const [reorderedItem] = items.splice(result.source.index, 1);
    console.log(reorderedItem);

    //Pego o item deletado e coloco ele na posição destinada
    //No splice eu removo 0 itens para que assim eu possa adicionar o item
    //E adiciono o reorderedItem a lista de itens com o splice no lugar do item anterior
    items.splice(result.destination.index, 0, reorderedItem);
    console.log(result);

    setDragImgs(items);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="dndImgs">
        {(provided) => (
          <ImgsContainer {...provided.droppableProps} ref={provided.innerRef}>
            {dragImgs.map((imgUrl, index) => (
              <Draggable key={imgUrl} draggableId={imgUrl} index={index}>
                {(provided) => (
                  <ImgContainer
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    justifyContent="center"
                    flexDirection="column"
                  >
                    <ImgDnd src={imgUrl}></ImgDnd>
                  </ImgContainer>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ImgsContainer>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ImgContainerDnd;
