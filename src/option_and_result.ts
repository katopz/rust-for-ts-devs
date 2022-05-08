// `Option<T>` and `Result<T, E>` are two of the most common
// enums you work with in Rust:

export type ok_or_else_type<T> = {
    ok_or_else?: (error?: string) => Result<T, string> & ok_or_else_type<number>
};
export type Option<T> = undefined | typeof NaN | null | {
    value?: T,
    toString?: () => string
};

export const Some = (n): (typeof Ok) | (typeof Err) => ({
    value: n,
    toString: () => `Some(${n})`,
    unwrap_or: (o: number) => isNaN(n) ? o : n,
    ok_or_else: (error: string) => (n === undefined || null || NaN) ? Err(error) : Ok(n),
})

/// `Option<T>` is used in place of `T | null` or `T | undefined`.
export function positive_n(n: number): typeof Some {
    if (n > 0) {
        return Some(n);
    } else {
        return NaN
    }
}
export type ok_type<T> = { ok?: () => T };
export type unwrap_type<T> = { unwrap?: () => T | void };
export type unwrap_or_type<T> = { unwrap_or?: (T) => T };

export type Result<T, E> = Error | { value: T, error: E, toString?: () => string };
export const Ok = (n): Result<number, string> & ok_type<number> & ok_or_else_type<number> & unwrap_type<number> & unwrap_or_type<number> => ({
    value: n, error: "",
    toString: () => `Ok(${n})`,
    ok: () => n,
    unwrap: () => {
        if (isNaN(n)) return Error('error')
        return n
    },
    unwrap_or: (o: number) => isNaN(n) ? o : n,
    ok_or_else: (error: string) => (n === undefined || null || NaN) ? Err(error) : Ok(n),
})
export const Err = (error): typeof Some => ({
    error,
    unwrap_or: (o: number) => o,
})

/// `Result<T, E>` is mainly used to replace exceptions.
export function divide(x: number, y: number): Result<number, string> & ok_type<number> & ok_or_else_type<number> & unwrap_type<number> & unwrap_or_type<number> {
    if (y == 0) {
        return Err("division by zero")
    } else {
        return Ok(x / y)
    }
}

/// # Output
console.log(`🐥 positive_n: ${positive_n(42)}`);
console.log(`🐥 divide: ${divide(42, 2)}`);

let x: Option<number> = Some(2) as Option<number>;
console.log(`🐥 x: ${x}`);

// 🐥 positive_n: Some(42)
// 🐥 divide: Ok(21)
// 🐥 x: Some(2)
