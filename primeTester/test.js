const primeTester = require('./index');

describe('primeTester', () => {
  test('should return true if a number is prime', () => {
    expect(primeTester(2)).toBe(true);
  });
  test('should return true if a number is prime', () => {
    expect(primeTester(7)).toBe(true);
  });
  test('should return true if a number is prime', () => {
    expect(primeTester(13)).toBe(true);
  });
  test('should return true if a number is prime', () => {
    expect(primeTester(17)).toBe(true);
  });
  test('should return true if a number is prime', () => {
    expect(primeTester(15485867)).toBe(true);
  });
  test('should return true if a number is prime', () => {
    expect(primeTester(2971215073)).toBe(true);
  });
  test('should return true if a number is prime', () => {
    expect(primeTester(70368760954879)).toBe(true);
  });
  test('should return false if a number is not prime', () => {
    expect(primeTester(1)).toBe(false);
  });
  test('should return false if a number is not prime', () => {
    expect(primeTester(4)).toBe(false);
  });
  test('should return false if a number is not prime', () => {
    expect(primeTester(15)).toBe(false);
  });
  test('should return false if a number is not prime', () => {
    expect(primeTester(91)).toBe(false);
  });
  test('should return false if a number is not prime', () => {
    expect(primeTester(221)).toBe(false);
  });
  test('should return false if a number is not prime', () => {
    expect(primeTester(1147)).toBe(false);
  });
  test('should return false if a number is not prime', () => {
    expect(primeTester(22499)).toBe(false);
  });
  test('should return false if a number is not prime', () => {
    expect(primeTester(70368760954878)).toBe(false);
  });
  test('should return false if a number is not prime', () => {
    expect(primeTester(239812076741689)).toBe(false);
  });
  test('should return false if a number is not prime', () => {
    expect(primeTester(8828119010022395000)).toBe(false);
  });
});
