const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];

    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!eqArrays(val1, val2)) return false;
    } else if (val1 !== val2) {
      return false;
    }
  }

  return true;
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const obj1 = { a: "1", b: 2 };
const obj2 = { b: 2, a: "1" };
assertObjectsEqual(obj1, obj2); // Should pass ✅

const obj3 = { a: "1", b: 2, c: 3 };
assertObjectsEqual(obj1, obj3); // Should fail 🛑

const obj4 = { a: [1, 2], b: "3" };
const obj5 = { b: "3", a: [1, 2] };
assertObjectsEqual(obj4, obj5); // Should pass ✅