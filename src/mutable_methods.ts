import { MyStruct } from './structs';

// Methods need to explicitly indicate when they mutate
// their receiver.

class MyStruct2 extends MyStruct {
    set_foo(js_string: string) {
        this.foo = js_string;
    }
}

export function my_function() {
    // Note we would not even be allowed to call `set_foo()`
    // if `a` is not declared as mutable here:
    let a = new MyStruct2();
    a.set_foo("my_foo");
    console.log(`🐥 a.foo = ${a.foo}`);
}

my_function()

// 🐥 a.foo = my_foo
