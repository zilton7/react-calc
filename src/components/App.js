/* eslint-disable react/no-unused-state */
import React, { useState } from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import "../styles/App.scss";
import calculate from "../logic/calculate";
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
      <Switch />
      <Route path="/" component="/Home" />
    </main>
  );
};

export default App;
