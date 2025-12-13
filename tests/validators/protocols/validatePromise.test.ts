import { describe, it, expect } from 'vitest';
import validatePromise from '../../../src/validators/protocols/validatePromise';

describe('validatePromise', () => {
    it('returns ok:true for a resolved Promise', async () => {
        const promise = Promise.resolve(42);

        const result = validatePromise<number>(promise, 'value');

        expect(result).toEqual({
            ok: true,
            value: promise,
        });

        if (result.ok) {
            await expect(result.value).resolves.toBe(42);
        }
    });

    it('returns ok:true for a rejected Promise', async () => {
        const promise = Promise.reject(new Error('fail'));

        const result = validatePromise(promise, 'value');

        expect(result.ok).toBe(true);

        if (result.ok) {
            await expect(result.value).rejects.toThrow('fail');
        }
    });

    it('returns ok:true for a Promise subclass', () => {
        class CustomPromise<T> extends Promise<T> {}

        const promise = new CustomPromise<number>((resolve) => resolve(1));

        const result = validatePromise<number>(promise, 'custom');

        expect(result.ok).toBe(true);
    });

    it('returns error for a thenable object', () => {
        const thenable = {
            then: () => {},
        };

        const result = validatePromise(thenable, 'thenable');

        expect(result).toEqual({
            ok: false,
            field: 'thenable',
            message: 'Value must be a Promise',
        });
    });

    it('returns error for async functions (not invoked)', () => {
        async function fn() {
            return 1;
        }

        const result = validatePromise(fn, 'fn');

        expect(result.ok).toBe(false);
    });

    it('returns error for non-Promise values', () => {
        expect(validatePromise(123, 'num').ok).toBe(false);
        expect(validatePromise('str', 'str').ok).toBe(false);
        expect(validatePromise({}, 'obj').ok).toBe(false);
        expect(validatePromise([], 'arr').ok).toBe(false);
    });

    it('returns error for null and undefined', () => {
        expect(validatePromise(null, 'null').ok).toBe(false);
        expect(validatePromise(undefined, 'undef').ok).toBe(false);
    });

    it('never throws for any input', () => {
        expect(() => validatePromise(Promise.resolve(), 'p')).not.toThrow();
        expect(() => validatePromise({ then: 1 }, 'x')).not.toThrow();
        expect(() => validatePromise(Symbol('s'), 's')).not.toThrow();
    });
});
