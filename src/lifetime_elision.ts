// Why didn't we need to specify lifetimes before?

// This works without specifying lifetimes, but they're still
// there... it's just that the compiler allows you to *elide*
// them because it can trivially figure them out.

export function substr(js_string: string, offset: number, len: number): string {
    return js_string.substring(offset, offset + len)
}

// This one poses an issue: From which argument do we borrow?
export function longest(a: string, b: string): string {
    if (a.length > b.length) {
        return a
    } else {
        return b
    }
}

/// # Output
console.log(`🐥 input_plus_one: ${longest('long', 'short')}`)
console.log(`🐥 input_plus_one: ${substr("bar", 1, 1)}`)

// 🐥 input_plus_one: short
// 🐥 input_plus_one: a
