# Overview

Structural type guards check whether a value has a particular object shape. These helpers validate structure rather than primitive type, returning simple booleans with no side effects.

- [isArray](is-array.md): Checks whether a value is an array.
- [isNonEmptyArray](is-non-empty-array.md): Checks whether a value is a non‑empty array.
- [isObject](is-object.md): Checks whether a value is a non‑null object.
- [isPlainObject](is-plain-object.md): Checks whether a value is a plain object with `Object.prototype`.
- [isRecord](is-record.md): Checks whether a value is a record‑like object (non‑null, non‑array).
- [isTuple](is-tuple.md): Checks whether a value is a tuple of a specific length.

All structural guards are pure, predictable, and safe to use before normalization or validation.
