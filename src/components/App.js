import React from "react";
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
