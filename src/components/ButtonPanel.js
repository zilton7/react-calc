/* eslint-disable react/prop-types */
import React from "react";
import Button from "./Button";

function ButtonPanel({ clickHandler }) {
  return (
    <div className="button-panel">
      <div class="group">
        <Button name="AC" handleClick={clickHandler} color="white" />
        <Button name="+/-" handleClick={clickHandler} color="white" />
        <Button name="%" handleClick={clickHandler} color="white" />
        <Button name="÷" handleClick={clickHandler} />
      </div>
      <div class="group">
        <Button name="7" handleClick={clickHandler} color="white" />
        <Button name="8" handleClick={clickHandler} color="white" />
        <Button name="9" handleClick={clickHandler} color="white" />
        <Button name="*" handleClick={clickHandler} />
      </div>
      <div class="group">
        <Button name="4" handleClick={clickHandler} color="white" />
        <Button name="5" handleClick={clickHandler} color="white" />
        <Button name="6" handleClick={clickHandler} color="white" />
        <Button name="-" handleClick={clickHandler} />
      </div>
      <div class="group">
        <Button name="1" handleClick={clickHandler} color="white" />
        <Button name="2" handleClick={clickHandler} color="white" />
        <Button name="3" handleClick={clickHandler} color="white" />
        <Button name="+" handleClick={clickHandler} />
      </div>
      <div class="group">
        <Button name="0" handleClick={clickHandler} wide={true} color="white" />
        <Button name="." handleClick={clickHandler} color="white" />
        <Button name="=" handleClick={clickHandler} />
      </div>
    </div>
  );
}

export default ButtonPanel;
