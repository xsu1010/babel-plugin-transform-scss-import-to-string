## [1.0.1](https://github.com/xsu1010/babel-plugin-transform-scss-import-to-string/compare/v1.0.0...v1.0.1) (2024-05-17)


### Bug Fixes

* bump package version ([120aa46](https://github.com/xsu1010/babel-plugin-transform-scss-import-to-string/commit/120aa468d540b43a12bedb7ff7f2ad662f1b8799))

# 1.0.0 (2024-05-17)


### Bug Fixes

* enable nested relative imports ([72981b2](https://github.com/xsu1010/babel-plugin-transform-scss-import-to-string/commit/72981b2727f21dcc6dd299f1bd14d1288b876d72))
* **package:** update node-sass to 4.9.3 ([0caf821](https://github.com/xsu1010/babel-plugin-transform-scss-import-to-string/commit/0caf8212f831814d6c054a5050f74b37a2dcd9c0))
* **plugin:** support includePaths option for node-sass to resolve [@import](https://github.com/import)'s ([17e4998](https://github.com/xsu1010/babel-plugin-transform-scss-import-to-string/commit/17e4998ebc87a0ac8bc06586872ec0d98e7ee307))
* **readme:** fix copy-paste error ([68212f9](https://github.com/xsu1010/babel-plugin-transform-scss-import-to-string/commit/68212f9e70b680d300b73977399fce9d6c1dad0a))


* feat!: fully refactored plugin tooling + dependencies ([ae955ea](https://github.com/xsu1010/babel-plugin-transform-scss-import-to-string/commit/ae955eaa82683e1a8510eeda79e9b7f2fc9e9989))


### Features

* initial commit ([bb18828](https://github.com/xsu1010/babel-plugin-transform-scss-import-to-string/commit/bb18828095e116bdd2ad1f256d529074753fca83))
* **plugin:** allow passing down node-sass options ([a0bcdeb](https://github.com/xsu1010/babel-plugin-transform-scss-import-to-string/commit/a0bcdebf29ec53bef8771dcb96648a80e0fb5e00))
* Use babel v7 and update deps ([57e5de7](https://github.com/xsu1010/babel-plugin-transform-scss-import-to-string/commit/57e5de7e8f1fcfcc03f7b35c77f2bc856dcf837d))


### BREAKING CHANGES

* plugin now uses sass, users are required to change
dependencies and syntax
* Requires babel version 7 and up
