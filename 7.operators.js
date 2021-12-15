"use strict";

function printSum() {
  let check = 0;
  let result;
  let operator;
  if (typeof arguments[0] !== "number") {
    operator = arguments[0];
    check++;
  }
  let arr = [];
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === "number") {
      arr.push(arguments[i]);
    }
  }
  if (check === 0) {
    return (result = arr.reduce(sum));
    function sum(acc, value) {
      return (acc += value);
    }
  } else {
    switch (operator) {
      case "*":
        result = arr.reduce(sum1);

        function sum1(acc, value) {
          return (acc *= value);
        }
        break;
      case "-":
        result = arr.reduce(sum2);
        function sum2(acc, value) {
          return (acc -= value);
        }
        break;
      case "**":
        result = arr.reduce(sum3);
        function sum3(acc, value) {
          return (acc **= value);
        }
        break;
      case "/":
        result = arr.reduce(sum4);
        function sum4(acc, value) {
          return (acc /= value);
        }
        break;
      case "+":
        result = arr.reduce(sum5);
        function sum5(acc, value) {
          return (acc += value);
        }
        break;
    }
    return result;
  }
}

console.log(printSum("-", 1, 2, 3, 4));
