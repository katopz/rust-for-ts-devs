use crate::course_2::MyCopyableStruct;

/// Another entirely over-engineered function.
pub fn one_plus_one() -> u64 {
    //  vvv--- it's hard to miss :)
    let mut a = 1;
    a += 1;
    a
}

// Quiz time! (Use `cargo run` to see the answer)
pub fn quiz() {
    let mut a = MyCopyableStruct { foo: 1 };
    modify(a);
    println!("🦀 a.foo = {}", a.foo); // ???
    a.foo = 2;
    println!("🦀 a.foo = {}", a.foo); // ???
}

fn modify(mut a: MyCopyableStruct) {
    a.foo = 2;
}

/// # Output
#[test]
fn test() {
    quiz();
}

// 🦀 a.foo = 1
