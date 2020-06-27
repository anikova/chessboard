import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import './App.css';
import ChessBoard from './components/ChessBoard';
import EditModeButton from './components/EditModeButton';
import { Wrapper } from './components/StyledComponents';
import HeaderWrapper from './components/HeaderWrapper';

const App = () => {
  const [mode, setMode] = useState(false);

  return (
    <DndProvider backend={HTML5Backend}>
      <HeaderWrapper />

      <Wrapper className="wrapper">
        <ChessBoard isDisabled={!mode} />
        <EditModeButton modeChanged={mode => setMode(mode)} />
      </Wrapper>
    </DndProvider>
  );
};

export default App;
