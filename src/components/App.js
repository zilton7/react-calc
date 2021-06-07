/* eslint-disable react/no-unused-state */
import React, { useState } from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import "../styles/App.scss";
import calculate from "../logic/calculate";
import Home from "./Home";
import Navbar from "./Navbar";
import { Route, Switch } from "react-router-dom";

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
          <div class="calculator">
            <Display calculation={next || total} />
            <ButtonPanel
              clickHandler={(e) => handleClick(e.target.innerText)}
            />
          </div>
        </Route>
      </Switch>
    </main>
  );
};

export default App;
