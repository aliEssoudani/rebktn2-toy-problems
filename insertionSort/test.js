const insertionSort = require('./index');

describe('insertionSort', () => {
  test('should return a sorted array', () => {
    expect(insertionSort([{ value: 3 }, { value: 1 }, { value: 2 }])).toEqual([
      { value: 1 },
      { value: 2 },
      { value: 3 }
    ]);

    expect(
      insertionSort([{ value: 1 }, { value: 0 }, { value: 100 }, { value: 42 }])
    ).toEqual([{ value: 0 }, { value: 1 }, { value: 42 }, { value: 100 }]);

    expect(
      insertionSort([
        { value: 67 },
        { value: 23.7 },
        { value: 23.4 },
        { value: 9 }
      ])
    ).toEqual([{ value: 9 }, { value: 23.4 }, { value: 23.7 }, { value: 67 }]);
    expect(insertionSort([{ value: 5 }, { value: 3 }, { value: 2 }])).toEqual([
      { value: 2 },
      { value: 3 },
      { value: 5 }
    ]);
    expect(
      insertionSort([{ value: 0.1 }, { value: 0 }, { value: 0.5 }])
    ).toEqual([{ value: 0 }, { value: 0.1 }, { value: 0.5 }]);
    expect(insertionSort([{ value: 0 }, { value: 1 }, { value: -1 }])).toEqual([
      { value: -1 },
      { value: 0 },
      { value: 1 }
    ]);
    expect(
      insertionSort([
        { value: 10 },
        { value: 5, order: 1 },
        { value: 5, order: 2 }
      ])
    ).toEqual([{ value: 5, order: 1 }, { value: 5, order: 2 }, { value: 10 }]);
    expect(
      insertionSort([
        { value: 10 },
        { value: 5, order: 1 },
        { value: 2 },
        { value: 5, order: 2 },
        { value: 1 }
      ])
    ).toEqual([
      { value: 1 },
      { value: 2 },
      { value: 5, order: 1 },
      { value: 5, order: 2 },
      { value: 10 }
    ]);
  });
});
