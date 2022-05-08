import { MyCopyableStruct } from './copy_trait';

/// Another entirely over-engineered function.
export function one_plus_one(): number {
    //  vvv--- it's hard to miss :)
    let a = 1;
    a += 1;
    return a
}

// Quiz time! (Use `cargo run` to see the answer)
export function quiz() {
    let a = new MyCopyableStruct(1);
    modify(a);
    console.log(`🐥 a.foo = ${a.foo}`); // ???
}

function modify(a: MyCopyableStruct) {
    a.foo = 2;
}

/// # Output
quiz()

// 🐥 a.foo = 2
