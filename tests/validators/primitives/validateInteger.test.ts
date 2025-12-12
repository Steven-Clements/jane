import { describe, it, expect } from 'vitest';
import validateInteger from '../../../src/validators/primitives/validateInteger.js';

describe('validateInteger', () => {
    it('returns ok for finite integers', () => {
        expect(validateInteger(0, 'zero')).toEqual({ ok: true, value: 0 });
        expect(validateInteger(123, 'positive')).toEqual({ ok: true, value: 123 });
        expect(validateInteger(-456, 'negative')).toEqual({ ok: true, value: -456 });
    });

    it('returns error for non-integer numbers', () => {
        expect(validateInteger(1.23, 'float')).toEqual({
            ok: false,
            field: 'float',
            message: 'Value must be an integer',
        });
        expect(validateInteger(-4.56, 'negFloat')).toEqual({
            ok: false,
            field: 'negFloat',
            message: 'Value must be an integer',
        });
        expect(validateInteger(NaN, 'nan')).toEqual({
            ok: false,
            field: 'nan',
            message: 'Value must be an integer',
        });
        expect(validateInteger(Infinity, 'inf')).toEqual({
            ok: false,
            field: 'inf',
            message: 'Value must be an integer',
        });
        expect(validateInteger(-Infinity, 'negInf')).toEqual({
            ok: false,
            field: 'negInf',
            message: 'Value must be an integer',
        });
    });

    it('returns error for non-number values', () => {
        expect(validateInteger('123', 'string')).toEqual({
            ok: false,
            field: 'string',
            message: 'Value must be an integer',
        });
        expect(validateInteger(true, 'bool')).toEqual({
            ok: false,
            field: 'bool',
            message: 'Value must be an integer',
        });
        expect(validateInteger(null, 'null')).toEqual({
            ok: false,
            field: 'null',
            message: 'Value must be an integer',
        });
        expect(validateInteger(undefined, 'undef')).toEqual({
            ok: false,
            field: 'undef',
            message: 'Value must be an integer',
        });
        expect(validateInteger({}, 'obj')).toEqual({
            ok: false,
            field: 'obj',
            message: 'Value must be an integer',
        });
        expect(validateInteger([], 'arr')).toEqual({
            ok: false,
            field: 'arr',
            message: 'Value must be an integer',
        });
    });
});
