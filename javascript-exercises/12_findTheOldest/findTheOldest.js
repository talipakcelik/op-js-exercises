const findTheOldest = function (arr) {
  const currentYear = new Date().getFullYear();
  let theOldest = arr[0];
  let currentOldest = theOldest.hasOwnProperty("yearOfDeath")
    ? theOldest.yearOfDeath - theOldest.yearOfBirth
    : currentYear - theOldest.yearOfBirth;

  for (let i = 0; i < arr.length; i++) {
    let incoming = arr[i].hasOwnProperty("yearOfDeath")
      ? arr[i].yearOfDeath - arr[i].yearOfBirth
      : currentYear - arr[i].yearOfBirth;

    if (incoming > currentOldest) {
      currentOldest = incoming;
    }
  }
  const found = arr.find((el) => {
    const store = el.hasOwnProperty("yearOfDeath")
      ? el.yearOfDeath - el.yearOfBirth
      : currentYear - el.yearOfBirth;
    return store === currentOldest;
  });
  return found;
};

// Do not edit below this line
module.exports = findTheOldest;
