# Agent instructions

- Do not run builds or tests automatically after each request. Run them only when the user explicitly asks for verification. Do not invent or run a test suite when the project has none.
- After completing a request that changes files, inspect the diff and create a Git commit with a concise descriptive message. Push the commits. Do not wait for a separate commit request.
