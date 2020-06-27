import React, { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

import { StyledButton, EditModeText } from './StyledComponents';
import { Mode } from '../types';

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
      <EditModeText>Edit mode {mode ? Mode.on : Mode.off}</EditModeText>
    </>
  );
};
export default Button;
