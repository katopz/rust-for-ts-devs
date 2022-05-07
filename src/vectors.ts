// We've seen vectors briefly, so let's look a little bit more
// at what they can do.

export function hurray_for_vecs(): string[] {
    let vec1 = ["Hello", "World"];
    let vec2: string[] = [];

    vec2 = vec2.concat(vec1); // This empties `vec1`!
    vec2.push("!");

    // Be careful: working with raw indices may panic!
    console.log('🦞 0:', vec2)
    vec2.splice(1, 0, ", ");
    console.log('🦞 1:', vec2)
    vec2.splice(2, 1)
    console.log('🦞 2:', vec2)
    vec2.splice(2, 0, "Word");
    console.log('🦞 3:', vec2)
    vec2[2] = "World";
    console.log('🦞 4:', vec2)
    const assert_eq = vec2.toString() === ["Hello", ", ", "World", "!"].toString();
    if (!assert_eq) throw new Error('Failed assert_eq')

    // Prepend another "Hello" by concatenating a slice
    // with two vectors:
    vec2 = ["Hello"].concat(vec2);
    vec2 = [...new Set(vec2)]

    return vec2.map(e => e.toUpperCase());
}

/// # Output
console.log(`🦞 ${JSON.stringify(hurray_for_vecs())}`)

// 🦞 0: [ 'Hello', 'World', '!' ]
// 🦞 1: [ 'Hello', ', ', 'World', '!' ]
// 🦞 2: [ 'Hello', ', ', '!' ]
// 🦞 3: [ 'Hello', ', ', 'Word', '!' ]
// 🦞 4: [ 'Hello', ', ', 'World', '!' ]
// 🦞 ["HELLO",", ","WORLD","!"]