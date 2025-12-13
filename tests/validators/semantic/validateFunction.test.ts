import { describe, it, expect } from 'vitest';
import validateFunction from '../../../src/validators/semantic/validateFunction';

describe('validateFunction', () => {
    it('returns ok:true for arrow functions', () => {
        const fn = () => 42;
        const result = validateFunction(fn, 'fn');

        expect(result).toEqual({ ok: true, value: fn });
    });

    it('returns ok:true for traditional functions', () => {
        function fn() {
            return 'hello';
        }
        const result = validateFunction(fn, 'fn');

        expect(result).toEqual({ ok: true, value: fn });
    });

    it('returns ok:true for class constructors', () => {
        class MyClass {}
        const result = validateFunction(MyClass, 'fn');

        expect(result).toEqual({ ok: true, value: MyClass });
    });

    it('returns error for non-function values', () => {
        expect(validateFunction(123, 'fn').ok).toBe(false);
        expect(validateFunction('fn', 'fn').ok).toBe(false);
        expect(validateFunction({}, 'fn').ok).toBe(false);
        expect(validateFunction([], 'fn').ok).toBe(false);
        expect(validateFunction(null, 'fn').ok).toBe(false);
        expect(validateFunction(undefined, 'fn').ok).toBe(false);
        expect(validateFunction(true, 'fn').ok).toBe(false);
        expect(validateFunction(Symbol('s'), 'fn').ok).toBe(false);
    });

    it('never throws for any input', () => {
        expect(() => validateFunction(Symbol('s'), 'fn')).not.toThrow();
    });
});
