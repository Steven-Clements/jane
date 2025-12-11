import { describe, it, expect } from 'vitest';
import isTuple from '../../../src/type-guards/structural/isTuple.js';
import isNumber from '../../../src/type-guards/primitives/isNumber.js';
import isString from '../../../src/type-guards/primitives/isString.js';
import isBoolean from '../../../src/type-guards/primitives/isBoolean.js';

describe('isTuple', () => {
    it('returns true for tuples matching the guards', () => {
        expect(isTuple([1, 'a'], [isNumber, isString] as const)).toBe(true);
        expect(isTuple([42, true, 'x'], [isNumber, isBoolean, isString] as const)).toBe(true);
    });

    it('returns false when length does not match', () => {
        expect(isTuple([1], [isNumber, isString] as const)).toBe(false);
        expect(isTuple([1, 'a', true], [isNumber, isString] as const)).toBe(false);
    });

    it('returns false when an element fails its guard', () => {
        expect(isTuple([1, 2], [isNumber, isString] as const)).toBe(false);
        expect(isTuple(['x', 'y'], [isNumber, isString] as const)).toBe(false);
    });

    it('returns false for non-array values', () => {
        expect(isTuple(null, [isNumber] as const)).toBe(false);
        expect(isTuple(undefined, [isNumber] as const)).toBe(false);
        expect(isTuple(123, [isNumber] as const)).toBe(false);
        expect(isTuple('abc', [isNumber] as const)).toBe(false);
        expect(isTuple({}, [isNumber] as const)).toBe(false);
    });

    it('returns false if a guard is not a function (runtime safety)', () => {
        const invalidGuards = [undefined] as unknown as readonly [(value: unknown) => boolean];
        expect(isTuple([1], invalidGuards)).toBe(false);
    });
});
