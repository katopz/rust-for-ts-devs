// Enums are a familiar concept from TypeScript...
// ... but don't underestimate them. In Rust they can
// carry data!

enum MyEnum {
    Plain = "Plain",

    // js is not supported,
    // UnnamedValues: [string, number]

    // js is not supported,
    // NamedValues: { foo: string, bar: number }
}

interface IMyEnum {
    Plain: string
    UnnamedValues: [string, number]
    NamedValues: { foo: string, bar: number }
}

// And they can have an `impl` too!
export class MyEnumClass implements IMyEnum {
    constructor(
        public Plain: string,
        public UnnamedValues: [string, number],
        public NamedValues: { foo: string, bar: number }
    ) { }
}

/// # Output
console.log(`🦞 ${MyEnum.Plain}`);
