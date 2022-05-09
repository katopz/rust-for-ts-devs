import { IMyEnum, MyEnumClass } from "./enums";

// The most basic of control flow...
// ... has some interesting twists:

export function my_function(a: number): string {
    if (a > 0) {
        return "Input is positive"
    } else if (a < 0) {
        return "Input is negative"
    } else {
        return "Input is zero"
    }
}

export function other_function(input: IMyEnum) {
    const ab = input.UnnamedValues
    if (ab) {
        const [a, b] = ab
        console.log(`🐥 Input had values: (${a}, ${b})`)
    }
}

/// # Output
const input = new MyEnumClass("Plain", ["The answer is:", 42], { foo: "Hello", bar: 42 })
other_function(input)
