import { MyEnumClass, IMyEnum } from './enums';

// This is where enums start to shine!

export function other_function(input: IMyEnum) {
    switch (input.toString()) {
        case new MyEnumClass(undefined, ['hi', 123], undefined).toString():
            const [a, b] = input.UnnamedValues!;
            console.log(`🦞 1️⃣ Input had values: (${a}, ${b})`);
            break;
        case new MyEnumClass(undefined, undefined, { foo: 'hello', bar: 456 }).toString():
            const { foo, bar } = input.NamedValues!;
            console.log(`🦞 2️⃣ Input had values: (${foo}, ${bar})`);
            break;
        default: console.log("Other input")
    }
}

/// # Output
other_function(new MyEnumClass(undefined, ['hi', 123], undefined));

// 🦞 1️⃣ Input had values: (hi, 123)
