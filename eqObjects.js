const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }

  return true;
};

const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  // Different number of keys = not equal
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];

    // If both values are arrays
    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!eqArrays(val1, val2)) return false;

    // If both values are objects (but not arrays)
    } else if (typeof val1 === 'object' && typeof val2 === 'object' &&
               !Array.isArray(val1) && !Array.isArray(val2)) {
      if (!eqObjects(val1, val2)) return false; // 🔁 recursion

    // Primitive value comparison
    } else {
      if (val1 !== val2) return false;
    }
  }

  return true;
};

module.exports = eqObjects;


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // ✅

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // ✅

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // ✅

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // ✅