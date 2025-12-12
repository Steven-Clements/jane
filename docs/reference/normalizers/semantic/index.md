# Overview

Semantic normalizers convert unknown input into values that carry meaning, not just type. These helpers interpret raw data as dates, errors, regular expressions, timestamps, ports, and other domain‑specific primitives. They never throw exceptions, never mutate input, and never perform hidden coercion. Each helper returns either a well‑formed semantic value or null when normalization is not possible.

Semantic normalizers sit above primitive and structural normalizers. They ensure that values conform to meaningful real‑world concepts before they are used in business logic, configuration, or parsing pipelines.

- [normalizeJSON](normalize-json.md): Parses JSON strings into structured values.
- [normalizeTimestamp](normalize-timestamp.md): Converts numeric or string timestamps into finite millisecond values.
- [normalizePort](normalize-port.md): Interprets numeric or string port values within the valid TCP/UDP port range.

Each helper is pure, predictable, and designed to compose cleanly with primitive and structural normalizers.

## When to use semantic normalizers

Use semantic normalizers when:

- You need to interpret raw input as a meaningful domain value.
- You want to reject malformed or ambiguous representations (e.g., invalid timestamps, malformed JSON).
- You want to avoid ad‑hoc parsing logic scattered throughout your codebase.
- You want to separate “interpretation” from “validation” for clarity.
- You want to ensure downstream logic receives values that already carry semantic guarantees.

Semantic normalizers form the bridge between raw input and meaningful application‑level concepts. They eliminate ambiguity, reduce boilerplate, and make your data pipelines explicit, predictable, and safe.
