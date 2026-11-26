# -AI-Factory-test016

Company website.

## Tests

- Run with `npm test`, which uses Node's built-in test runner (`node --test`).
- Write tests with `node:test` and `node:assert/strict`, in files named `*.test.js`.
- Tests run offline with no `npm install`, so they may import only Node built-ins and this repo's own plain JavaScript modules.
- The package is an ES module (`"type": "module"`): relative imports need the `.js` extension, for example `import { validateContactForm } from "../src/components/InputValidation.js"`.
