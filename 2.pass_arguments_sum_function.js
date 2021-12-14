"use strict";

function sum(x, y, z) {
  let arr = [];
  arr = arr.concat(x);
  x = arr[0];
  y = arr[1];
  z = arr[2];
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(numbers)); // prints 6
