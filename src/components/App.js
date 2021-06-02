import React from "react";
import PropTypes from "prop-types";
import Big from "big.js";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import "../styles/App.scss";

function App() {
  return (
    <React.Fragment>
      <h1>Calculator</h1>
      <Display />
      <ButtonPanel />
    </React.Fragment>
  );
}

export default App;
