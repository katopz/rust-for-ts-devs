import { create_struct_with_foo } from './structs';

/// One entirely over-engineered function.
export function one_plus_one(): number {
    let a = 1;
    let b = a;
    return a + b
}

// Why can we use `a` twice in the above function?
// But not in this one?
export function trouble_in_paradise() {
    let a = create_struct_with_foo("foo");
    let b = a;
    console.log(`🐥 Foo b:`, b.foo);
    // Uncommenting the next line gives us:
    //   "borrow of moved value: `a`" :((
    //console.log("Foo a:", a.foo);
}

console.log(`🐥 one_plus_one: ${one_plus_one()}`)
trouble_in_paradise()

// 🐥 one_plus_one: 2
// 🐥 Foo b: foo
