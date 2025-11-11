// src/arrayUtils.test.js
const { getMax, getMin, getAverage } = require('./arrayUtils');

describe('Array Utilities', () => {
  const numbers = [1, 2, 3, 4, 5];

  test('finds max value', () => {
    expect(getMax(numbers)).toBe(5);
  });

  test('finds min value', () => {
    expect(getMin(numbers)).toBe(1);
  });

  test('calculates average value', () => {
    expect(getAverage(numbers)).toBe(3);
  });

  test('returns null for empty array', () => {
    expect(getMax([])).toBeNull();
    expect(getMin([])).toBeNull();
    expect(getAverage([])).toBeNull();
  });

  test('returns null for non-array input', () => {
    expect(getMax('not an array')).toBeNull();
    expect(getMin(123)).toBeNull();
    expect(getAverage(null)).toBeNull();
  });
});
