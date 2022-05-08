// Derives an implementation of the `Clone` "trait":
// For now, let's suffice by saying a trait is a simple way
// for a type to indicate it implements certain functionality.
interface IMyClonableStruct {
    foo: string, // strings are cloneable out of the box.
}

class MyClonableStruct implements IMyClonableStruct {
    constructor(public foo: string) { }
    clone() {
        return new MyClonableStruct(this.foo);
    }
}

export function calling_clone_solves_our_woes() {
    let a = new MyClonableStruct("foo");
    let b = a.clone(); // Now we need to clone explicitly.
    console.log(`🐥 ${a.foo} + ${b.foo} = foofoo`);
}

// Side-note: Rust clones are mostly comparable to
// the TS concept of *deep copies*. *Shallow copies* are not
// really a thing in Rust, which saves you from a lot of
// headaches of wondering whether other code might be
// mutating (part of) your data structures.

/// # Output
calling_clone_solves_our_woes()

// 🐥 foo + foo = foofoo
