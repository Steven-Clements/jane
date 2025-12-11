# Overview

Protocol type guards check whether a value implements a specific JavaScript protocol. These helpers validate behavior rather than structure, returning simple booleans with no side effects.

- [isAsyncIterable](is-async-iterable.md): Checks whether a value implements the async iteration protocol (`Symbol.asyncIterator`).
- [isIterable](is-iterable.md): Checks whether a value implements the iteration protocol (`Symbol.iterator`).
- [isPromise](is-promise.md): Checks whether a value is a `Promise` or promise‑like object.

All protocol guards are pure, predictable, and safe to use before normalization or validation.
