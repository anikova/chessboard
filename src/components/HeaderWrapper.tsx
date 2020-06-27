import React from 'react';
import {
  FaChessQueen,
  FaChessKing,
  FaChessBishop,
  FaChessPawn,
  FaChessKnight,
  FaChessRook
} from 'react-icons/fa';
import { Header } from '../components/StyledComponents';

const HeaderWrapper = () => {
  return (
    <Header>
      <FaChessQueen />
      <FaChessKing />
      <FaChessBishop />
      ChessBoard
      <FaChessPawn />
      <FaChessKnight />
      <FaChessRook />
    </Header>
  );
};

export default HeaderWrapper;
