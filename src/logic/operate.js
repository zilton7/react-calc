import Big from "big.js";

const operate = (numberOne, numberTwo, operation) => {
  let res = "";
  const firstNumber = new Big(numberOne);
  const secondNumber = new Big(numberTwo);

  if (operation == "-") {
    res = numberOne.minus(numberTwo);
  } else if (operation == "+") {
    res = numberOne.plus(numberTwo);
  } else if (operation == "X") {
    res = numberOne.times(numberTwo);
  } else if (operation == "/") {
    res = numberOne.div(numberTwo);
  } else if (operation == "%") {
    res = numberOne.div(100);
  }

  return res;
};

export default operate;
