import { describe, it, expect } from 'vitest';
import isTypedArray from '../../../src/type-guards/collections/isTypedArray.js';

describe('isTypedArray', () => {
    it('returns true for any TypedArray', () => {
        expect(isTypedArray(new Uint8Array())).toBe(true);
        expect(isTypedArray(new Float32Array())).toBe(true);
        expect(isTypedArray(new BigInt64Array())).toBe(true);
    });

    it('returns true for TypedArray wrapper objects', () => {
        expect(isTypedArray(Object(new Uint8Array()))).toBe(true);
    });

    it('returns true for TypedArray subclasses', () => {
        class MyTA extends Uint8Array {}
        expect(isTypedArray(new MyTA())).toBe(true);
    });

    it('returns false for DataView', () => {
        expect(isTypedArray(new DataView(new ArrayBuffer(8)))).toBe(false);
    });

    it('returns false for non-TypedArray objects', () => {
        expect(isTypedArray([])).toBe(false);
        expect(isTypedArray({})).toBe(false);
        expect(isTypedArray(new Map())).toBe(false);
        expect(isTypedArray(new Set())).toBe(false);
    });

    it('returns false for non-object types', () => {
        expect(isTypedArray(null)).toBe(false);
        expect(isTypedArray(undefined)).toBe(false);
        expect(isTypedArray(123)).toBe(false);
        expect(isTypedArray('abc')).toBe(false);
        expect(isTypedArray(true)).toBe(false);
        expect(isTypedArray(() => {})).toBe(false);
        expect(isTypedArray(Symbol())).toBe(false);
        expect(isTypedArray(1n)).toBe(false);
    });

    it('enforces expected TypedArray type when provided', () => {
        expect(isTypedArray(new Uint8Array(), Uint8Array)).toBe(true);
        expect(isTypedArray(new Float32Array(), Float32Array)).toBe(true);

        expect(isTypedArray(new Uint8Array(), Float32Array)).toBe(false);
        expect(isTypedArray(new Float32Array(), Uint8Array)).toBe(false);
    });
});
