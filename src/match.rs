use crate::enums::MyEnum;

// This is where enums start to shine!

pub fn other_function(input: MyEnum) {
    match input {
        MyEnum::UnnamedValues(a, b) => {
            println!("🦀 1️⃣ Input had values: ({}, {})", a, b);
        }
        MyEnum::NamedValues { foo, bar } => {
            println!("🦀 2️⃣ Input had values: ({}, {})", foo, bar);
        }
        _ => println!("Other input"),
    }
}

/// # Output
#[test]
fn test() {
    other_function(MyEnum::UnnamedValues("hi".to_owned(), 123));
    other_function(MyEnum::NamedValues {
        foo: "hello".to_owned(),
        bar: 456,
    });
}

// 🦀 1️⃣ Input had values: (hi, 123)
// 🦀 2️⃣ Input had values: (hello, 456)
