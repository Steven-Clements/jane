normalizeNonNegativeNumber
Normalizes a value into a non‑negative number.
This helper never mutates input. It returns a finite number primitive that is greater than or equal to zero, or throws a TypeError when normalization is not possible.
Strings, objects, arrays, booleans, boxed numbers, NaN, and non‑finite values are rejected. Fractional values are allowed as long as they are non‑negative.
Signature
function normalizeNonNegativeNumber(value: unknown): number


Parameters
|  |  |  | 
|  | unknown | 0 | 


Returns the normalized non‑negative number, or throws a TypeError if the value cannot be normalized.
Examples
normalizeNonNegativeNumber(0);        // → 0
normalizeNonNegativeNumber(3);        // → 3
normalizeNonNegativeNumber(2.5);      // → 2.5

normalizeNonNegativeNumber(-1);       // ❌ throws TypeError
normalizeNonNegativeNumber("5");      // ❌ throws TypeError
normalizeNonNegativeNumber(NaN);      // ❌ throws TypeError
normalizeNonNegativeNumber(Infinity); // ❌ throws TypeError


Notes
- Zero is considered valid and is returned unchanged.
- Fractional values are allowed as long as they are non‑negative.
- Only number primitives are accepted; boxed numbers (new Number(5)) are rejected.
- Throws a TypeError when normalization fails.
- Use isNonNegativeNumber if you only need a boolean check without throwing.
- Use validateNonNegativeNumber if you need a structured ValidationResult instead of exceptions.
