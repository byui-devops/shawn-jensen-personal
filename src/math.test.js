// src/math.test.js
const { add, subtract, multiply, divide } = require('./math');

describe('Math Functions', () => {
  test('adds numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtracts numbers correctly', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test('multiplies numbers correctly', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test('divides numbers correctly', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('throws error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });
});
