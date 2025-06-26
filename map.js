const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};


const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    console.log("item BEFORE: ", item);
    console.log("item AFTER: ", callback(item));
    console.log("---");
    // add transformed item to results
    results.push(callback(item));
  }
  return results;
};

const words = ["Jennie", "Lisa", "Rose", "Jisoo"];
const results1 = map(words, (word) => word[0]);
