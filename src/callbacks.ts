// Function signatures can be used to pass callbacks...
// ... but they rarely are (for reasons mentioned below).
type ProcessStr = (foo: string) => string;

function process_and_print(foo: string, processor: ProcessStr) {
    let bar = processor(foo);
    console.log(`🐥 Processed string: ${bar}`);
}

export function mildly_optimistic_for_callbacks() {
    // We can pass existing functions directly:
    process_and_print("Hello, World", (input: string) => input.toUpperCase());

    // Or use custom closures:
    process_and_print("Hello, World", (foo: string) => {
        let prefix = "NEW"; // Try moving this to the outer scope...
        let result: string = foo.split(',').map(str => str.trim()).join('');
        return `${prefix}: ${result}`
    });

    // What we *cannot* do here is capture variables from
    // the outer scope :( For that we need traits...
}

/// # Output
mildly_optimistic_for_callbacks()

// 🐥 Processed string: HELLO, WORLD
// 🐥 Processed string: NEW: HelloWorld