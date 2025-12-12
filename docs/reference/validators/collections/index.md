# Overview

Collection validators verify that iterable structures, such as arrays, sets, and maps, meet specific size constraints, and ensure that their elements or entries conform to consistent type constraints. They return a structured `ValidationResult<T>`, never throw exceptions, and never mutate the input collection.

-

All collection validators are pure, predictable, and designed to perform fast checks on the integrity and size of data structures.
