import operate from "./operate";

const calculate = (buttonName, data_obj) => {
  let val = parseFloat(buttonName);
  if (val != NaN) {
    console.log("good");
    data_obj.total += val;
  } else if (buttonName == "+/-") {
    data_obj.total *= -1;
    data_obj.next *= -1;
  } else if (buttonName == "AC") {
    data_obj.total = "";
    data_obj.next = "";
    data_obj.operation = "";
  } else if (buttonName == "=") {
    operate(total, next, operation);
    data_obj.total = "";
    data_obj.next = "";
    data_obj.operation = "";
  }
  return data_obj;
};

export default calculate;
