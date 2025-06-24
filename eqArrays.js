// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match. what does this mean

/* The function should return:
	- true if the arrays are exactly the same:
		Same length
		Same elements in the same order
	- false otherwise 8 */

// Things to do: 
//	1.	Check if the lengths are the same.
//	2.	Loop through the arrays.
//	3.	Compare each element at the same index.
//	4.	If all elements match, return true. Otherwise, return false.


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