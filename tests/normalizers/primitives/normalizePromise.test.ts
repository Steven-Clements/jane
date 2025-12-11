import { describe, it, expect } from 'vitest';
import normalizePromise from '../../../src/normalizers/primitives/normalizePromise.js';

describe('normalizePromise', () => {
    it('returns real promises unchanged', () => {
        const p = Promise.resolve(1);
        expect(normalizePromise(p)).toBe(p);
    });

    it('wraps thenable objects that resolve synchronously', async () => {
        const thenable = {
            then(resolve: (v: number) => void) {
                resolve(42);
            },
        };

        const result = normalizePromise<number>(thenable);
        expect(result).not.toBeNull();
        expect(await result!).toBe(42);
    });

    it('wraps thenable objects that resolve asynchronously', async () => {
        const thenable = {
            then(resolve: (v: number) => void) {
                setTimeout(() => resolve(99), 0);
            },
        };

        const result = normalizePromise<number>(thenable);
        expect(result).not.toBeNull();
        expect(await result!).toBe(99);
    });

    it('returns null for thenables that throw synchronously', () => {
        const badThenable = {
            then() {
                throw new Error('failure');
            },
        };

        expect(normalizePromise(badThenable)).toBeNull();
    });

    it('returns null for thenables that reject synchronously', () => {
        const syncReject = {
            then(_resolve: (v: number) => void, reject: (e: unknown) => void) {
                reject('nope');
            },
        };

        expect(normalizePromise(syncReject)).toBeNull();
    });

    it('wraps thenables that reject asynchronously', async () => {
        const asyncReject = {
            then(_resolve: (v: number) => void, reject: (e: unknown) => void) {
                setTimeout(() => reject('fail'), 0);
            },
        };

        const result = normalizePromise(asyncReject);
        expect(result).not.toBeNull();
        await expect(result!).rejects.toBe('fail');
    });

    it('returns null for objects with non‑callable then', () => {
        const badThen = { then: 123 };
        expect(normalizePromise(badThen)).toBeNull();
    });

    it('returns null for non‑promise values', () => {
        expect(normalizePromise(null)).toBeNull();
        expect(normalizePromise(undefined)).toBeNull();
        expect(normalizePromise(123)).toBeNull();
        expect(normalizePromise('abc')).toBeNull();
        expect(normalizePromise({})).toBeNull();
        expect(normalizePromise([])).toBeNull();
        expect(normalizePromise(true)).toBeNull();
    });
});
