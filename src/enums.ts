// Enums are a familiar concept from TypeScript...
// ... but don't underestimate them. In Rust they can
// carry data!

// export enum MyEnum {
//     Plain = "Plain",

//     // js is not supported,
//     // UnnamedValues: [string, number]

//     // js is not supported,
//     // NamedValues: { foo: string, bar: number }
// }

// export type MyEnumType = keyof typeof MyEnum;

export interface IMyEnum {
    Plain: string
    UnnamedValues: [string, number]
    NamedValues: { foo: string, bar: number }
}

export type MyEnumType = string | (string | number)[] | { foo: string, bar: number }

// And they can have an `impl` too!
export class MyEnum implements IMyEnum {
    public static Plain = 'Plain';
    public static UnnamedValues = (foo: string, bar: number) => [foo, bar]
    public static NamedValues = ({ foo, bar }: { foo: string, bar: number }) => {
        return {
            foo: foo,
            bar: bar,
            toString: () => JSON.stringify({ foo, bar })
        }
    }

    constructor(public Plain: string, public UnnamedValues: [string, number], public NamedValues: { foo: string, bar: number }) { }
}

/// # Output
console.log(`🦞 ${MyEnum.Plain}`);
