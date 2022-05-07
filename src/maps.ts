export function hurray_for_maps() {
    // Beware BTreeMap/HashMap::from() was stabilized only
    // very recently (since version 1.56.0):
    interface IFakeMap { [key: number]: string }
    let map1: IFakeMap = { 1: "Hello", 2: "World" };
    let map2: IFakeMap = {};

    // extend
    map2 = { ...map2, ...map1 };

    // insert
    map2 = { ...map2, ...{ 3: "!" } };

    // retain
    let foo = Object.entries(map2).filter(e => e[1].length > 1)
    let bar = foo.map(e => ({ [`${e[0]}`]: e[1] }))
    bar = Object.assign({}, ...bar)

    for (let key in bar) {
        console.log(`🦞 ${key}: ${bar[key]}`);
    }

    console.log("🦞 Entry 4: ", Object.values(bar[4] ? bar[4] : bar[4] = { 4: '!' })[0])

    return map2
}

/// # Output
hurray_for_maps()

// 🦞 1: Hello
// 🦞 2: World
// 🦞 Entry 4:  !