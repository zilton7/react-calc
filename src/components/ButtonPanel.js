/* eslint-disable react/prop-types */
import React from 'react';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => (
  <div className="button-panel">
    <div className="group">
      <Button name="AC" handleClick={clickHandler} color="white" />
      <Button name="+/-" handleClick={clickHandler} color="white" />
      <Button name="%" handleClick={clickHandler} color="white" />
      <Button name="÷" handleClick={clickHandler} />
    </div>
    <div className="group">
      <Button name="7" handleClick={clickHandler} color="white" />
      <Button name="8" handleClick={clickHandler} color="white" />
      <Button name="9" handleClick={clickHandler} color="white" />
      <Button name="*" handleClick={clickHandler} />
    </div>
    <div className="group">
      <Button name="4" handleClick={clickHandler} color="white" />
      <Button name="5" handleClick={clickHandler} color="white" />
      <Button name="6" handleClick={clickHandler} color="white" />
      <Button name="-" handleClick={clickHandler} />
    </div>
    <div className="group">
      <Button name="1" handleClick={clickHandler} color="white" />
      <Button name="2" handleClick={clickHandler} color="white" />
      <Button name="3" handleClick={clickHandler} color="white" />
      <Button name="+" handleClick={clickHandler} />
    </div>
    <div className="group">
      <Button name="0" handleClick={clickHandler} wide color="white" />
      <Button name="." handleClick={clickHandler} color="white" />
      <Button name="=" handleClick={clickHandler} />
    </div>
  </div>
);

export default ButtonPanel;
