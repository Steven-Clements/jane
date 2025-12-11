import { describe, expect, test } from 'vitest';
import isPort from '../../../src/type-guards/semantic/isPort.js';

describe('isPort', () => {
    describe('valid ports', () => {
        test('accepts 0', () => {
            expect(isPort(0)).toBe(true);
        });

        test('accepts 65535', () => {
            expect(isPort(65535)).toBe(true);
        });

        test('accepts typical ports', () => {
            expect(isPort(80)).toBe(true);
            expect(isPort(443)).toBe(true);
            expect(isPort(3000)).toBe(true);
        });
    });

    describe('invalid numbers', () => {
        test('rejects negative numbers', () => {
            expect(isPort(-1)).toBe(false);
        });

        test('rejects numbers above 65535', () => {
            expect(isPort(65536)).toBe(false);
        });

        test('rejects non-integers', () => {
            expect(isPort(3.14)).toBe(false);
            expect(isPort(NaN)).toBe(false);
            expect(isPort(Infinity)).toBe(false);
        });
    });

    describe('invalid types', () => {
        test('rejects strings', () => {
            expect(isPort('3000')).toBe(false);
            expect(isPort('80')).toBe(false);
        });

        test('rejects objects', () => {
            expect(isPort({})).toBe(false);
            expect(isPort({ port: 80 })).toBe(false);
        });

        test('rejects arrays', () => {
            expect(isPort([])).toBe(false);
            expect(isPort([80])).toBe(false);
        });

        test('rejects booleans', () => {
            expect(isPort(true)).toBe(false);
            expect(isPort(false)).toBe(false);
        });

        test('rejects null and undefined', () => {
            expect(isPort(null)).toBe(false);
            expect(isPort(undefined)).toBe(false);
        });
    });
});
