const findTheOldest = function (arr) {
  let theOldest = arr[0];
  let currentOldest = theOldest.yearOfDeath - theOldest.yearOfBirth;
  for (let i = 1; i < arr.length; i++) {
    let incoming = arr[i].yearOfDeath - arr[i].yearOfBirth;
    if (incoming > currentOldest) {
      currentOldest = incoming;
    }
    console.log(currentOldest);
  }
  const found = arr.find((el) => {
    return el.yearOfDeath - el.yearOfBirth === currentOldest;
  });
  return found;
};
// Do not edit below this line
module.exports = findTheOldest;
