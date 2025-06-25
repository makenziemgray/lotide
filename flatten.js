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

eqArrays([1, 2, 3], [1, 2, 3]); 
eqArrays([1, 2, 3], [3, 2, 1]); 

eqArrays(["1", "2", "3"], ["1", "2", "3"]); 
eqArrays(["1", "2", "3"], ["1", "2", 3]); 

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

eqArrays([1, 2, 3], [1, 2, 3]); 
eqArrays([1, 2, 3], [3, 2, 1]); 

eqArrays(["1", "2", "3"], ["1", "2", "3"]); 
eqArrays(["1", "2", "3"], ["1", "2", 3]); 

const flatten = function(arr) {
  let result = [];
  for (let element of arr) {
    if (Array.isArray(element)) {
      for (let nested of element) {
        result.push(nested);
      }
    } else {
      result.push(element);
    }
  }
  return result;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);