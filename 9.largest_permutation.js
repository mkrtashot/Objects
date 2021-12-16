"use strict";

function largestPermutation(k, arr) {
  let finalArr = [];
  finalArr = finalArr.concat(arr);

  let max;

  let maxIndex;
  if (k > arr.length) {
    k = arr.length;
  }
  for (let i = 1; i <= k; i++) {
    max = -Infinity;

    finalArr.forEach(maxMin);
    function maxMin(item, index) {
      if (item > max) {
        max = item;
        maxIndex = index;
      }
    }

    [arr[maxIndex], arr[i - 1]] = [arr[i - 1], arr[maxIndex]];
    finalArr[i - 1] = "used";

    for (let d = 0; d < arr.length; d++) {
      if (typeof finalArr[d] === "number") {
        finalArr[d] = arr[d];
      }
    }
  }

  return arr;
}

console.log(largestPermutation(3, [4, 2, 3, 5, 1]));
