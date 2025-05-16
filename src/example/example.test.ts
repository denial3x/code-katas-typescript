import { sum } from './example.ts';
import { describe, expect, test } from '@jest/globals';

describe('Example Test', () => {
  test('1 + 2 is to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('0 + 0 is to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
})
