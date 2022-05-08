use crate::option_and_result::{divide, positive_n};

// More examples on how to use `Option` and `Result`:

pub fn positive_n_result(n: i32) -> Result<i32, String> {
    positive_n(n).ok_or_else(|| format!("{} not positive", n))
}

pub fn divide_option(x: i32, y: i32) -> Option<i32> {
    divide(x, y).ok()
}

pub fn divide_or_zero(x: i32, y: i32) -> i32 {
    divide(x, y).unwrap_or(0)
}

pub fn positive_sum(x: i32, y: i32) -> Result<i32, String> {
    let x = positive_n_result(x)?;
    let y = positive_n_result(y)?;
    Ok(x + y)
}

/// # Output
#[test]
fn test() {
    println!("🦀 positive_n_result: {:?}", positive_n_result(42));
    println!("🦀 divide_option: {:?}", divide_option(42, 2));
    println!("🦀 divide_or_zero: {:?}", divide_or_zero(42, 0));
    println!("🦀 positive_sum: {:?}", positive_sum(1, 2));
}

// 🦀 positive_n_result: Ok(42)
// 🦀 divide_option: Some(21)
// 🦀 divide_or_zero: 0
// 🦀 positive_sum: Ok(3)
