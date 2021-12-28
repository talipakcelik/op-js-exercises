const fibonacci = function (num) {
  if (Number(num) < 0) return "OOPS";
  else {
    let fibo = [0, 1];

    for (i = 2; i < Number(num) + 1; i++) {
      fibo[i] = fibo[i - 2] + fibo[i - 1];
    }
    return fibo[Number(num)];
  }
};

// Do not edit below this line
module.exports = fibonacci;
