import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../styles/App.scss';

function App() {
  return (
    <>
      <h1>Calculator</h1>
      <Display />
      <ButtonPanel />
    </>
  );
}

export default App;
