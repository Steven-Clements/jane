import { describe, it, expect } from 'vitest';
import validateAsyncIterable from '../../../src/validators/protocols/validateAsyncIterable';

describe('validateAsyncIterable', () => {
    it('returns ok:true for a native async iterable', async () => {
        async function* gen() {
            yield 1;
            yield 2;
        }

        const result = validateAsyncIterable<number>(gen(), 'items');

        expect(result).toEqual({
            ok: true,
            value: expect.any(Object),
        });

        if (result.ok) {
            const collected: number[] = [];
            for await (const value of result.value) {
                collected.push(value);
            }

            expect(collected).toEqual([1, 2]);
        }
    });

    it('returns ok:true for a custom async iterable object', () => {
        const asyncIterable = {
            async *[Symbol.asyncIterator]() {
                yield 'a';
            },
        };

        const result = validateAsyncIterable<string>(asyncIterable, 'stream');

        expect(result.ok).toBe(true);
    });

    it('returns error for null', () => {
        const result = validateAsyncIterable(null, 'value');

        expect(result).toEqual({
            ok: false,
            field: 'value',
            message: 'Value must be an async iterable',
        });
    });

    it('returns error for undefined', () => {
        const result = validateAsyncIterable(undefined, 'value');

        expect(result).toEqual({
            ok: false,
            field: 'value',
            message: 'Value must be an async iterable',
        });
    });

    it('returns error for a synchronous iterable', () => {
        const result = validateAsyncIterable([1, 2, 3], 'array');

        expect(result).toEqual({
            ok: false,
            field: 'array',
            message: 'Value must be an async iterable',
        });
    });

    it('returns error for objects without Symbol.asyncIterator', () => {
        const result = validateAsyncIterable({ a: 1 }, 'object');

        expect(result.ok).toBe(false);
    });

    it('returns error when Symbol.asyncIterator exists but is not callable', () => {
        const value = {
            [Symbol.asyncIterator]: true,
        };

        const result = validateAsyncIterable(value, 'broken');

        expect(result.ok).toBe(false);
    });

    it('does not throw for any input', () => {
        expect(() => validateAsyncIterable(123, 'num')).not.toThrow();
        expect(() => validateAsyncIterable('abc', 'str')).not.toThrow();
        expect(() => validateAsyncIterable({}, 'obj')).not.toThrow();
    });
});
