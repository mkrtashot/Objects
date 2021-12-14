"use strict";

function fiftyThirtyTwenty(num) {
  let obj = {};
  obj.Needs = (num * 50) / 100;
  obj.Wants = (num * 30) / 100;
  obj.Savings = (num * 20) / 100;
  return obj;
}

console.log(fiftyThirtyTwenty(10000));
