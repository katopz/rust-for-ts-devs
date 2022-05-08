// Cells are a last-resort that provide inner mutability
// on types that are otherwise immutable.
use std::{cell::Cell, rc::Rc};

pub fn hurray_for_rc() {
    let string = Rc::new(Cell::new("Hello".to_owned()));

    modify_string(string.clone());

    println!("🦀 New: {}", string.take());
}

fn modify_string(string: Rc<Cell<String>>) {
    let old_string = string.replace("Hello, World".to_owned());
    println!("🦀 Old: {}", old_string);
}

/// # Output
#[test]
fn test() {
    modify_string(Rc::new(Cell::new("Hello".to_owned())));
    hurray_for_rc();
}

// 🦀 Old: Hello
// 🦀 Old: Hello
// 🦀 New: Hello, World
