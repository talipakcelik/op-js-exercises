const palindromes = function (word) {
  const del = /[\W_]/g;
  const kucukHarfliYap = word.toLowerCase().replace(del, "");
  const terstenKelime = kucukHarfliYap.split("").reverse().join("");
  return terstenKelime === kucukHarfliYap;
};

// Do not edit below this line
module.exports = palindromes;
