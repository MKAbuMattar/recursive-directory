<div align="center">
  <img src="https://raw.githubusercontent.com/MKAbuMattar/recursive-directory/main/assets/logo.svg" alt="Recursive Directory Logo"/>

  <h1>Recursive Directory</h1>

  <p>Recursive Directory is an npm package that allows you to directory and returns a list of files.</p>
</div>

<div align="center">
  <a href="https://www.npmjs.com/package/recursive-directory" target="_blank">
    <img src="https://img.shields.io/badge/npm-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" alt=""/>
  </a>

  <a href="https://github.com/MKAbuMattar/recursive-directory" target="_blank">
    <img src="https://img.shields.io/badge/github-%23181717.svg?style=for-the-badge&logo=github&logoColor=white" alt=""/>
  </a>

  <a href="https://github.com/MKAbuMattar/recursive-directory/releases">
    <img alt="GitHub release" src="https://img.shields.io/github/v/release/MKAbuMattar/recursive-directory?color=%23d52128&label=Latest%20release&style=for-the-badge" />
    </a>

  <a href="/LICENSE">
    <img alt="GitHub" src="https://img.shields.io/github/license/MKAbuMattar/recursive-directory?color=%23d52128&style=for-the-badge">
  </a>

  <a href="https://github.com/MKAbuMattar/recursive-directory/stargazers">
    <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/MKAbuMattar/recursive-directory?color=%23d52128&label=github%20stars&style=for-the-badge">
  </a>
</div>

## Install package

```sh
#npm
npm install --save recursive-directory

#yarn
yarn add recursive-directory

#pnpm
pnpm add recursive-directory
```

## Demo

### List of files

- TypeScript

```ts
import recursiveDirectory, { RecursiveDirectory } from 'recursive-directory';

(async () => {
  const files: RecursiveDirectory = await recursiveDirectory(
    './devicon/icons/',
  );

  console.log(files);
})();
```

- ECMAScript modules

```js
import recursiveDirectory from 'recursive-directory';

(async () => {
  const files = await recursiveDirectory('./devicon/icons/');

  console.log(files);
})();
```

- CommonJS

```js
const recursiveDirectory = require('recursive-directory');

(async () => {
  const files = await recursiveDirectory('./devicon/icons/');

  console.log(files);
})();
```

### List of files as object

- TypeScript

```ts
import recursiveDirectory, { RecursiveDirectory } from 'recursive-directory';

(async () => {
  const files: RecursiveDirectory = await recursiveDirectory(
    './devicon/icons/',
    true,
  );

  console.log(files);
})();
```

- ECMAScript modules

```js
import recursiveDirectory from 'recursive-directory';

(async () => {
  const files = await recursiveDirectory('./devicon/icons/', true);

  console.log(files);
})();
```

- CommonJS

```js
const recursiveDirectory = require('recursive-directory');

(async () => {
  const files = await recursiveDirectory('./devicon/icons/', true);

  console.log(files);
})();
```

### List of files as object exported as `json` file

- TypeScript

```ts
import recursiveDirectory, { RecursiveDirectory } from 'recursive-directory';
import path, { dirname } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

(async () => {
  const files: RecursiveDirectory = await recursiveDirectory(
    './devicon/icons/',
    true,
  );
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  fs.writeFileSync(
    path.resolve(__dirname, 'build.config.json'),
    JSON.stringify(files),
  );
})();
```

- ECMAScript modules

```js
import recursiveDirectory from 'recursive-directory';
import path, { dirname } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

(async () => {
  const files = await recursiveDirectory('./devicon/icons/', true);
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  fs.writeFileSync(
    path.resolve(__dirname, 'build.config.json'),
    JSON.stringify(files),
  );
})();
```

- CommonJS

```js
const recursiveDirectory = require('recursive-directory');
const path = require('path');
const fs = require('fs');

(async () => {
  const files = await recursiveDirectory('./devicon/icons/', true);

  fs.writeFileSync(
    path.resolve(__dirname, 'build.config.json'),
    JSON.stringify(files),
  );
})();
```

### You will get something like that

```json
[
  {
    "fullpath": "/home/mkabumttar/work/recursive-directory-tmp/devicon/icons/aarch64/aarch64-original.svg",
    "filepath": "/home/mkabumttar/work/recursive-directory-tmp/devicon/icons/aarch64/",
    "filename": "aarch64-original.svg",
    "dirname": "aarch64"
  },
  ...
]
```

---

**NOTE**: In TypeScript may be you get an errror:

```txt
Cannot find module 'recursive-directory'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?ts(2792)
```

> This error message tells you the typescript default module resolution is classic, this would not search from node_modules. That why tell you did not find the module in the node_modules folder. You need to change in `tsconfig.json`

- `tsconfig.json`

```json
{
  "compilerOptions": {
    "moduleResolution": "node",
    ...
  }
}
```
