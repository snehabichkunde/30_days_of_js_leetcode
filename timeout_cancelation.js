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