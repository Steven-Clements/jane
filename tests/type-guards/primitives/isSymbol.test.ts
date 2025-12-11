import { describe, it, expect } from 'vitest';
import isSymbol from '../../../src/type-guards/primitives/isSymbol.js';

describe('isSymbol', () => {
    it('returns true for symbol primitives', () => {
        expect(isSymbol(Symbol())).toBe(true);
        expect(isSymbol(Symbol('id'))).toBe(true);
        expect(isSymbol(Symbol.iterator)).toBe(true);
    });

    it('returns false for Symbol objects', () => {
        // Symbol objects are created via Object(Symbol())
        expect(isSymbol(Object(Symbol()))).toBe(false);
        expect(isSymbol(new Object(Symbol()))).toBe(false);
    });

    it('returns false for non-symbol types', () => {
        expect(isSymbol(123)).toBe(false);
        expect(isSymbol('abc')).toBe(false);
        expect(isSymbol(true)).toBe(false);
        expect(isSymbol(null)).toBe(false);
        expect(isSymbol(undefined)).toBe(false);
        expect(isSymbol({})).toBe(false);
        expect(isSymbol([])).toBe(false);
        expect(isSymbol(() => {})).toBe(false);
    });
});
