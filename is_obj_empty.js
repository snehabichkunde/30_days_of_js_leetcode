// Given an object or an array, return if it is empty.

// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.

 

// Example 1:

// Input: obj = {"x": 5, "y": 42}
// Output: false
// Explanation: The object has 2 key-value pairs so it is not empty.

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    // Object.keys handles both Arrays and Objects!
    // For an array [1, 2], it returns ["0", "1"] (length 2)
    // For an object {a: 1}, it returns ["a"] (length 1)
    return Object.keys(obj).length === 0;
};