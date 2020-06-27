import React from 'react';
import { useDrag, DragSourceMonitor, useDrop } from 'react-dnd';

import { getStyle, getIconByValue } from '../utils/getStyle';
import { ItemWrapper } from './StyledComponents';
import { ChessItemProps, FigureType } from '../types';

export const ChessItem: React.FC<ChessItemProps> = ({
  dragEnd,
  isDisabled,
  name,
  item: { type, value }
}) => {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { name, type: 'figure' },
    end: (item: { name: string } | undefined, monitor: DragSourceMonitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        dragEnd({ source: item.name, target: dropResult.name });
      }
    },
    canDrag: !isDisabled && !!value,

    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'figure',
    drop: () => ({ name }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  return (
    <div ref={drop} style={{ ...getStyle(Number(name)) }}>
      <ItemWrapper
        ref={drag}
        isDisabled={isDisabled}
        hasValue={!!value}
        color={type === FigureType.black ? 'black' : 'white'}
      >
        {!isDragging && getIconByValue(value)}
      </ItemWrapper>
    </div>
  );
};
