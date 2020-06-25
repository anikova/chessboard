import React, { useState, useMemo } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DragStart
} from 'react-beautiful-dnd';

import { Box, ItemWrapper, Header, ItemsWrapper } from './StyledComponents';
import { getStyle } from '../utils/getStyle';

interface Props {
  isDisabled: boolean;
}

const ChessBoard = ({ isDisabled }: Props) => {
  const [items, setItems] = useState(
    Array.from(
      {
        length: 64
      },
      (x, i) => ({ value: i, type: i % 2 === 0 })
    )
  );

  const onDragEnd = (e: any) => {
    // const destIndex = e.destination.index;
    // const sourceIndex = e.source.index;
    // const destValue = items[destIndex].value;
    // const sourceValue = items[sourceIndex].value;
    // items[destIndex].value = sourceValue;
    // items[sourceIndex].value = destValue;
    // //  setItems([...items]);
  };

  const renderItems = useMemo(() => {
    return items.map((x, index) => {
      const { color, backgroundColor } = getStyle(index);
      return (
        <Box backgroundColor={backgroundColor} color={color} key={index}>
          <Draggable draggableId={index.toString()} index={index} key={index}>
            {(provided, snapshot) => {
              return (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <ItemWrapper>{x.value}</ItemWrapper>
                </div>
              );
            }}
          </Draggable>
        </Box>
      );
    });
  }, []);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {provided => (
          <>
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <Header>ChessBoard</Header>
              <ItemsWrapper>{renderItems}</ItemsWrapper>
            </div>
            {provided.placeholder}
          </>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ChessBoard;
