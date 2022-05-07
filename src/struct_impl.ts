import { create_struct_with_foo, MyStruct } from "./structs";

// Adding methods to a type is done using an `impl` block:

class MyNewStruct extends MyStruct {
    /// "Constructor" (static method):
    constructor() {
        super("hi", 0);

        // Or use functional style:
        const anotherMyNewStruct = create_struct_with_foo("hello");
        console.log(`🦞 anotherMyNewStruct: ${anotherMyNewStruct.foo}`);
    }

    /// Regular methods take a reference to `self`:
    public print_foo() {
        console.log(`Foo: ${this.foo}`);
    }
}

/// # Output
console.log(`🦞 ${new MyNewStruct().foo}`);