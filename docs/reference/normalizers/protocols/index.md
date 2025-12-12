# Overview

Protocol normalizers convert unknown input into predictable protocol‑level values such as iterables, async iterables, and promises. These helpers never throw exceptions, never mutate input, and never perform hidden coercion. Each normalizer returns either a clean, well‑formed protocol object or null when normalization is not possible.

Protocol normalizers sit alongside primitive and structural normalizers, but focus specifically on JavaScript’s iteration and asynchronous protocols. They ensure that values conform to the expected runtime interfaces before they are consumed by higher‑level utilities, pipelines, or parsers.

- [normalizeAsyncIterable](normalize-async-iterable.md): Accepts any value implementing the asynchronous iteration protocol.
- [normalizeIterable](normalize-iterable.md): Accepts any value implementing the synchronous iteration protocol.
- [normalizePromise](normalize-promise.md) Accepts native promises and promise‑like objects.

Each helper is pure, predictable, and designed to compose cleanly with structural and primitive normalizers.

## When to use protocol normalizers

Use protocol normalizers when:

- You need to ensure a value implements a specific JavaScript protocol before consuming it.
- You want to reject “hostile” or broken protocol implementations that throw when accessed.
- You want to avoid ad‑hoc typeof checks or manual iterator inspection.
- You want to separate “protocol conformance” from “value validation” for clarity.
- You are building higher‑level utilities that operate on streams, iterables, or asynchronous workflows.

Protocol normalizers form the foundation of Jane’s streaming and asynchronous data pipelines. They guarantee that downstream consumers receive safe, well‑formed protocol objects, eliminating ambiguity and preventing runtime surprises.
