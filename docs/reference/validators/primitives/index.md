# Overview

Primitive validators ensure that a value is one of JavaScript’s built‑in primitive types and meets specific criteria. They return simple booleans, never throw, and never mutate input.

- [validateBigInteger](validate-big-integer.md): Validates whether a value is a `bigint` primitive.
- [validateBoolean](validate-boolean.md): Validates whether a value is a boolean.
- [validateFiniteNumber](validate-finite-number.md): Validates whether a value is a finite number.
- [validateInteger](validate-integer.md): Validates whether a value is an integer.
- [validateNegativeInteger](validate-negative-integer.md): Validates whether a value is a negative integer.
- [validateNegativeNumber](validate-negative-number.md): Validates whether a value is a negative number.
- [validateNonEmptyString](validate-non-empty-string.md): Validates whether a value is a non‑empty string.
- [validateNonNegativeInteger](validate-non-negative-integer.md): Validates whether a value is a non‑negative integer (zero or positive).
- [validateNonNegativeNumber](validate-non-negative-number.md): Validates whether a value is a non‑negative number (zero or positive).
- [validateNull](validate-null.md): Validates whether a value is `null`.
- [validateNumber](validate-number.md): Validates whether a value is a number.
- [validatePositiveInteger](validate-positive-integer.md): Validates whether a value is a positive integer.
- [validatePositiveNumber](validate-positive-number.md): Validates whether a value is a positive number.
- [validateSafeInteger](validate-safe-integer.md): Validates whether a value is a safe integer (between `$-(2^{53} - 1)$` and `$2^{53} - 1$`).
- [validateString](validate-string.md): Validates whether a value is a string.
- [validateSymbol](validate-symbol.md): Validates whether a value is a symbol.
- [validateUndefined](validate-undefined.md): Validates whether a value is `undefined`.

All primitive validators are pure, predictable, and safe to use before complex data processing or transformation.
