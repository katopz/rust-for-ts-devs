// Functions can have generics too, but usually you will need
// to add *trait bounds* to be able to act on parameters with
// generic types...

type Clone = {
    clone(): Clone;
}

type Display = {
    toString(): string;
}

export class CloneAbleItem {
    constructor(public value: string) { }
    clone() {
        return new CloneAbleItem('foo')
    }

    toString() {
        return this.value
    }
}

export function clone<T extends Clone>(item: & T): T {
    // We need to know `T` implements `Clone` to know that
    // `item` has a `clone()` method:
    return item.clone() as T;
}

// Little sidestep: `Clone` is part of Rust's "prelude" (the
// set of types that are in scope by default), but `Display`
// isn't. That's why we need to specify the full path for
// `Display`, but not for `Clone`.
export function clone_and_print<T extends Clone & Display>(item: & T): T {
    let clone = item.clone();
    console.log(`🐥 Clone: ${clone}`);
    return clone as T;
}

/// # Output
clone_and_print(new CloneAbleItem('foo'))

// 🐥 Clone: foo
