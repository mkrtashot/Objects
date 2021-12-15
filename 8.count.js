"use strict";

function getFrequencies(arr) {
  let obj = {};

  arr.map(find);
  function find(item) {
    if (obj[item] === undefined) {
      obj[item] = 1;
    } else {
      obj[item] += 1;
    }
  }

  return obj;
}

console.log(getFrequencies([]));
