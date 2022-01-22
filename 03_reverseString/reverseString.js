//using 3 methods:
//String.prototype.split() -> splits string into an array of string by separating the string into sub strings
//Array.prototype.reverse() which reverses array in place
//Array.prototype.join() joins all elements of an array into a string

const reverseString = function(str) {
  return str.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
