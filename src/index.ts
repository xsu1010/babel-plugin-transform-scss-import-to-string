import type { Node } from "@babel/core";
import type { Visitor, NodePath } from "@babel/traverse";
import type * as BabelTypes from "@babel/types";
import { resolve, dirname, join } from "path";
import sass from "sass";
import type { Options } from "sass";

export interface PluginOptions {
  opts?: Options<"sync">;
  file: NodePath;
}

export interface Babel {
  types: typeof BabelTypes;
}

const isImportDefaultSpecifier = (node: Node) =>
  node.type === "ImportDefaultSpecifier";

/**
 * This babel plugin transpiles scss import declaration with *.scss mask and
 * replaces it with const variable declaration with raw css string
 */
function transformScssToString(babel: Babel): {
  name: string;
  visitor: Visitor<PluginOptions>;
} {
  const { types: t } = babel;
  return {
    name: "babel-plugin-transform-scss-import-to-string",
    visitor: {
      ImportDeclaration(path, state) {
        // Drop these options
        const userOptions = state.opts;
        // Filter *.scss imports
        if (!/\.scss$/.test(path.node.source.value)) return;
        // Get full path to file and transpile it
        const scssFileDirectory = resolve(dirname(state.file.opts.filename));
        const fullScssFilePath = join(
          scssFileDirectory,
          path.node.source.value,
        );
        const projectRoot = process.cwd();
        const nodeModulesPath = join(projectRoot, "node_modules");
        const sassDefaults = {
          sourceMap: false,
          loadPaths: [nodeModulesPath, scssFileDirectory, projectRoot],
        };
        const sassResult = sass.compile(
          fullScssFilePath,
          Object.assign({}, sassDefaults, userOptions),
        );
        const transpiledContent = sassResult.css.toString() || "";
        // Extract import name
        const defaultImportNode = path.node.specifiers.find(
          isImportDefaultSpecifier,
        );
        if (!defaultImportNode) return;
        const defaultImportName = defaultImportNode.local.name;
        // Replace import with hardcoded value
        path.replaceWith(
          t.variableDeclaration("const", [
            t.variableDeclarator(
              t.identifier(defaultImportName),
              t.stringLiteral(transpiledContent),
            ),
          ]),
        );
      },
    },
  };
}

export default transformScssToString;
