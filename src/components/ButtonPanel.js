/* eslint-disable react/prop-types */
import React from 'react';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => (
  <div className="button-panel">
    <div>
      <Button name="AC" handleClick={clickHandler} />
      <Button name="+/-" handleClick={clickHandler} />
      <Button name="%" handleClick={clickHandler} />
      <Button name="÷" handleClick={clickHandler} />
    </div>
    <div>
      <Button name="7" handleClick={clickHandler} />
      <Button name="8" handleClick={clickHandler} />
      <Button name="9" handleClick={clickHandler} />
      <Button name="*" handleClick={clickHandler} />
    </div>
    <div>
      <Button name="4" handleClick={clickHandler} />
      <Button name="5" handleClick={clickHandler} />
      <Button name="6" handleClick={clickHandler} />
      <Button name="-" handleClick={clickHandler} />
    </div>
    <div>
      <Button name="1" handleClick={clickHandler} />
      <Button name="2" handleClick={clickHandler} />
      <Button name="3" handleClick={clickHandler} />
      <Button name="+" handleClick={clickHandler} />
    </div>
    <div>
      <Button name="0" handleClick={clickHandler} />
      <Button name="." handleClick={clickHandler} />
      <Button name="=" handleClick={clickHandler} />
    </div>
  </div>
);

export default ButtonPanel;
