const removeFromArray = function (arr1, num1, num2) {
  let sum = "";
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] === num1 || (arr1[i] === num2 && typeof num2 !== "Number")) {
      continue;
    } else if (arr1[i] !== num1) {
      sum = sum + arr1[i];
    }
  }
  console.log(typeof sum);
  return sum.split("").map(Number);
};

// Do not edit below this line
module.exports = removeFromArray;
