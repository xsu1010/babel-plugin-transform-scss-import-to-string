import path from "path";
import * as babel from "@babel/core";
import plugin from "./index.js";
import { expect, test, describe } from "vitest";

const transformFixture = (fixture: string, options = {}) => {
  const fixturePath = path.resolve(__dirname, "__fixtures__", fixture);
  const code = babel.transformFileSync(fixturePath, {
    plugins: [[plugin, options]],
  })?.code;

  return code;
};

describe("babel-plugin-transform-scss-import-to-string", () => {
  test("resolves and transpiles scss file", () => {
    expect(transformFixture("sample.js")).toMatchSnapshot();
  });

  test("skips non-default import specifier", () => {
    expect(transformFixture("invalid.js")).toMatchSnapshot();
  });

  test("supports custom node-sass options", () => {
    expect(
      transformFixture("precision.js", { precision: 3 }),
    ).toMatchSnapshot();
  });

  test("supports nested scss files", () => {
    expect(() => transformFixture("nested.js")).not.toThrow();
  });

  test("supports scss files with inline query", () => {
    expect(transformFixture("inline.js")).toMatchSnapshot();
  });
});
