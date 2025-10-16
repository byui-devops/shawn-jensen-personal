// src/arrayUtils.js

function getMax(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  return Math.max(...arr);
}

function getMin(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  return Math.min(...arr);
}

function getAverage(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  const sum = arr.reduce((a, b) => a + b, 0);
  return sum / arr.length;
}

module.exports = { getMax, getMin, getAverage };
