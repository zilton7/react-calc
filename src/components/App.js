import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../styles/App.scss';
import calculate from '../logic/calculate';

function App() {
  return (
    <>
      <h1>Calculator</h1>
      <Display calculate={calculate} />
      <ButtonPanel />
    </>
  );
}

export default App;
