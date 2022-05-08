// Reference-counting can be a convenient way to sidestep
// borrowing rules, without needing deep clones.
class Rc<T> {
    constructor(public value: T) { }
    clone(): Rc<T> {
        return new Rc<T>(this.value);
    }
    toString(): string {
        return `${this.value}`;
    }
}

export function hurray_for_rc(): Rc<string> {
    let string = new Rc<string>("Hello, World!");

    // This clone increases the reference count:
    let the_same_string = string.clone();

    // Unlike if we had cloned the string itself, we're
    // still only having a single instance of the string.
    print_string(the_same_string.clone());

    return new Rc<string>(`${string}:${the_same_string}`)
}

function print_string(js_string: Rc<string>) {
    console.log(`🐥 ${js_string}`);
}

/// # Output
hurray_for_rc()

// 🐥 Hello, World!