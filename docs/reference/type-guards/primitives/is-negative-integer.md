isNegativeInteger
Checks whether a value is a negative integer.
This helper never throws and never mutates input. Returns true only if the value is a finite number primitive, has no fractional component, and is strictly less than zero.
Strings, objects, arrays, booleans, boxed numbers, fractional values, and non‑finite numbers are rejected.
Signature
function isNegativeInteger(value: unknown): value is number


Parameters
|  |  |  | 
|  | unknown | 0 | 


Returns true if the value is a negative integer, otherwise false.
Examples
isNegativeInteger(-1);        // → true
isNegativeInteger(-42);       // → true
isNegativeInteger(-1.5);      // → false
isNegativeInteger(0);         // → false
isNegativeInteger(7);         // → false
isNegativeInteger("5");       // → false
isNegativeInteger(NaN);       // → false
isNegativeInteger(-Infinity); // → false


Notes
- Zero is not considered negative.
- Fractional values are rejected; the value must be an integer.
- Only number primitives are accepted; boxed numbers (new Number(-3)) are rejected.
- Never throws. Always returns a boolean.
- Use validateNegativeInteger if you need a structured ValidationResult with error details.
