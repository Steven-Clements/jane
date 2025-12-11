# Overview

Collection type guards help you confirm whether a value is an instance of a specific built‑in collection type. They return simple booleans, never throw, and never mutate input.

- [isMap](is-map.md): Checks whether a value is a `Map` instance.
- [isSet](is-set.md): Checks whether a value is a `Set` instance.
- [isTypedArray](is-typed-array.md): Checks whether a value is any typed array (`Uint8Array`, `Float32Array`, etc.).
- [isWeakMap](is-weak-map.md): Checks whether a value is a `WeakMap` instance.
- [isWeakSet](is-weak-set.md): Checks whether a value is a `WeakSet` instance.

Each helper is pure, predictable, and safe to use in branching logic or before normalization.
