import { MyCopyableStruct } from './copy_trait';

export function lets_borrow() {
    let a = new MyCopyableStruct(1);
    let b = a;

    modify(b); // <- Try replacing `b` with `a` here.

    // Just to be clear: there is *NO* good reason here to
    // borrow instead of just making a copy :)
    print(b);
    modify(b);
    print(b);
}

// In Rust terminology, `modify()` *borrows* a mutable
// reference.
function modify(b: MyCopyableStruct) {
    b.foo += 1;
}

function print(b: MyCopyableStruct) {
    console.log(`🐥 b.foo = ${b.foo}`); // ???
}

/// # Output
lets_borrow()

// 🐥 b.foo = 2
// 🐥 b.foo = 3
