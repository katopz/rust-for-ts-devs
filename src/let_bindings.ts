// We have already seen `let` bindings, but now we will
// dive in a little bit deeper...

import { Ok, Result } from "./option_and_result";

/// `number` is user input, so initially is given as a string.
export function input_plus_one(number: string): Result<number, string> {
    let _number = parseInt(number)
    _number = _number + 1;
    //^ See this `let` binding? In TypeScript we would have written
    // the second line without starting it with `let`. In fact, in
    // TS, the first binding would already have caused us issues,
    // because it shadows the argument name. What's going on here?
    // In Rust, everything is **immutable by default**, including
    // `let` bindings (there's no `const`). To make some situations
    // where you'd like to reassign more convenient, shadowing is
    // an accepted practice.
    return Ok(_number)
}

/// # Output
console.log(`🐥 input_plus_one: ${input_plus_one("42")}`);

// 🐥 input_plus_one: Ok(43)