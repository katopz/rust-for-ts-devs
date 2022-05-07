import { MyEnum, MyEnumType } from './enums';

// We need to use `type` instead of `enum`

export function other_function(input: MyEnumType) {
    // Need to case to string for comparison.
    switch (input.toString()) {
        // We need to implements the `toString` method for each type.
        case MyEnum.UnnamedValues('hi', 123).toString():
            const [a, b] = input as [string, number];
            console.log(`🦞 1️⃣ Input had values: (${a}, ${b})`);
            break;
        // This actually needs to be sorted object keys or hashed for comparable.
        // But we will leave this mess to show Rust is more easier to handle here.
        case MyEnum.NamedValues({ foo: 'hello', bar: 456 }).toString():
            const { foo, bar } = input as { foo: string, bar: number };
            console.log(`🦞 2️⃣ Input had values: (${foo}, ${bar})`);
            break;
        default: console.log("Other input")
    }
}

/// # Output
other_function(MyEnum.UnnamedValues('hi', 123));
other_function(MyEnum.NamedValues({
    foo: 'hello',
    bar: 456
}));

// 🦞 1️⃣ Input had values: (hi, 123)
// 🦞 2️⃣ Input had values: (hello, 456)
