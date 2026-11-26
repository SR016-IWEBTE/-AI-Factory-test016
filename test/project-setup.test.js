import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const readJson = async (path) => JSON.parse(await readFile(new URL(path, import.meta.url), "utf8"));

test("package.json runs the built-in Node test runner", async () => {
  const pkg = await readJson("../package.json");
  assert.equal(pkg.scripts.test, "node --test");
  assert.equal(pkg.type, "module");
});

test("package.json installs no dependencies, so tests run offline", async () => {
  const pkg = await readJson("../package.json");
  assert.equal(pkg.dependencies, undefined);
  assert.equal(pkg.devDependencies, undefined);
});
