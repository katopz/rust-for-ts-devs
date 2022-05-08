type Display = {
    toString(): string;
}

// Rather than using generics, we can pass "trait objects"
// directly with the `dyn` keyword. The difference? With
// generics we use static dispatch, while `dyn` uses dynamic
// dispatch.
export function print_item(item: Display) {
    console.log(`🐥 Item: ${item}`);
}

// `impl` can be used when you want to hide a concrete type.
// In this example, all we know is that this function returns
// "something" that implements the `Display` trait.
// This is commonly used for methods that return iterators,
// for instance.
export function get_printable() {
    return 1
}

/// # Output
print_item('foo')
console.log(`🐥 get_printable: ${get_printable()}`)

// 🐥 Item: foo
// 🐥 get_printable: 1
