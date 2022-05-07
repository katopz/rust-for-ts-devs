// We already saw some functions, but let's look at them more closely:

/// # Example: Function without return value:
export function unit_function() {
    console.log("Hello, world!");
}

/// # Example: Function with multiple return values:
export function tuple_function(): [string, number] {
    // For good measure, function calls look like you'd expect them:
    unit_function();

    return ["The answer is:", 42]
    // Note the lack of semi-colon: -^
}

/// # Output
console.log(`🦞 ${tuple_function()}`);
