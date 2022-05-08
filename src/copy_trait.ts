class MyPlainStruct {
    foo: number
}

// Note we can only derive `Copy` if we *also* derive `Clone`.
export class MyCopyableStruct {
    constructor(public foo: number) { }
}

export function hurray(): number {
    let a = new MyCopyableStruct(1);
    let b = a;
    return a.foo + b.foo
}

/// # Output
console.log(`🐥 hurray: ${hurray()}`)

// 🐥 hurray: 2
