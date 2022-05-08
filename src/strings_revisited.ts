// Now we should be equiped to understand the difference
// between `String` and `&str`:
// - `String` *owns* string data. It's a data type that can be
//   moved or cloned. It even has mutating methods for appending.
// - `&str` is a reference to a string, either owned by a
//   `String`, or hard-coded into the executable.
export function keys() {
    let _string = "monkey"; // hard-coded string: `&str`
    _string = _string.concat('s'); // mutate owned string: `String`
    let substring = _string.slice(3); // borrow a slice: `&str`

    console.log(`🐥 Substring: ${substring}`);
}

// Rule of thumb:
// - Function arguments are preferably `&str` so either version
//   can easily be passed in.
// - Return values are usually `String`, unless you very
//   specifically want to borrow a (sub)string or hard-coded
//   string.

/// # Output
keys()

// 🐥 Substring: key