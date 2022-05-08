// `Option<T>` and `Result<T, E>` are two of the most common
// enums you work with in Rust:

type Option<T> = undefined | typeof NaN | null | { value: T, toString: () => string };
const Some = n => ({
    value: n,
    toString: () => `Some(${n})`
})

/// `Option<T>` is used in place of `T | null` or `T | undefined`.
export function positive_n(n: number): Option<number> {
    if (n > 0) {
        return Some(n)
    } else {
        return NaN
    }
}

type Result<T, E> = Error | { value: T, error: E, toString: () => string };
const Ok = (n): Result<number, string> => ({
    value: n, error: "",
    toString: () => `Ok(${n})`
})
const Err = (error): Result<number, string> => ({ value: NaN, error })

/// `Result<T, E>` is mainly used to replace exceptions.
export function divide(x: number, y: number): Result<number, string> {
    if (y == 0) {
        return Err("division by zero")
    } else {
        return Ok(x / y)
    }
}

/// # Output
console.log(`🐥 ${positive_n(42)}`);
console.log(`🐥 ${divide(42, 2)}`);

// 🐥 Some(42)
// 🐥 Ok(21)
