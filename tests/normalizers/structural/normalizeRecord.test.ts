import { describe, it, expect } from 'vitest';
import normalizeRecord from '../../../src/normalizers/structural/normalizeRecord.js';

const normalizeNumber = (v: unknown): number | null =>
    typeof v === 'number' && Number.isFinite(v) ? v : null;

describe('normalizeRecord', () => {
    it('accepts plain objects and normalizes values', () => {
        const input = { a: 1, b: 2 };
        const result = normalizeRecord(input, normalizeNumber);
        expect(result).toEqual({ a: 1, b: 2 });
    });

    it('accepts null-prototype objects', () => {
        const input = Object.create(null);
        input.x = 5;
        const result = normalizeRecord(input, normalizeNumber);
        expect(result).toEqual({ x: 5 });
    });

    it('rejects non-plain objects', () => {
        expect(normalizeRecord([], normalizeNumber)).toBeNull();
        expect(normalizeRecord(() => {}, normalizeNumber)).toBeNull();
        expect(normalizeRecord(new Map(), normalizeNumber)).toBeNull();
        expect(normalizeRecord(new Date(), normalizeNumber)).toBeNull();
        expect(normalizeRecord(null, normalizeNumber)).toBeNull();
        expect(normalizeRecord(123, normalizeNumber)).toBeNull();
    });

    it('rejects objects with custom prototypes', () => {
        const proto = { x: 1 };
        const obj = Object.create(proto);
        obj.a = 1;
        expect(normalizeRecord(obj, normalizeNumber)).toBeNull();
    });

    it('rejects objects when any value fails normalization', () => {
        const input = { a: 1, b: 'nope' };
        expect(normalizeRecord(input, normalizeNumber)).toBeNull();
    });

    it('does not mutate the input object', () => {
        const input = { a: 1 };
        const result = normalizeRecord(input, normalizeNumber);
        expect(result).not.toBe(input);
        expect(input).toEqual({ a: 1 });
    });

    it('returns an empty object when given an empty plain object', () => {
        expect(normalizeRecord({}, normalizeNumber)).toEqual({});
    });
});
