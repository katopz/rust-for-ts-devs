// Rust structs are similar to classes...
// ... but their definition contains *data* members only!

export class MyStruct {
    constructor(
        /// Public property:
        public foo?: string,
        /// Private property:
        private bar?: number
    ) { }
}

/// # Example
export function create_struct_with_foo(foo: string): MyStruct {
    // Instantiation is similar to TS object literals, but we just
    // need to provide the name:
    return new MyStruct(foo, 0)
    // (Also note how we can initialize private properties here?)
}

/// # Output
console.log(`🦞 ${create_struct_with_foo('hello').foo}`);
