import { describe, it, expect } from 'vitest';
import validateDate from '../../../src/validators/semantic/validateDate';

describe('validateDate', () => {
    it('returns ok:true for a valid Date instance', () => {
        const date = new Date('2025-12-12T00:00:00Z');
        const result = validateDate(date, 'date');

        expect(result).toEqual({ ok: true, value: date });
    });

    it('returns error for invalid Date instances', () => {
        const invalid = new Date('invalid');
        const result = validateDate(invalid, 'date');

        expect(result).toEqual({
            ok: false,
            field: 'date',
            message: 'Value must be a valid Date',
        });
    });

    it('returns error for non-Date values', () => {
        expect(validateDate('2025-12-12', 'date').ok).toBe(false);
        expect(validateDate(1234567890, 'date').ok).toBe(false);
        expect(validateDate({}, 'date').ok).toBe(false);
        expect(validateDate(null, 'date').ok).toBe(false);
        expect(validateDate(undefined, 'date').ok).toBe(false);
        expect(validateDate([], 'date').ok).toBe(false);
        expect(validateDate(true, 'date').ok).toBe(false);
    });

    it('never throws for any input', () => {
        expect(() => validateDate(Symbol('s'), 'date')).not.toThrow();
    });
});
