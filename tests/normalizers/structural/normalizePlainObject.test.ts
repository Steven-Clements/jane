import { describe, it, expect } from 'vitest';
import normalizePlainObject from '../../../src/normalizers/structural/normalizePlainObject';

describe('normalizePlainObject', () => {
    it('accepts plain objects', () => {
        const obj = { a: 1 };
        expect(normalizePlainObject(obj)).toBe(obj);
    });

    it('accepts objects created with null prototype', () => {
        const obj = Object.create(null);
        obj.x = 1;
        expect(normalizePlainObject(obj)).toBe(obj);
    });

    it('rejects arrays', () => {
        expect(normalizePlainObject([])).toBeNull();
    });

    it('rejects functions', () => {
        expect(normalizePlainObject(() => {})).toBeNull();
    });

    it('rejects class instances', () => {
        class Foo {}
        expect(normalizePlainObject(new Foo())).toBeNull();
    });

    it('rejects Maps, Sets, Dates, RegExps, Errors', () => {
        expect(normalizePlainObject(new Map())).toBeNull();
        expect(normalizePlainObject(new Set())).toBeNull();
        expect(normalizePlainObject(new Date())).toBeNull();
        expect(normalizePlainObject(/abc/)).toBeNull();
        expect(normalizePlainObject(new Error('x'))).toBeNull();
    });

    it('rejects objects with custom prototypes', () => {
        const proto = { x: 1 };
        const obj = Object.create(proto);
        expect(normalizePlainObject(obj)).toBeNull();
    });

    it('rejects objects whose prototype getter throws', () => {
        const hostileProto = {};
        Object.defineProperty(hostileProto, 'x', {
            get() {
                throw new Error('nope');
            },
        });

        const obj = Object.create(hostileProto);

        expect(normalizePlainObject(obj)).toBeNull();
    });

    it('accepts objects created with a null prototype', () => {
        const obj = Object.create(null);
        expect(Reflect.getPrototypeOf(obj)).toBeNull(); // sanity check
        expect(normalizePlainObject(obj)).toBe(obj);
    });

    it('rejects non-object values', () => {
        expect(normalizePlainObject(null)).toBeNull();
        expect(normalizePlainObject(undefined)).toBeNull();
        expect(normalizePlainObject(123)).toBeNull();
        expect(normalizePlainObject('abc')).toBeNull();
        expect(normalizePlainObject(true)).toBeNull();
    });
});
