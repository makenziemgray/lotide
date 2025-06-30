const assertEqual = require("../assertEqual");
const tail = require("../tail");

// Original array
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

// Test: 1-element array
const single = tail(["OnlyOne"]);
assertEqual(single.length, 0);

// Test: Empty array
const empty = tail([]);
assertEqual(empty.length, 0);

// Test: Original array not modified
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);