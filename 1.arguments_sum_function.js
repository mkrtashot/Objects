"use strict";

function sum() {
  let args = [];
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === "number") {
      args.push(arguments[i]);
    }
  }
  return args.reduce((sum, current) => {
    return sum + current;
  });
}
console.log(sum(1, 2, 3)); // prints 6
