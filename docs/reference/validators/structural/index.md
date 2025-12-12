# Overview

Structural validators check whether an object, record, or tuple conforms to a specific shape, ensuring all required properties exist and meet their type constraints. They return a structured `ValidationResult<T>`, never throw exceptions, and never mutate the input object.

- [validateArray](./validate-array.md): Ensures a value is an array (Array.isArray), rejecting objects, functions, and primitives.
- [validateNonEmptyArray](./validate-non-empty-array.md): Ensures a value is an array with at least one element, rejecting empty arrays and non-arrays.
- [validateObject](./validate-object.md): Ensures a value is a non‑null object, accepting all object types except arrays and functions.
- [validatePlainObject](./validate-plain-object.md): Ensures a value is a plain object whose prototype is exactly `Object.prototype`.
- [validateRecord](./validate-record.md): Ensures a value is a non‑null, non‑array object whose own keys are strings, regardless of prototype.
- [validateTuple](./validate-tuple.md): Ensures a value is an array of fixed length where each element satisfies a corresponding guard.

All structural validators are pure, predictable, and designed to compose efficiently, allowing you to validate complex nested data schemas without boilerplate.
