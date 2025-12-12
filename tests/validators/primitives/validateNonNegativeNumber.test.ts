import { describe, it, expect } from 'vitest';
import validateNonNegativeNumber from '../../../src/validators/primitives/validateNonNegativeNumber.js';

describe('validateNonNegativeNumber', () => {
    it('returns ok=true for valid non-negative numbers', () => {
        expect(validateNonNegativeNumber(0, 'num')).toEqual({ ok: true, value: 0 });
        expect(validateNonNegativeNumber(1, 'num')).toEqual({ ok: true, value: 1 });
        expect(validateNonNegativeNumber(3.5, 'num')).toEqual({ ok: true, value: 3.5 });
    });

    it('returns ok=false for negative numbers', () => {
        expect(validateNonNegativeNumber(-1, 'num')).toEqual({
            ok: false,
            field: 'num',
            message: 'Expected a non-negative number.',
        });
        expect(validateNonNegativeNumber(-0.5, 'num')).toEqual({
            ok: false,
            field: 'num',
            message: 'Expected a non-negative number.',
        });
    });

    it('returns ok=false for NaN and Infinity values', () => {
        expect(validateNonNegativeNumber(NaN, 'num')).toEqual({
            ok: false,
            field: 'num',
            message: 'Expected a non-negative number.',
        });

        expect(validateNonNegativeNumber(Infinity, 'num')).toEqual({
            ok: false,
            field: 'num',
            message: 'Expected a non-negative number.',
        });

        expect(validateNonNegativeNumber(-Infinity, 'num')).toEqual({
            ok: false,
            field: 'num',
            message: 'Expected a non-negative number.',
        });
    });

    it('returns ok=false for non-number types', () => {
        const cases: unknown[] = [
            '0',
            '5',
            '',
            true,
            false,
            null,
            undefined,
            {},
            [],
            () => {},
            new Number(5),
        ];

        for (const value of cases) {
            expect(validateNonNegativeNumber(value, 'num')).toEqual({
                ok: false,
                field: 'num',
                message: 'Expected a non-negative number.',
            });
        }
    });
});
