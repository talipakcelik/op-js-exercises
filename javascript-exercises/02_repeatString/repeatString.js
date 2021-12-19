const repeatString = function (string, num) {
  if (num < 0) {
    return "ERROR";
  }
  let kelime = "";
  for (i = 1; i <= num; i++) {
    kelime += string;
  }
  return kelime;
};

// Do not edit below this line
module.exports = repeatString;
