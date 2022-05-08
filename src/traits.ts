// Traits are defined with the `trait` keyword and are similar
// to TypeScript interfaces with method signatures.

type Output = MyCopyableStruct;

// JavaScript doesn't support operator overloading.
interface Add {
    foo: number;
    add?(rhs: MyCopyableStruct): Output;
}

class MyCopyableStruct implements Add {
    constructor(public foo: number) { }
    add(rhs: MyCopyableStruct): Output {
        return new MyCopyableStruct(this.foo + rhs.foo);
    }

    toString() {
        return `MyCopyableStruct { foo: ${this.foo} })`
    }
}

console.log(`🐥 Substring: ${new MyCopyableStruct(1).add(new MyCopyableStruct(2))}`);

// 🐥 Substring: MyCopyableStruct { foo: 3 })