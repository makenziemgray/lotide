const assertEqual = require("./assertEqual");

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    const val1 = arr1[i];
    const val2 = arr2[i];

    // If both values are arrays, recurse
    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!eqArrays(val1, val2)) return false;

    // If one is array and the other isn't, they're not equal
    } else if (Array.isArray(val1) || Array.isArray(val2)) {
      return false;

    // Otherwise, compare primitive values
    } else if (val1 !== val2) {
      return false;
    }
  }

  return true;
};

module.exports = eqArrays;