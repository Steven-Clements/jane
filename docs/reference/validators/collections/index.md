# Overview

Collection validators verify that iterable structures, such as arrays, sets, and maps, meet specific size constraints, and ensure that their elements or entries conform to consistent type constraints. They return a structured `ValidationResult<T>`, never throw exceptions, and never mutate the input collection.

- [validateMap](./validate-map.md): Ensures a value is a `Map` instance (including wrapper objects and subclasses). Useful for validating key–value collections before applying entry‑level checks.
- [validateSet](./validate-set.md): Ensures a value is a `Set` instance. Ideal for validating unordered collections of unique values prior to element‑level validation.
- [validateTypedArray](./validate-typed-array.md): - Ensures a value is one of the built‑in TypedArray variants (including `Int8Array`, `Float32Array`, `BigUint64Array`, and so on). Useful for validating binary buffers and numeric arrays.
- [validateWeakMap](./validate-weak-map.md): Ensures a value is a `WeakMap` instance. Suitable for validating object‑keyed mappings used in caches, memoization layers, and ephemeral associations.
- [validateWeakSet](./validate-weak-set.md): Ensures a value is a `WeakSet` instance. Useful for validating object‑keyed membership sets that rely on weak references.

All collection validators are pure, predictable, and designed to perform fast checks on the integrity and size of data structures.
