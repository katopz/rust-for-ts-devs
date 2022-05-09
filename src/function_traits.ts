// Instead, we commonly use trait bounds:

function process_and_print<P extends (string) => {}>(js_string: string, processor: P) {
    let processed_string = processor(js_string);
    console.log("🐥 Processed string:", processed_string);
}

const to_uppercase = (js_string: string) => js_string.toUpperCase()

export function hurray_for_closures() {
    // We can still pass existing functions directly:
    process_and_print("Hello, World", to_uppercase);

    let prefix = "NEW";

    // Or use custom closures:
    process_and_print("Hello, World", js_string => {
        let result: string = js_string.split(',').map(e => e.trim());
        return `${prefix}: ${result}`
    });
}

/// # Output
hurray_for_closures()

// 🐥 Processed string: HELLO, WORLD
// 🐥 Processed string: NEW: Hello,World
