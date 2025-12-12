# Overview

Protocols define the core interfaces and behaviors required for composable utilities within the Jane ecosystem. They enforce strict contracts for custom classes and objects that need to participate in the four-layer runtime model (guards, normalizers, validators, and parsers). Protocols ensure third-party extensions are predictable and safe to use.

Protocols are defined as TypeScript interfaces, ensuring that all implementations provide the necessary methods for processing data without side effects.

-

All protocols are pure, contract-driven, and designed to promote a consistent, decoupled architecture across the entire library.
