/* eslint-disable no-param-reassign */

import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let res = '';
  const firstNumber = new Big(numberOne);
  const secondNumber = new Big(numberTwo);

  if (operation === '-') {
    res = firstNumber.minus(secondNumber);
  } else if (operation === '+') {
    res = firstNumber.plus(secondNumber);
  } else if (operation === 'X') {
    res = firstNumber.times(secondNumber);
  } else if (operation === '/') {
    res = firstNumber.div(secondNumber);
  } else if (operation === '%') {
    res = firstNumber.div(100);
  }

  return res;
};

export default operate;
