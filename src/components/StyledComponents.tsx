import styled from 'styled-components';

interface ItemWrapperProps {
  isDisabled: boolean;
  hasValue: boolean;
  color: string;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  > * {
    margin: 1rem;
  }
`;

export const StyledButton = styled.button`
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  outline: none;
  :hover {
    border: 1px solid black;
    transform: scale(1.1);
  }
`;

export const ItemWrapper = styled.div<ItemWrapperProps>`
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'move')};
  height: 2rem;
  margin: 25%;
  ${({ hasValue, color, isDisabled }) =>
    hasValue &&
    `background-color: ${
      isDisabled ? 'gray' : color !== 'white' ? '#a8dadc' : '#e5989b'
    } !important`};
  color: ${({ color }) => `${color} !important`};
  text-align: center;
  padding-top: 10px;
  font-size: 20px;
  transform: translateZ(0px);
  border-radius: 50%;
`;

export const Header = styled.div`
  text-align: center;
  font-size: 5rem;
  margin: 3rem 0 1rem 0;
`;

export const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 5rem);
  border: 1px solid black;
`;

export const EditModeText = styled.div`
  width: 5rem;
`;
