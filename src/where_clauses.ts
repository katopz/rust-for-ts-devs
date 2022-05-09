// To avoid "bloating" the function signatures, you can pull
// trait bounds out of the signature, and move them into a
// *where clause*:

interface ICloneAble<T> {
    clone: () => ICloneAble<T>;
}

export function clone_and_print<T>(item: ICloneAble<T>) {
    let clone = item.clone();
    console.log(`🐥 Clone:`, clone);
    return clone
}

export function add<T extends number>(a: T, b: T): number {
    return a + b
}

export class CloneAbleItem implements ICloneAble<string> {
    constructor(public value: string) { }
    clone() {
        return new CloneAbleItem('foo')
    }

    toString() {
        return this.value
    }
}

/// # Output
console.log(`🐥 ${clone_and_print(new CloneAbleItem('foo'))}`)
console.log(`🐥 ${add(1, 2)}`)

// 🐥 Clone: CloneAbleItem { value: 'foo' }
// 🐥 foo
// 🐥 3