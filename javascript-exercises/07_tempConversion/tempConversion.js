const ftoc = function (temp) {
  return Math.round((temp - 32) * (5 / 9) * 10) / 10;
};

const ctof = function (temp2) {
  let sicaklik = temp2 * (9 / 5) + 32;
  return Math.round(sicaklik * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
