import { describe, it, expect } from 'vitest';
import validatePositiveInteger from '../../../src/validators/primitives/validatePositiveInteger.js';

describe('validatePositiveInteger', () => {
    it('returns ok for positive integers', () => {
        expect(validatePositiveInteger(1, 'one')).toEqual({ ok: true, value: 1 });
        expect(validatePositiveInteger(123, 'hundredTwentyThree')).toEqual({
            ok: true,
            value: 123,
        });
    });

    it('returns error for zero or negative integers', () => {
        expect(validatePositiveInteger(0, 'zero')).toEqual({
            ok: false,
            field: 'zero',
            message: 'Value must be a positive integer',
        });
        expect(validatePositiveInteger(-1, 'negOne')).toEqual({
            ok: false,
            field: 'negOne',
            message: 'Value must be a positive integer',
        });
    });

    it('returns error for non-integer numbers', () => {
        expect(validatePositiveInteger(1.5, 'float')).toEqual({
            ok: false,
            field: 'float',
            message: 'Value must be a positive integer',
        });
        expect(validatePositiveInteger(-2.7, 'negFloat')).toEqual({
            ok: false,
            field: 'negFloat',
            message: 'Value must be a positive integer',
        });
        expect(validatePositiveInteger(NaN, 'nan')).toEqual({
            ok: false,
            field: 'nan',
            message: 'Value must be a positive integer',
        });
        expect(validatePositiveInteger(Infinity, 'inf')).toEqual({
            ok: false,
            field: 'inf',
            message: 'Value must be a positive integer',
        });
        expect(validatePositiveInteger(-Infinity, 'negInf')).toEqual({
            ok: false,
            field: 'negInf',
            message: 'Value must be a positive integer',
        });
    });

    it('returns error for non-number values', () => {
        expect(validatePositiveInteger('123', 'string')).toEqual({
            ok: false,
            field: 'string',
            message: 'Value must be a positive integer',
        });
        expect(validatePositiveInteger(true, 'bool')).toEqual({
            ok: false,
            field: 'bool',
            message: 'Value must be a positive integer',
        });
        expect(validatePositiveInteger(null, 'null')).toEqual({
            ok: false,
            field: 'null',
            message: 'Value must be a positive integer',
        });
        expect(validatePositiveInteger(undefined, 'undef')).toEqual({
            ok: false,
            field: 'undef',
            message: 'Value must be a positive integer',
        });
        expect(validatePositiveInteger({}, 'obj')).toEqual({
            ok: false,
            field: 'obj',
            message: 'Value must be a positive integer',
        });
        expect(validatePositiveInteger([], 'arr')).toEqual({
            ok: false,
            field: 'arr',
            message: 'Value must be a positive integer',
        });
    });
});
