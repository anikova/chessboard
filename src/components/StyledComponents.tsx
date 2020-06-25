import styled from 'styled-components';

interface BoxProps {
  backgroundColor: string;
  color: string;
}

export const Box = styled.div<BoxProps>`
  width: 6rem;
  height: 6rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > * {
    margin: 1rem;
  }
`;

export const StyledButton = styled.button`
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
`;

export const ItemWrapper = styled.span`
  position: absolute;
`;

export const Header = styled.h2`
  text-align: center;
`;

export const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: 6rem 6rem 6rem 6rem 6rem 6rem 6rem 6rem;
  // transform: 'none !important'
`;
