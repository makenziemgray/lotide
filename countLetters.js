const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const results = {};

  for (const letter of sentence) {
    if (letter !== ' ') { // skip spaces
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }

  return results;
};

const result = countLetters("lighthouse in the house");

assertEqual(result["l"], 1);
assertEqual(result["h"], 4);
assertEqual(result["e"], 3);
assertEqual(result["z"], undefined);
