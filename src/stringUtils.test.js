// src/stringUtils.test.js

const { capitalize, reverse, isPalindrome } = require('./stringUtils');

describe('String Utilities', () => {
  test('capitalizes a lowercase string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('returns empty string when input is empty', () => {
    expect(capitalize('')).toBe('');
  });

  test('reverses a string correctly', () => {
    expect(reverse('abc')).toBe('cba');
  });

  test('detects a palindrome correctly', () => {
    expect(isPalindrome('madam')).toBe(true);
  });

  test('detects a non-palindrome correctly', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  test('ignores punctuation and case for palindromes', () => {
    expect(isPalindrome('A man, a plan, a canal, Panama')).toBe(true);
  });
});
