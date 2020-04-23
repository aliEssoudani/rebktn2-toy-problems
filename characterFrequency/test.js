const characterFrequency = require('./index');

describe('characterFrequency', () => {
  test('should exist', () => {
    expect(characterFrequency).toBeDefined();
  });
  test('should be a function', () => {
    expect(typeof characterFrequency).toEqual('function');
  });
  test('returns an array', () => {
    expect(characterFrequency('')).toEqual([]);
  });
  test('returns an array of arrays sorted in descending order by frequency and then by ascending order by character', () => {
    expect(characterFrequency('aaabbc')).toEqual([
      ['a', 3],
      ['b', 2],
      ['c', 1]
    ]);
  });
  test('returns an array of arrays sorted in descending order by frequency and then by ascending order by character', () => {
    expect(characterFrequency('mississippi')).toEqual([
      ['i', 4],
      ['s', 4],
      ['p', 2],
      ['m', 1]
    ]);
  });
  test('returns an array of arrays sorted in descending order by frequency and then by ascending order by character', () => {
    expect(characterFrequency('yzbzy')).toEqual([
      ['y', 2],
      ['z', 2],
      ['b', 1]
    ]);
  });
  test('returns an array of arrays sorted in descending order by frequency and then by ascending order by character', () => {
    expect(characterFrequency('popopo')).toEqual([
      ['o', 3],
      ['p', 3]
    ]);
  });
  test('returns an array of arrays sorted in descending order by frequency and then by ascending order by character', () => {
    expect(characterFrequency('popopop')).toEqual([
      ['p', 4],
      ['o', 3]
    ]);
  });
  test('returns an array of arrays sorted in descending order by frequency and then by ascending order by character', () => {
    expect(characterFrequency('supercalifragilisticexpialidocious')).toEqual([
      ['i', 7],
      ['a', 3],
      ['c', 3],
      ['l', 3],
      ['s', 3],
      ['e', 2],
      ['o', 2],
      ['p', 2],
      ['r', 2],
      ['u', 2],
      ['d', 1],
      ['f', 1],
      ['g', 1],
      ['t', 1],
      ['x', 1]
    ]);
  });
});
