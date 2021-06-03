import React, { Component } from "react";
import { useState } from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import "../styles/App.scss";
import calculate from "../logic/calculate";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick.bind(this);
  }

  handleClick = (buttonName) => {
    const data = this.state;
    const result = calculate(data, buttonName);
    this.setState({
      total: result.total,
      next: result.next,
      operation: result.operation,
    });
  };

  render() {
    return (
      <>
        <h1>Calculator</h1>
        <Display calculate={calculate} />
        <ButtonPanel />
      </>
    );
  }
}

export default App;
