// Generics look similar to how they look in TypeScript...
// ... but only at a first glance.

export type Point<T> = {
    timestamp: Date,
    value: T,
}

export type Series = {
    points: Point<number>[],
}
