// Given a function fn and a time in milliseconds t, return a debounced version of that function.

// A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.

// For example, let's say t = 50ms, and the function was called at 30ms, 60ms, and 100ms.

// The first 2 function calls would be cancelled, and the 3rd function call would be executed at 150ms.

// If instead t = 35ms, The 1st call would be cancelled, the 2nd would be executed at 95ms, and the 3rd would be executed at 135ms.




// Step-by-Step Approach
// Storage: We need a variable to keep track of the current active timer. This variable must live outside the returned function so it persists between calls.

// The "Cancel" Step: Every time the debounced function is called, the first thing we do is clearTimeout(timer). This ensures that any previous, pending call is killed.

// The "Reset" Step: We start a new setTimeout that will execute fn(...args) after t milliseconds.


/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn(...args);
        }, t);
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */