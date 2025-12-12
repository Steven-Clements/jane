import { describe, test, expect } from 'vitest';
import validatePlainObject from '../../../src/validators/structural/validatePlainObject';

describe('validatePlainObject', () => {
    const field = 'testField';

    test('returns ok:true for plain objects', () => {
        const obj = { a: 1 };
        expect(validatePlainObject(obj, field)).toEqual({ ok: true, value: obj });

        const emptyObj = {};
        expect(validatePlainObject(emptyObj, field)).toEqual({
            ok: true,
            value: emptyObj,
        });

        const viaConstructor = new Object();
        expect(validatePlainObject(viaConstructor, field)).toEqual({
            ok: true,
            value: viaConstructor,
        });
    });

    test('fails for null', () => {
        expect(validatePlainObject(null, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a plain object',
        });
    });

    test('fails for arrays', () => {
        expect(validatePlainObject([], field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a plain object',
        });
    });

    test('fails for Object.create(null)', () => {
        const nullProto = Object.create(null);
        expect(validatePlainObject(nullProto, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a plain object',
        });
    });

    test('fails for built-in objects like Map, Set, Date, RegExp', () => {
        expect(validatePlainObject(new Map(), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a plain object',
        });

        expect(validatePlainObject(new Set(), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a plain object',
        });

        expect(validatePlainObject(new Date(), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a plain object',
        });

        expect(validatePlainObject(/abc/, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a plain object',
        });
    });

    test('fails for class instances', () => {
        class Foo {}
        expect(validatePlainObject(new Foo(), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a plain object',
        });
    });

    test('fails for primitives', () => {
        expect(validatePlainObject(123, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a plain object',
        });

        expect(validatePlainObject('abc', field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a plain object',
        });

        expect(validatePlainObject(true, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a plain object',
        });

        expect(validatePlainObject(undefined, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a plain object',
        });

        expect(validatePlainObject(Symbol('x'), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a plain object',
        });
    });
});
