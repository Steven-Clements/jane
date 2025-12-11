# Overview

Semantic type guards check whether a value represents a specific meaningful concept in JavaScript: such as dates, errors, timestamps, or JSON‑compatible data. These helpers validate semantics rather than primitive type or structure, returning simple booleans with no side effects.

- [isDate](is-date.md): Checks whether a value is a `Date` instance.
- [isEnumValue](is-enum-value.md): Checks whether a value is a valid member of a TypeScript enum.
- [isError](is-error.md): Checks whether a value is an `Error` instance.
- [isFunction](is-function.md): Checks whether a value is a function.
- [isJSON](is-json.md): Checks whether a value is valid JSON data (objects, arrays, or JSON primitives).
- [isPort](is-port.md): Checks whether a value is a valid TCP/UDP port number.
- [isRegExp](is-reg-exp.md): Checks whether a value is a `RegExp` instance.
- [isTimestamp](is-timestamp.md): Checks whether a value is a valid Unix timestamp (milliseconds since epoch).

All semantic guards are pure, predictable, and safe to use before normalization or validation.
