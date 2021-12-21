const removeFromArray = function (arr1, ...num1) {
  for (i = 0; i < num1.length; i++) {
    if (arr1.includes(num1[i])) {
      arr1.splice(arr1.indexOf(num1[i]), 1);
    }
  }
  return arr1;
};

// Do not edit below this line
module.exports = removeFromArray;
