import React from "react";
import Button from "./Button";

function ButtonPanel() {
  return (
    <div class="button-panel">
      <div>
        <Button name="AC" />
        <Button name="+/-" />
        <Button name="%" />
        <Button name="÷" />
      </div>
      <div>
        <Button name="2" />
        <Button name="8" />
        <Button name="9" />
        <Button name="X" />
      </div>
      <div>
        <Button name="3" />
        <Button name="4" />
        <Button name="5" />
        <Button name="6" />
      </div>
      <div>
        <Button name="1" />
        <Button name="2" />
        <Button name="3" />
        <Button name="+" />
      </div>
      <div>
        <Button name="0" />
        <Button name="." />
        <Button name="=" />
      </div>
    </div>
  );
}

export default ButtonPanel;
