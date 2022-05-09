// strings are easy: they're mainly just strings...
//
// But sometimes you will run into `&str`, which is used
// for string literals and is also returned by some methods.
// For now, just use `.to_owned()` to turn them into `String`.

const GREETING: string = "Hello, world!";

/// # Example 1
export function concatenate(a: string, b: string): string {
    // Look, our first macro:
    return `${a}${b}`
}

/// # Example 2
export function greeting(): string {
    return GREETING
}

/// # Output
console.log(`🐥 ${concatenate('foo', 'bar')}`);
console.log(`🐥 ${greeting()}`);