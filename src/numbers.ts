// Let's start easy: numbers.
// Where TypeScript has a single `number` type, Rust distinguishes between
// various types of numbers.

/// Alias for a plain, signed 32-bit integer.
export type Number = number;

/// Floating-point numbers come in two varieties: `f32` and `f64`.
export type AlsoANumber = number;

/// `isize` and `usize` do not define a fixed amount of bits, but instead use a
/// platform-defined amount of bits (most commonly 32 or 64).
export type AndAnother = number;

/// # Example
export function add(a: number, b: AlsoANumber): AndAnother {
    let result = a + (b as Number);
    return result as AndAnother
}

/// # Output
console.log(`🐥 ${add(1, 2.0)}`);
