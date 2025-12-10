# Meet Jane

Zero‑side‑effect normalization and validation helpers for JavaScript.

Jane is a small, clarity‑first helper library for **normalizing**, **validating**, and **safely parsing** unknown input in JavaScript and TypeScript.

It’s built for developers who want predictable behavior, composable pipelines, and zero surprises — without schema systems, decorators, or framework lock‑in.

Jane is intentionally small. Intentionally explicit. Intentionally boring in all the right ways.

---

## Why Jane?

Most validation libraries try to be everything: schema builders, type generators, transformers, parsers, refiners, and runtime type systems.

Jane takes the opposite approach.

Jane is:

- ✅ **Pure**: No side effects, no hidden mutations.
- ✅ **Deterministic**: Same input, same output, every time.
- ✅ **Composable**: Build pipelines with `pipe()`.
- ✅ **Zero‑dependency**: No runtime weight.
- ✅ **Framework‑agnostic**: Works in Node, serverless, workers, Express, Fastify, Bun, Deno.
- ✅ **Focused**: Normalization → validation → result.

If you want a dependable “standard library” for data sanity, Jane is your girl.

---

## Who is Jane for?

Jane is designed for developers who:

- Prefer **explicit, predictable behavior** over magic.
- Want **pure functions** instead of schema DSLs.
- Need **safe parsing** for config, requests, queries, and internal boundaries.
- Value **clarity and maintainability** in long‑lived codebases.
- Dislike validators that throw.
- Want **small, composable building blocks** instead of monolithic schemas.

If you’ve ever written your own tiny normalizers and validators because existing libraries felt too heavy — Jane was built for you.

---

## Installation

```bash
npm install @clementine-solutions/jane
```

## Quick start

```ts
import {
    pipe,
    normalizeInteger,
    validateInteger,
    normalizeEnum,
    validateEnum,
} from "@clementine-solutions/jane";

const port = pipe(process.env.PORT, normalizeInteger, (value) => validateInteger(value, "PORT"));

const logLevel = pipe(
    process.env.LOG_LEVEL,
    (value) => normalizeEnum(value, ["debug", "info", "warn", "error"]),
    (value) => validateEnum(value, ["debug", "info", "warn", "error"], "LOG_LEVEL"),
);
```

Jane encourages a simple, predictable flow:

- Normalize unknown input
- Validate the normalized value
- Return a Result — never throw

## Result and error shapes

Jane never throws.

Every validator returns a discriminated union:

```ts
type SafeResult<T> = { ok: true; value: T } | { ok: false; error: string };
```

Validators that operate on names fields return:

```ts
type ValidationResult<T> = { ok: true; value: T } | { ok: false; field: string; message: string };
```

These shapes are intentionally minimal:

- Easy to test
- Easy to log
- Easy to compose
- Impossible to misuse

## Example: Validating request input

```ts
const validated = {
    name: pipe(body.name, normalizeString, (v) => validateNonEmptyString(v, "name")),
    age: pipe(body.age, normalizeInteger, (v) => validateInteger(v, "age")),
    newsletter: pipe(body.newsletter, normalizeBoolean),
};
```

Every field becomes a `Result<T>`.

No exceptions. No coercion surprises. No hidden behavior.

## Documentation

Documentation is available at:

- [Project overview](./index.md)
- [Reference](./reference/overview.md)

```bash
npm run format
npm run test
npm run lint
npm run typecheck
```

## License

Jane is licensed under the Apache License, Version 2.0.

<http://www.apache.org/licenses/LICENSE-2.0>

## Author

Clementine Technology Solutions LLC

Designed for clarity, composability, and long‑term maintainability.
