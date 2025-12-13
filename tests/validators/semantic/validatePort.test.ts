import { describe, it, expect } from 'vitest';
import validatePort from '../../../src/validators/semantic/validatePort';

describe('validatePort', () => {
    it('returns ok:true for port 0', () => {
        const result = validatePort(0, 'port');

        expect(result).toEqual({
            ok: true,
            value: 0,
        });
    });

    it('returns ok:true for a common port', () => {
        const result = validatePort(80, 'port');

        expect(result.ok).toBe(true);
    });

    it('returns ok:true for the maximum valid port', () => {
        const result = validatePort(65535, 'port');

        expect(result.ok).toBe(true);
    });

    it('returns error for negative numbers', () => {
        expect(validatePort(-1, 'port').ok).toBe(false);
        expect(validatePort(-100, 'port').ok).toBe(false);
    });

    it('returns error for numbers greater than 65535', () => {
        expect(validatePort(65536, 'port').ok).toBe(false);
        expect(validatePort(100000, 'port').ok).toBe(false);
    });

    it('returns error for fractional numbers', () => {
        expect(validatePort(3.14, 'port').ok).toBe(false);
    });

    it('returns error for NaN and Infinity', () => {
        expect(validatePort(NaN, 'port').ok).toBe(false);
        expect(validatePort(Infinity, 'port').ok).toBe(false);
        expect(validatePort(-Infinity, 'port').ok).toBe(false);
    });

    it('returns error for non-number values', () => {
        expect(validatePort('80', 'port').ok).toBe(false);
        expect(validatePort(new Number(80), 'port').ok).toBe(false);
        expect(validatePort(true, 'port').ok).toBe(false);
        expect(validatePort(null, 'port').ok).toBe(false);
        expect(validatePort(undefined, 'port').ok).toBe(false);
        expect(validatePort({}, 'port').ok).toBe(false);
        expect(validatePort([], 'port').ok).toBe(false);
    });

    it('never throws for any input', () => {
        expect(() => validatePort(Symbol('s'), 'port')).not.toThrow();
    });
});
