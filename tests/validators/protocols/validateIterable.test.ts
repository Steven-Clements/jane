import { describe, it, expect } from 'vitest';
import validateIterable from '../../../src/validators/protocols/validateIterable';

describe('validateIterable', () => {
    it('returns ok:true for an array', () => {
        const value = [1, 2, 3];

        const result = validateIterable<number>(value, 'array');

        expect(result).toEqual({
            ok: true,
            value,
        });
    });

    it('returns ok:true for a string', () => {
        const value = 'abc';

        const result = validateIterable<string>(value, 'string');

        expect(result.ok).toBe(true);
    });

    it('returns ok:true for a Set', () => {
        const value = new Set([1, 2]);

        const result = validateIterable<number>(value, 'set');

        expect(result.ok).toBe(true);
    });

    it('returns ok:true for a Map', () => {
        const value = new Map([
            ['a', 1],
            ['b', 2],
        ]);

        const result = validateIterable<[string, number]>(value, 'map');

        expect(result.ok).toBe(true);
    });

    it('returns ok:true for a custom iterable object', () => {
        const iterable = {
            *[Symbol.iterator]() {
                yield 1;
            },
        };

        const result = validateIterable<number>(iterable, 'custom');

        expect(result.ok).toBe(true);
    });

    it('returns error for non-iterable objects', () => {
        const result = validateIterable({ a: 1 }, 'object');

        expect(result).toEqual({
            ok: false,
            field: 'object',
            message: 'Value must be iterable',
        });
    });

    it('returns error when Symbol.iterator exists but is not callable', () => {
        const value = {
            [Symbol.iterator]: true,
        };

        const result = validateIterable(value, 'broken');

        expect(result.ok).toBe(false);
    });

    it('returns error for null and undefined', () => {
        expect(validateIterable(null, 'null').ok).toBe(false);
        expect(validateIterable(undefined, 'undef').ok).toBe(false);
    });

    it('never throws for any input', () => {
        expect(() => validateIterable(123, 'num')).not.toThrow();
        expect(() => validateIterable(Symbol('s'), 'sym')).not.toThrow();
        expect(() => validateIterable(true, 'bool')).not.toThrow();
    });
});
