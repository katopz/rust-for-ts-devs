import { MyCopyableStruct } from './copy_trait';

// Let's do another quiz!
// Same as the first, but now we pass by reference:
export function second_quiz() {
    let b = new MyCopyableStruct(1);
    modify(b);
    console.log(`🐥 b.foo = ${b.foo}`); // ???
}

// In Rust terminology, `modify()` *borrows* a mutable
// reference.
function modify(b: MyCopyableStruct) {
    b.foo = 2;
}

/// # Output
second_quiz()

// 🐥 b.foo = 2
