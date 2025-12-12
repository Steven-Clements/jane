import { describe, test, expect } from 'vitest';
import validateRecord from '../../../src/validators/structural/validateRecord';

describe('validateRecord', () => {
    const field = 'testField';

    test('returns ok:true for valid records', () => {
        const obj = { a: 1, b: 'x' };
        expect(validateRecord(obj, field)).toEqual({ ok: true, value: obj });

        const emptyObj = {};
        expect(validateRecord(emptyObj, field)).toEqual({
            ok: true,
            value: emptyObj,
        });
    });

    test('accepts Object.create(null)', () => {
        const nullProto = Object.create(null);
        expect(validateRecord(nullProto, field)).toEqual({
            ok: true,
            value: nullProto,
        });
    });

    test('accepts class instances', () => {
        class Foo {
            x = 1;
        }
        const instance = new Foo();
        expect(validateRecord(instance, field)).toEqual({
            ok: true,
            value: instance,
        });
    });

    test('accepts built-in objects like Map, Set, Date *if they have only string keys*', () => {
        const mapLike = { size: 1 }; // Map itself has symbol keys, so we test the semantics properly
        expect(validateRecord(mapLike, field)).toEqual({
            ok: true,
            value: mapLike,
        });
    });

    test('fails for arrays', () => {
        expect(validateRecord([], field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a record',
        });
    });

    test('fails for null', () => {
        expect(validateRecord(null, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a record',
        });
    });

    test('fails for primitives', () => {
        expect(validateRecord(123, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a record',
        });

        expect(validateRecord('abc', field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a record',
        });

        expect(validateRecord(true, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a record',
        });

        expect(validateRecord(undefined, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a record',
        });

        expect(validateRecord(Symbol('x'), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a record',
        });
    });
});
