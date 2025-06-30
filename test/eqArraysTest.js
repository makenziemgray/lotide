const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// Nested arrays - should pass
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);

// Nested arrays - different lengths
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);

// Nested arrays - one nested, one flat
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);

// Deeply nested
assertEqual(eqArrays([[[[1]]]], [[[[1]]]]), true);