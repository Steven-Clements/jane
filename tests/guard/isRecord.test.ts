import { describe, it, expect } from 'vitest';
import isRecord from '../../src/guard/isRecord.js';

describe('isRecord', () => {
    it('returns true for plain objects', () => {
        expect(isRecord({})).toBe(true);
        expect(isRecord({ a: 1 })).toBe(true);
    });

    it('returns true for objects with custom prototypes', () => {
        const proto = { x: 1 };
        const obj = Object.create(proto);
        obj.y = 2;
        expect(isRecord(obj)).toBe(true);
    });

    it('returns true for objects with no prototype', () => {
        expect(isRecord(Object.create(null))).toBe(true);
    });

    it('returns true for class instances', () => {
        class X {
            a = 1;
        }
        expect(isRecord(new X())).toBe(true);
    });

    it('returns false for arrays', () => {
        expect(isRecord([])).toBe(false);
        expect(isRecord([1, 2, 3])).toBe(false);
    });

    it('returns false for null', () => {
        expect(isRecord(null)).toBe(false);
    });

    it('returns false for non-objects', () => {
        expect(isRecord(123)).toBe(false);
        expect(isRecord('abc')).toBe(false);
        expect(isRecord(undefined)).toBe(false);
        expect(isRecord(() => {})).toBe(false);
    });
});
