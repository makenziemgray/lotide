const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  for (const key of Object.keys(object)) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "Severance",
  comedy: "Friends",
  drama: "Succession"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "Succession"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Vampire Diaries"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Friends"), "comedy");
assertEqual(findKeyByValue({}, "The Wire"), undefined);
assertEqual(findKeyByValue({ a: "x", b: "y", c: "z" }, "z"), "c");