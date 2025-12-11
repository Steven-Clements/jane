# Follow the development workflow

Jane follows a clarity‑first, contract‑driven workflow. Every change begins with an explicit description of the intended behavior before any implementation work is done. This prevents ambiguity, reduces regressions, and keeps the codebase predictable.

The workflow is:

1. **Write a reference topic**

    Describe the module’s purpose, inputs, outputs, constraints, and edge cases in `docs/reference/`.

    The reference topic is the human‑readable source of truth.  
    It defines the contract that all tests and implementations must follow.

2. **Write the tests**

    Translate the reference topic into executable expectations using Vitest.

    Tests should cover:

    - Expected behavior  
    - Invalid inputs  
    - Edge cases  
    - Type‑level expectations (if applicable)  
    - No coercion or magic behavior  

    Tests are the executable contract.  
    They must reflect the spec — no more, no less.

3. **Write the implementation**

    Implement the module so that it satisfies the spec and passes all tests.

    Keep modules small, explicit, and free of side effects.  
    Avoid cleverness; prefer clarity and predictability.

4. **Update documentation**

    If the change affects public behavior, update the relevant docs in `docs/`.

    Documentation must always match actual behavior.  
    No drift, no ambiguity.

5. **Commit using semantic messages**

    Use Conventional Commits to ensure automated releases and changelog updates:

    - `feat:` for new features  
    - `fix:` for bug fixes  
    - `docs:` for documentation changes  
    - `refactor:` for internal changes  
    - `test:` for test‑only changes  
    - `chore:` for non‑code tasks  

This workflow ensures that behavior is defined before it is implemented, tests reflect the intended contract, and the codebase remains explicit, predictable, and maintainable — the core of Jane’s philosophy.

## Next up

[Restricted repo files](restricted-repo-files.md)
