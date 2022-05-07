export function hurray_for_sets() {
    let set1 = new Set(["Hello", "World"]);
    let set2 = new Set();

    // set2.extend(set1.iter());
    set2 = new Set(Array.from(set2).concat(Array.from(set1)).flat())

    // set2.insert("!");
    set2.add("!");

    // set2.retain(|word| word.len() > 1);
    set2 = new Set((Array.from(set2) as string[]).filter(s => s.length > 1));

    for (let word of set2) {
        console.log(`🦞 ${word}`);
    }
}

hurray_for_sets()