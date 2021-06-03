/* eslint-disable react/no-unused-state */
import React, { Component } from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import "../styles/App.scss";
import calculate from "../logic/calculate";

class App extends Component {
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
    const calculation = calculate(buttonName, data);
    this.setState({
      total: calculation.total,
      next: calculation.next,
      operation: calculation.operation,
    });
  };

  render() {
    const { next, total } = this.state;

    return (
      <>
        <h1>React Calculator App</h1>
        <Display calculation={next || total} />
        <ButtonPanel
          clickHandler={(e) => this.handleClick(e.target.innerText)}
        />
      </>
    );
  }
}

export default App;
