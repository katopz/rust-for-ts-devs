import { MyStruct } from "./structs";

// Adding methods to a type is done using an `impl` block:

class MyNewStruct extends MyStruct {
    /// "Constructor" (static method):
    constructor() {
        super("hi", 0);
    }

    /// Regular methods take a reference to `self`:
    public print_foo() {
        console.log(`🐥 Foo: ${this.foo}`);
    }
}

/// # Output
new MyNewStruct().print_foo();