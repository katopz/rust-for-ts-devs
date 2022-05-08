struct MyPlainStruct {
    foo: u64,
}

// Note we can only derive `Copy` if we *also* derive `Clone`.
#[derive(Clone, Copy, Debug)]
pub struct MyCopyableStruct {
    pub foo: u64, // All primitives are copyable out of the box.
}

pub fn hurray() -> u64 {
    let a = MyCopyableStruct { foo: 1 };
    let b = a;
    a.foo + b.foo
}

/// # Output
#[test]
fn test() {
    println!("🦀 hurray: {}", hurray());
}

// 🦀 hurray: 2
