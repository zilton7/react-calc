import operate from "./operate";

const calculate = (buttonName, dataObj) => {
  let val = parseFloat(buttonName);
  if (val != NaN) {
    dataObj.total += val;
  } else if (buttonName == "+/-") {
    dataObj.total *= -1;
    dataObj.next *= -1;
  } else if (buttonName == "AC") {
    dataObj.total = "";
    dataObj.next = "";
    dataObj.operation = "";
  } else if (buttonName == "=") {
    operate(total, next, operation);
    dataObj.total = "";
    dataObj.next = "";
    dataObj.operation = "";
  }
  return dataObj;
};

export default calculate;