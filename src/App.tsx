import React, { useState } from 'react';
import './App.css';
import ChessBoard from './components/ChessBoard';
import Button from './components/Button';
import { Wrapper } from './components/StyledComponents';

const App = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <Wrapper>
      <ChessBoard isDisabled={isDisabled} />
      <Button modeChanged={mode => setIsDisabled(mode)} />
    </Wrapper>
  );
};

export default App;
