import { Ok, Option, Result, positive_n, divide, unwrap_type } from "./option_and_result";

// More examples on how to use `Option` and `Result`:

export function positive_n_result(n: number): Result<number, string> & unwrap_type<number> {
    return positive_n(n).ok_or_else("{} not positive")
}

export function divide_option(x: number, y: number): Option<number> {
    return divide(x, y).ok()
}

export function divide_or_zero(x: number, y: number): Option<number> {
    return divide(x, y).unwrap_or(0)
}

export function positive_sum(x: number, y: number): Result<number, string> {
    let xx = positive_n_result(x).unwrap() as number;
    let yy = positive_n_result(y).unwrap() as number;
    return Ok(xx + yy)
}

/// # Output
console.log(`🐥 positive_n_result: ${positive_n_result(42)}`);
console.log(`🐥 divide_option: ${divide_option(42, 2)}`);
console.log(`🐥 divide_or_zero: ${divide_or_zero(42, 0)}`);
console.log(`🐥 positive_sum: ${positive_sum(1, 2)}`);

// 🐥 positive_n_result: Ok(42)
// 🐥 divide_option: 21
// 🐥 divide_or_zero: 0
// 🐥 positive_sum: Ok(3)