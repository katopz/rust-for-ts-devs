// To avoid "bloating" the function signatures, you can pull
// trait bounds out of the signature, and move them into a
// *where clause*:

use std::fmt::Display;

pub fn clone_and_print<T>(item: &T) -> T
where
    T: Clone + Display,
{
    let clone = item.clone();
    println!("🦀 Clone: {}", clone);
    clone
}

pub fn add<T>(a: T, b: T) -> T
where
    T: std::ops::Add<Output = T>,
{
    a + b
}

/// # Output
#[test]
fn test() {
    println!("🦀 {}", clone_and_print(&"foo"));
    println!("🦀 {}", add(1, 2));
}

// 🦀 Clone: foo
// 🦀 foo
// 🦀 3
