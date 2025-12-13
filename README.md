# Meet Jane

> **Less boilerplate**. **More flow**.

Zero‑side‑effect normalization, validation, and safe parsing for JavaScript and TypeScript.

Jane is a clarity‑first helper library for turning unknown input into predictable, typed values — without schema systems, decorators, or framework lock‑in. It gives you the small, explicit building blocks you wish the language shipped with.

Jane is intentionally small. Intentionally explicit. Intentionally boring in all the right ways.

## Why Jane?

Most validation libraries try to do everything: schemas, inference, coercion, transformations, refinements, and runtime type systems.

Jane takes the opposite approach.

Jane is:

- **Pure**: No side effects, no hidden mutations, no surprises.
- **Deterministic**: Same input, same output, every time.
- **Composable**: Build safe pipelines with `pipe()`, `compose()`, and `tap()`.
- **Zero‑dependency**: No runtime weight, no bloat.
- **Framework‑agnostic**: Works anywhere: Node, serverless, workers, Express, Fastify, Bun, Deno.
- **TypeScript‑aligned**: Every helper narrows types cleanly and predictably.
- **Focused**: Normalize → validate → parse → result. Nothing more. Nothing hidden.

If you want a dependable “standard library for runtime safety,” Jane is your girl.

## What makes Jane different?

Jane isn’t a schema engine. It isn’t a DSL. It isn’t magic.

Jane gives you:

- **Primitives, not frameworks**: Small, explicit helpers you can compose however you want.
- **Zero coercion**: If you pass `"123"` to a number validator, you get a failure — not a silent conversion.
- **Safe parsing**: Every parser returns a structured result. Nothing throws.
- **A complete lattice of runtime checks**: Type guards → validators → normalizers → parsers → functional helpers.
- **Perfect for TypeScript**: Jane’s helpers narrow types exactly the way TS expects. No inference tricks. No decorators. No metadata.
- **Predictable control flow**: Every operation returns a `ValidationResult<T>`.

You always know what you’re getting.

## Who is Jane for?

Jane is designed for developers who:

- Prefer explicit, predictable behavior over clever abstractions.
- Want pure functions instead of schema builders.
- Need safe parsing for config, requests, environment variables, and API boundaries.
- Value clarity and maintainability in long‑lived codebases.
- Dislike validators that throw or coerce.
- Want small, composable building blocks instead of monolithic schemas.

If you’ve ever written your own tiny normalizers and validators because existing libraries felt too heavy — Jane was built for you.

## Installation

```ts
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

const port = pipe(
    process.env.PORT,
    normalizeInteger,
    (value) => validateInteger(value, "PORT"),
);

const logLevel = pipe(
    process.env.LOG_LEVEL,
    (value) => normalizeEnum(value, ["debug", "info", "warn", "error"]),
    (value) => validateEnum(value, ["debug", "info", "warn", "error"], "LOG_LEVEL"),
);
```

Jane encourages a simple, predictable flow:

- Normalize unknown input.
- Validate the normalized value.
- Return a `Result<T>` — never throw.

## Result and error shapes

Jane never throws.

Every validator returns a discriminated union:

```ts
type SafeResult<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };
```

Validators that operate on named fields return:

```ts
type ValidationResult<T> =
  | { ok: true; value: T }
  | { ok: false; field: string; message: string };
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

- No exceptions.
- No coercion surprises.
- No hidden behavior.

## Documentation

- Project overview
- Reference

```bash
npm run format
npm run test
npm run lint
npm run typecheck
```

### License

Apache License, Version 2.0

<http://www.apache.org/licenses/LICENSE-2.0>

## Author

Clementine Technology Solutions LLC

Designed for clarity, composability, and long‑term maintainability.
