const assertEqual = require("./assertEqual");

const tail = function(array) {
  if (array.length === 0) return [];
  return array.slice(1);
};

module.exports = tail;