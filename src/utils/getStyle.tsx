import React from 'react';
import {
  FaChessQueen,
  FaChessKing,
  FaChessBishop,
  FaChessPawn,
  FaChessKnight,
  FaChessRook
} from 'react-icons/fa';

export const getStyle = (index: number) => {
  let color = '';
  let backgroundColor = '';
  if ((index + Math.trunc(index / 8)) % 2 === 0) {
    // color = 'white';
    backgroundColor = 'black';
  } else {
    backgroundColor = 'white';
    // color = 'black';
  }

  return { color, backgroundColor, width: '5rem', height: '5rem' };
};

export const getIconByValue = (value: string) => {
  switch (value) {
    case 'Q':
      return <FaChessQueen />;
    case 'K':
      return <FaChessKing />;
    case 'Kn':
      return <FaChessKnight />;
    case 'B':
      return <FaChessBishop />;
    case 'P':
      return <FaChessPawn />;
    case 'R':
      return <FaChessRook />;
  }
};

export const getValue = (index: number) => {
  const x = [
    'R',
    'Kn',
    'B',
    'Q',
    'K',
    'B',
    'Kn',
    'R',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P'
  ];
  if (index < 16) {
    return x[index];
  }
  if (index >= 48) {
    return x[(15 - (63 - index) + 8) % 16];
  }
  return '';
};

export const getType = (index: number) => {
  return index < 16 ? 0 : index > 48 ? 1 : 2;
};
