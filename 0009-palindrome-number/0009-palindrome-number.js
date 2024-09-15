/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let intToString = String(x);
  let reverse = intToString.split("").reverse().join("");
  return parseInt(reverse) === x;
};