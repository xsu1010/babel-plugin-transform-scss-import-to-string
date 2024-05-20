# babel-plugin-transform-scss-import-to-string

Babel transform plugin for replacing \*.scss imports with static variable
declaration as css string.

> This is a fork from the original plugin [@researchgate/babel-plugin-transform-scss-import-to-string](https://github.com/researchgate/babel-plugin-transform-scss-import-to-string), which seems to no longer be maintained.
> 
> This version uses `sass` and allows for a more modern usage (_e.g._ it uses `sass` options and also works with `?inline` imports).

## Example

```js
import sideEffectStyles from "./styles.scss?inline";
// vvv
const sideEffectStyles = ".foo { color: red; }";
```

## Quick start

Install the plugin first:

```sh
# pnpm
pnpm add -D @xsu1010/babel-plugin-transform-scss-import-to-string

# yarn
yarn add --dev @xsu1010/babel-plugin-transform-scss-import-to-string

# npm
npm install --save-dev @xsu1010/babel-plugin-transform-scss-import-to-string
```

Add it to your babel configuration:

```json
{
  "plugins": ["@xsu1010/babel-plugin-transform-scss-import-to-string"]
}
```

Or with custom [`sass` options](https://sass-lang.com/documentation/js-api/interfaces/options/):

```json
{
  "plugins": [
    [
      "@xsu1010/babel-plugin-transform-scss-import-to-string",
      { "precision": 3, "style": "compressed" }
    ]
  ]
}
```

Import `*.scss` files:

```scss
// foo.scss
$bar: 42px;
.foo {
  font-size: $bar;
}
```

```js
// foo.js
import foo from "./foo.scss?inline";
console.log(foo); // -> .foo { font-size: 42px; }
```

## Requirements

- `sass`, which you should install explicitly
- `@babel/core`, which you should already have with babel configured

## Caveats

- This module shouldn't be used with webpack and sass-loader since babel
  transform would take first place in build process.
- Every import transpiled with sass as an independent file, so you have to
  explicitly import dependencies if you used to have common context before.
