export interface ChessItemProps {
  item: ItemType;
  name: string;
  dragEnd: Function;
  isDisabled: boolean;
}

export interface ChessBoardProps {
  isDisabled: boolean;
}

export enum FigureType {
  black,
  white
}

export interface ItemType {
  value: string;
  type: FigureType;
  index: number;
}

export enum Mode {
  on = 'ON',
  off = 'OFF'
}

export interface DragEndEvent {
  source: number;
  target: number;
}
