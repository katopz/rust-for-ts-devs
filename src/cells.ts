// Cells are a last-resort that provide inner mutability
// on types that are otherwise immutable.

class Rc<T> {
    static cell: Cell<string>;
    constructor(public value: Cell<string>) { }
    replace(value: string) {
        const old = this.value;
        this.value = new Cell<string>(value);
        Rc.cell = this.value
        return old
    }

    clone(): Rc<T> {
        const cell = this.value.clone();
        return new Rc(cell);
    }

    toString() {
        return Rc.cell.toString()
    }
}

class Cell<T> {
    constructor(public value: T) { }
    toString() {
        return this.value
    }
    clone(): Cell<T> {
        return new Cell(this.value)
    }
}

export function hurray_for_rc() {
    let js_string = new Rc<Cell<string>>(new Cell<string>("Hello"));

    modify_string(js_string.clone());

    console.log(`🐥 New: ${js_string}`);
}

function modify_string(js_string: Rc<Cell<String>>) {
    let old_string = js_string.replace("Hello, World");
    console.log(`🐥 Old: ${old_string}`);
}

modify_string(new Rc<Cell<string>>(new Cell<string>("Hello")));
hurray_for_rc();

// 🐥 Old: Hello
// 🐥 Old: Hello
// 🐥 New: Hello, World