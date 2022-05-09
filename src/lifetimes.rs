// What if our Point struct wanted to store *references* instead?
#[derive(Clone, Debug)]
pub struct Point<T> {
    timestamp: time::PrimitiveDateTime,
    value: T, // We now require a lifetime specifier.
}

#[derive(Debug)]
pub struct Series {
    points: Vec<Point<f64>>,
}

impl Series {
    pub fn new() -> Self {
        Self { points: Vec::new() }
    }

    pub fn from_points(points: &[Point<f64>]) -> Self {
        Self {
            points: points.to_owned(),
        }
    }
}

/// # Output
#[test]
fn test() {
    use time::macros::datetime;
    let series = Series::from_points(&[
        Point {
            timestamp: datetime!(2019-01-01 0:00),
            value: 1.0,
        },
        Point {
            timestamp: datetime!(2019-01-02 0:00),
            value: 2.0,
        },
    ]);
    println!("🦀 series: {:?}", series);
}

// 🦀 series: Series { points: [Point { timestamp: PrimitiveDateTime { date: Date { year: 2019, ordinal: 1 }, time: Time { hour: 0, minute: 0, second: 0, nanosecond: 0 } }, value: 1.0 }, Point { timestamp: PrimitiveDateTime { date: Date { year: 2019, ordinal: 2 }, time: Time { hour: 0, minute: 0, second: 0, nanosecond: 0 } }, value: 2.0 }] }
