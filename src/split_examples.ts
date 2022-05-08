// This one shows almost everything we learned today in one signature:
export function split(js_string: string, delim: string) {
    return js_string.split(delim)
}

// But notice how we no longer need the lifetime of `delim` once we
// have collected the split strings into a `Vec`:
export function split_vec(js_string: string, delim: string) {
    return js_string.split(delim)
}

function print_parsed_numbers() {
    // 'static is a special lifetime that lives for the entire
    // duration of the program's execution:
    let words = "one two three";
    let split_words = split_vec(words, " ");
    let numbers = split(words, " ")
        .map(word => word.length)

    for (const e in split_words) {
        console.log(e)
        // console.log(`${word} = ${number}`);
    }
}

/// # Output
print_parsed_numbers();
