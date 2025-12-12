import { describe, it, expect } from 'vitest';
import validateNumber from '../../../src/validators/primitives/validateNumber.js';

describe('validateNumber', () => {
    it('returns ok for primitive numbers', () => {
        expect(validateNumber(0, 'zero')).toEqual({ ok: true, value: 0 });
        expect(validateNumber(123, 'positive')).toEqual({ ok: true, value: 123 });
        expect(validateNumber(-456, 'negative')).toEqual({ ok: true, value: -456 });
        expect(validateNumber(NaN, 'nan')).toEqual({ ok: true, value: NaN });
        expect(validateNumber(Infinity, 'inf')).toEqual({ ok: true, value: Infinity });
        expect(validateNumber(-Infinity, 'negInf')).toEqual({ ok: true, value: -Infinity });
    });

    it('returns error for non-number values', () => {
        expect(validateNumber('123', 'string')).toEqual({
            ok: false,
            field: 'string',
            message: 'Value must be a number',
        });
        expect(validateNumber(true, 'bool')).toEqual({
            ok: false,
            field: 'bool',
            message: 'Value must be a number',
        });
        expect(validateNumber(null, 'null')).toEqual({
            ok: false,
            field: 'null',
            message: 'Value must be a number',
        });
        expect(validateNumber(undefined, 'undef')).toEqual({
            ok: false,
            field: 'undef',
            message: 'Value must be a number',
        });
        expect(validateNumber({}, 'obj')).toEqual({
            ok: false,
            field: 'obj',
            message: 'Value must be a number',
        });
        expect(validateNumber([], 'arr')).toEqual({
            ok: false,
            field: 'arr',
            message: 'Value must be a number',
        });
        expect(validateNumber(Symbol('s'), 'sym')).toEqual({
            ok: false,
            field: 'sym',
            message: 'Value must be a number',
        });
        expect(validateNumber(new Number(123), 'boxed')).toEqual({
            ok: false,
            field: 'boxed',
            message: 'Value must be a number',
        });
    });
});
