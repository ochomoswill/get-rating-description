import { assert, expect, test } from 'vitest';
import { getRatingDescription } from './getRatingDescription';

test('0 should return empty string', () => {
  expect(getRatingDescription(0)).toBe('');
});

test('54 => Unsatisfactory', () => {
  expect(getRatingDescription(54)).toBe('Unsatisfactory');
});

test('Upto 55 => Unsatisfactory', () => {
  expect(getRatingDescription(55)).toBe('Unsatisfactory');
});

test('Upto 65 => Development is required', () => {
  expect(getRatingDescription(56)).toBe('Development is required');
});

test('Upto 75 => Improvement needed', () => {
  expect(getRatingDescription(75)).toBe('Improvement needed');
});

test('Upto 85 => Meets all standards', () => {
  expect(getRatingDescription(85)).toBe('Meets all standards');
});

test('Upto 100 => Very good performance', () => {
  expect(getRatingDescription(100)).toBe('Very good performance.');
});
