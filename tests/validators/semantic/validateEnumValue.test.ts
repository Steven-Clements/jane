import { describe, it, expect } from 'vitest';
import validateEnumValue from '../../../src/validators/semantic/validateEnumValue';

describe('validateEnumValue', () => {
    enum Color {
        Red = 'red',
        Blue = 'blue',
    }

    enum Status {
        Active = 1,
        Disabled = 2,
    }

    it('returns ok:true for valid string enum values', () => {
        const result = validateEnumValue(Color, 'red', 'color');

        expect(result).toEqual({
            ok: true,
            value: 'red',
        });
    });

    it('returns ok:true for valid numeric enum values', () => {
        const result = validateEnumValue(Status, 1, 'status');

        expect(result).toEqual({
            ok: true,
            value: 1,
        });
    });

    it('accepts reverse-mapped enum keys for numeric enums', () => {
        const result = validateEnumValue(Status, 'Active', 'status');

        expect(result).toEqual({
            ok: true,
            value: 'Active',
        });
    });

    it('returns error for values not in the enum', () => {
        const result = validateEnumValue(Color, 'green', 'color');

        expect(result).toEqual({
            ok: false,
            field: 'color',
            message: 'Value must be a valid enum value',
        });
    });

    it('returns error for wrong primitive types', () => {
        expect(validateEnumValue(Color, 123, 'color').ok).toBe(false);
        expect(validateEnumValue(Status, '1', 'status').ok).toBe(false);
    });

    it('returns error for null and undefined', () => {
        expect(validateEnumValue(Color, null, 'color').ok).toBe(false);
        expect(validateEnumValue(Color, undefined, 'color').ok).toBe(false);
    });

    it('never throws for any input', () => {
        expect(() => validateEnumValue(Color, Symbol('s'), 'color')).not.toThrow();
    });
});
