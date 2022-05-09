// What if our Point struct wanted to store *references* instead?
export type Point<T> = {
    timestamp: Date,
    value: T, // We now require a lifetime specifier.
}

export type ISeries = {
    points?: Point<number>[],
}

class Series implements ISeries {
    constructor(public points?: Point<number>[]) { }

    from_points(points: Point<number>[]): Series {
        return new Series(points);
    }

    toString(): string {
        return `Series { points: ${JSON.stringify(this.points)} }`;
    }
}

/// # Output
let series = new Series([
    { timestamp: new Date(), value: 1 } as Point<number>,
    { timestamp: new Date(), value: 2 } as Point<number>,
])

console.log(`🐥 series: ${series}`);

// 🐥 series: Series { points: [{"timestamp":"2022-05-09T04:09:28.831Z","value":1},{"timestamp":"2022-05-09T04:09:28.831Z","value":2}] }
