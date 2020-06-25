import React, { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { StyledButton } from './StyledComponents';

enum Mode {
  on = 'ON',
  off = 'OFF'
}

interface Props {
  modeChanged: (mode: boolean) => void;
}

const Button = ({ modeChanged }: Props) => {
  const [mode, setMode] = useState(false);

  const onButtonClick = () => {
    modeChanged(!mode);
    setMode(m => !m);
  };
  return (
    <>
      <StyledButton className="clap" onClick={onButtonClick}>
        {mode ? <FaPause /> : <FaPlay />}
      </StyledButton>
      Edit mode {mode ? Mode.on : Mode.off}
    </>
  );
};
export default Button;
