/* eslint-disable no-param-reassign */
import operate from "./operate";

const calculate = (buttonName, dataObj) => {
  let { total, next, operation } = dataObj;
  const val = parseFloat(buttonName);
  if (val.isNaN()) {
    total += val;
  } else if (buttonName === "+/-") {
    total *= -1;
    next *= -1;
  } else if (buttonName === "AC") {
    total = "";
    next = "";
    operation = "";
  } else if (buttonName === "=") {
    operate(total, next, operation);
    total = "";
    next = "";
    operation = "";
  } else if (buttonName === ".") {
    if (!total) {
      total = "0.";
    }
    if (total && operation) {
      total += ".";
    }
    if (total && next && operation) {
      next += ".";
    }
    if (total && operation && !next) {
      next = "0.";
    }
  } else if ([...Array(10).keys()].includes(buttonName)) {
    if (!operation) {
      if (!total) {
        total = buttonName;
      } else if (total === "number") {
        total = buttonName;
      } else {
        total += buttonName;
      }
    } else if (!next) {
      next = buttonName;
    } else {
      next += buttonName;
    }
  } else if (buttonName === "%") {
    next /= 100;
    total /= 100;
  }
  if (["+", "-", "*", "/"].includes(buttonName)) {
    if (!total) total = "0";
    if (total && !next) {
      operation = buttonName;
    }
    if (total && next && operation) {
      total = Operate(total, next, operation);
      next = null;
      operation = buttonName;
    }
  }
  return dataObj;
};

export default calculate;
