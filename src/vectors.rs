// We've seen vectors briefly, so let's look a little bit more
// at what they can do.

pub fn hurray_for_vecs() -> Vec<String> {
    let mut vec1 = vec!["Hello", "World"];
    let mut vec2 = Vec::new();

    vec2.append(&mut vec1); // This empties `vec1`!
    vec2.push("!");

    // Be careful: working with raw indices may panic!
    println!("🦀 0: {:?}", vec2);
    vec2.insert(1, ", ");
    println!("🦀 1: {:?}", vec2);
    vec2.remove(2);
    println!("🦀 2: {:?}", vec2);
    vec2.splice(2..2, ["Word"]);
    println!("🦀 3: {:?}", vec2);
    vec2[2] = "World";
    println!("🦀 4: {:?}", vec2);
    assert_eq!(vec2, vec!["Hello", ", ", "World", "!"]);

    // Prepend another "Hello" by concatenating a slice
    // with two vectors:
    vec2 = [Vec::from(["Hello"]), vec2].concat();
    vec2.dedup();

    vec2.into_iter().map(str::to_uppercase).collect()
}

/// # Output
#[test]
fn test() {
    println!("🦀 {:?}", hurray_for_vecs());
}

// 🦀 0["Hello", "World", "!"]
// 🦀 1["Hello", ", ", "World", "!"]
// 🦀 2["Hello", ", ", "!"]
// 🦀 3["Hello", ", ", "Word", "!"]
// 🦀 ["HELLO", ", ", "WORLD", "!"]
