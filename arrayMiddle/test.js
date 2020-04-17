const middle = require('./index');

describe('array middle', () => {
  test('should return the middle element in the array', () => {
    expect(middle([200,5,100])).toEqual(5);
  });
  test('should return the middle element in the array', () => {
    expect(middle([2,3,2,3,2])).toEqual(2);
  });
  test('should return the middle element in the array', () => {
    expect(middle([0,4,7,5,4,3,5,7,5,4,5,6,8,2,3,2,3,5,6,8,6,6,7,6,4,3,2])).toEqual(2);
  });
  test('should return the middle element in the array', () => {
    expect(middle([153,485,644,364,586,592,496,583,506,385,285,673,586])).toEqual(496);
  });
  test('should return the average of the two middle elements', () => {
    expect(middle([10,20,30,40])).toEqual(25);
  });
  test('should return the average of the two middle elements', () => {
    expect(middle([27464,27586,27484,27494,27485,27596,27562,27253,27593,27521,27425,27529])).toEqual(27579);
  });
  test('should return the average of the two middle elements', () => {
    expect(middle([2,3])).toEqual(2.5);
  });
});