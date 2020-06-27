import React, { useState } from 'react';

import { ItemsWrapper } from './StyledComponents';
import { ChessItem } from './ChessItem';
import { getValue, getType } from '../utils/getStyle';
import { ChessBoardProps, DragEndEvent } from '../types';

const getChessItems = () => {
  return Array.from(
    {
      length: 64
    },
    (item, index) => ({ value: getValue(index), type: getType(index), index })
  );
};

const ChessBoard = ({ isDisabled }: ChessBoardProps) => {
  const [items, setItems] = useState(getChessItems());

  const onDragEnd = ({ source, target }: DragEndEvent) => {
    const { value: destValue, type: destType } = items[target];
    const { value: sourceValue, type: sourceType } = items[source];

    items[target] = { ...items[target], value: sourceValue, type: sourceType };
    items[source] = { ...items[source], value: destValue, type: destType };

    setItems([...items]);
  };

  return (
    <>
      <ItemsWrapper>
        {items.map(item => {
          return (
            <ChessItem
              name={item.index.toString()}
              item={item}
              dragEnd={onDragEnd}
              isDisabled={isDisabled}
              key={item.index}
            />
          );
        })}
      </ItemsWrapper>
    </>
  );
};

export default ChessBoard;
