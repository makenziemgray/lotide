const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([5, 10, 15, 20, 25]), [15]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([10, 20, 30, 40, 50, 60]), [30, 40]);