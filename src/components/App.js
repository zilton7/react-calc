/* eslint-disable react/no-unused-state */
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../styles/App.scss';
import calculate from '../logic/calculate';
import Home from './Home';
import Quote from './Quote';
import Navbar from './Navbar';

const App = () => {
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const calculation = calculate(buttonName, data);
    setData({
      total: calculation.total,
      next: calculation.next,
      operation: calculation.operation,
    });
  };

  const { next, total } = data;

  return (
    <main>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/calculator">
          <div className="calculator">
            <Display calculation={next || total} />
            <ButtonPanel
              clickHandler={(e) => handleClick(e.target.innerText)}
            />
          </div>
        </Route>
        <Route exact path="/quote" component={Quote} />
      </Switch>
    </main>
  );
};

export default App;
