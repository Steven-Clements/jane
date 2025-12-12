import { describe, test, expect } from 'vitest';
import validateObject from '../../../src/validators/structural/validateObject';

describe('validateObject', () => {
    const field = 'testField';

    test('returns ok:true for non-null objects', () => {
        const obj = { a: 1 };
        expect(validateObject(obj, field)).toEqual({ ok: true, value: obj });

        const emptyObj = {};
        expect(validateObject(emptyObj, field)).toEqual({ ok: true, value: emptyObj });
    });

    test('fails for null', () => {
        expect(validateObject(null, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be an object',
        });
    });

    test('fails for arrays', () => {
        expect(validateObject([], field)).toEqual({
            ok: false,
            field,
            message: 'Value must be an object',
        });
    });

    test('fails for functions', () => {
        expect(validateObject(() => {}, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be an object',
        });
    });

    test('fails for primitives', () => {
        expect(validateObject(123, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be an object',
        });

        expect(validateObject('abc', field)).toEqual({
            ok: false,
            field,
            message: 'Value must be an object',
        });

        expect(validateObject(true, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be an object',
        });

        expect(validateObject(undefined, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be an object',
        });

        expect(validateObject(Symbol('x'), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be an object',
        });
    });

    test('passes for any non-null object, including Map, Set, Date', () => {
        const map = new Map();
        const set = new Set();
        const date = new Date();

        expect(validateObject(map, field)).toEqual({ ok: true, value: map });
        expect(validateObject(set, field)).toEqual({ ok: true, value: set });
        expect(validateObject(date, field)).toEqual({ ok: true, value: date });
    });
});
