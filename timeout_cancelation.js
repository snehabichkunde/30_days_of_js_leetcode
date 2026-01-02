const cancellable = function(fn, args, t) {
    // 1. Set the timer first and store its ID
    const timer = setTimeout(() => {
        fn(...args);
    }, t);

    // 2. Define the function that can kill that specific timer
    const cancelFn = function() {
        clearTimeout(timer);
    };

    // 3. Return the "remote control" to the user
    return cancelFn;
};






// /**
//  * @param {Function} fn - The function to execute
//  * @param {Array} args - Arguments to pass to fn
//  * @param {number} t - Delay in milliseconds
//  * @return {Function} - A function to cancel the timeout
//  */
// var cancellable = function(fn, args, t) {
//     // 1. Set the timer
//     const timer = setTimeout(() => {
//         fn(...args);
//     }, t);

//     // 2. Define the cancellation function
//     const cancelFn = function() {
//         console.log("--- Cancel function called! ---");
//         clearTimeout(timer);
//     };

//     // 3. Return the cancel function so the user can call it later
//     return cancelFn;
// };

// // --- TESTING THE CODE ---

// const result = [];
// const fn = (x) => x * 5;
// const args = [2];
// const t = 20;            // Execution planned at 20ms
// const cancelTimeMs = 50; // We will try to cancel at 50ms

// const start = performance.now();

// const log = (...argsArr) => {
//     const diff = Math.floor(performance.now() - start);
//     result.push({ "time": diff, "returned": fn(...argsArr) });
// };

// // Start the process
// const cancel = cancellable(log, args, t);

// // Scenario A: If cancelTimeMs > t (e.g., 50 > 20), the function runs BEFORE cancel.
// // Scenario B: If cancelTimeMs < t (e.g., 10 < 20), the function NEVER runs.
// setTimeout(cancel, cancelTimeMs);

// // Check the results after everything should have finished
// setTimeout(() => {
//     console.log("Final Result Log:", result);
// }, Math.max(t, cancelTimeMs) + 50);