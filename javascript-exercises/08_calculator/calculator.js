const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  let sumF = 0;
  for (let i = 0; i < arr.length; i++) {
    sumF += arr[i];
  }
  return sumF;
};

const multiply = function (arr) {
  let multiplyF = 1;
  for (let i = 0; i < arr.length; i++) {
    multiplyF *= arr[i];
  }
  return multiplyF;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num1) {
  let result = num1;
  if (num1 === 0 || num1 === 1) {
    return 1;
  } else {
    while (num1 > 1) {
      num1--;
      result *= num1;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
