<div align="center">
  <img src="https://raw.githubusercontent.com/MKAbuMattar/recursive-directory/main/assets/logo.svg" alt="Recursive Directory Logo"/>

  <h1>Recursive Directory</h1>

  <p>Recursive Directory is a package that allows you to recurse a directory, you can return multiple choices as an object, list, or tree.</p>
</div>

<div align="center">
  <a href="https://www.npmjs.com/package/recursive-directory" target="_blank">
    <img src="https://img.shields.io/badge/npm-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" alt=""/>
  </a>

  <a href="https://deno.land/x/recursive_directory" target="_blank">
    <img src="https://img.shields.io/badge/deno-000000?style=for-the-badge&logo=deno&logoColor=white" alt=""/>
  </a>

  <a href="https://github.com/MKAbuMattar/recursive-directory" target="_blank">
    <img src="https://img.shields.io/badge/github-%23181717.svg?style=for-the-badge&logo=github&logoColor=white" alt=""/>
  </a>

  <a href="https://github.com/MKAbuMattar/recursive-directory/releases">
    <img alt="GitHub release" src="https://img.shields.io/github/v/release/MKAbuMattar/recursive-directory?color=%23d52128&label=Latest%20release&style=for-the-badge" />
    </a>

  <a href="https://github.com/MKAbuMattar/recursive-directory/blob/main/LICENSE">
    <img alt="GitHub" src="https://img.shields.io/github/license/MKAbuMattar/recursive-directory?color=%23d52128&style=for-the-badge">
  </a>

  <a href="https://github.com/MKAbuMattar/recursive-directory/stargazers">
    <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/MKAbuMattar/recursive-directory?color=%23d52128&label=github%20stars&style=for-the-badge">
  </a>
</div>

## Installation

### Node/npm

```sh
#npm
npm install --save recursive-directory

#yarn
yarn add recursive-directory

#pnpm
pnpm add recursive-directory
```

### Deno

Unlike Node, Deno doesn't use a package management like NPM and instead depends on direct URL imports. You can access recursive-directory on deno.land/x. This is how the most recent version may be imported:

You can also specify a particular version:

```ts
import { recursiveDirectory } from 'https://deno.land/x/recursive_directory@1.0.1/mod.ts';
```

or letest version:

```ts
import { recursiveDirectory } from 'https://deno.land/x/recursive_directory/mod.ts';
```

### CDN

```html
<!-- jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/recursive-directory/lib/index.umd.js"></script>

<!-- Unpkg -->
<script src="https://unpkg.com/recursive-directory/lib/index.umd.js"></script>
```

> NOTE: There isn't much of a change in how it's used, but the remainder of this README assumes you're using npm and importing straight from the recursive-directory.

## Demo

### List of files

- TypeScript

```ts
import { Files, recursiveDirectory } from 'recursive-directory';

(async () => {
  const files: Files = (await recursiveDirectory('./dir')) as Files;

  console.log(files);
})();
```

- ECMAScript modules

```js
import { recursiveDirectory } from 'recursive-directory';

(async () => {
  const files = await recursiveDirectory('./dir');

  console.log(files);
})();
```

- CommonJS

```js
const { recursiveDirectory } = require('recursive-directory');

(async () => {
  const files = await recursiveDirectory('./dir');

  console.log(files);
})();
```

- Expected result

<details>

```json
[
  "/home/mkabumttar/work/recursive-directory/dir/assets/css/normalize.css",
  "/home/mkabumttar/work/recursive-directory/dir/assets/css/style.css",
  "/home/mkabumttar/work/recursive-directory/dir/assets/icons/favicon.ico",
  "/home/mkabumttar/work/recursive-directory/dir/assets/icons/icon.svg",
  "/home/mkabumttar/work/recursive-directory/dir/assets/images/logo.png",
  "/home/mkabumttar/work/recursive-directory/dir/assets/images/logo.svg",
  "/home/mkabumttar/work/recursive-directory/dir/assets/js/main.js",
  "/home/mkabumttar/work/recursive-directory/dir/index.html",
  "/home/mkabumttar/work/recursive-directory/dir/manifest.webmanifest"
]
```

</details>

### List of files as object

- TypeScript

```ts
import { RecursiveDirectory, recursiveDirectory } from 'recursive-directory';

(async () => {
  const files: RecursiveDirectory = (await recursiveDirectory(
    './dir',
    true,
  )) as RecursiveDirectory;

  console.log(files);
})();
```

- ECMAScript modules

```js
import { recursiveDirectory } from 'recursive-directory';

(async () => {
  const files = await recursiveDirectory('./dir', true);

  console.log(files);
})();
```

- CommonJS

```js
const { recursiveDirectory } = require('recursive-directory');

(async () => {
  const files = await recursiveDirectory('./dir', true);

  console.log(files);
})();
```

- Expected result

<details>

```json
[
  {
    "fullpath": "/home/mkabumttar/work/recursive-directory/dir/assets/css/normalize.css",
    "filepath": "/home/mkabumttar/work/recursive-directory/dir/assets/css/",
    "filename": "normalize.css",
    "dirname": "css"
  },
  {
    "fullpath": "/home/mkabumttar/work/recursive-directory/dir/assets/css/style.css",
    "filepath": "/home/mkabumttar/work/recursive-directory/dir/assets/css/",
    "filename": "style.css",
    "dirname": "css"
  },
  {
    "fullpath": "/home/mkabumttar/work/recursive-directory/dir/assets/icons/favicon.ico",
    "filepath": "/home/mkabumttar/work/recursive-directory/dir/assets/icons/",
    "filename": "favicon.ico",
    "dirname": "icons"
  },
  {
    "fullpath": "/home/mkabumttar/work/recursive-directory/dir/assets/icons/icon.svg",
    "filepath": "/home/mkabumttar/work/recursive-directory/dir/assets/icons/",
    "filename": "icon.svg",
    "dirname": "icons"
  },
  {
    "fullpath": "/home/mkabumttar/work/recursive-directory/dir/assets/images/logo.png",
    "filepath": "/home/mkabumttar/work/recursive-directory/dir/assets/images/",
    "filename": "logo.png",
    "dirname": "images"
  },
  {
    "fullpath": "/home/mkabumttar/work/recursive-directory/dir/assets/images/logo.svg",
    "filepath": "/home/mkabumttar/work/recursive-directory/dir/assets/images/",
    "filename": "logo.svg",
    "dirname": "images"
  },
  {
    "fullpath": "/home/mkabumttar/work/recursive-directory/dir/assets/js/main.js",
    "filepath": "/home/mkabumttar/work/recursive-directory/dir/assets/js/",
    "filename": "main.js",
    "dirname": "js"
  },
  {
    "fullpath": "/home/mkabumttar/work/recursive-directory/dir/index.html",
    "filepath": "/home/mkabumttar/work/recursive-directory/dir/",
    "filename": "index.html",
    "dirname": "dir"
  },
  {
    "fullpath": "/home/mkabumttar/work/recursive-directory/dir/manifest.webmanifest",
    "filepath": "/home/mkabumttar/work/recursive-directory/dir/",
    "filename": "manifest.webmanifest",
    "dirname": "dir"
  }
]
```

</details>

### List of files as tree

- TypeScript

```ts
import { directoryTree, Files, recursiveDirectory } from 'recursive-directory';

(async () => {
  const files: Files = (await recursiveDirectory('./dir')) as Files;

  const fileTree = directoryTree(files);

  console.log(fileTree);
})();
```

- ECMAScript modules

```js
import { recursiveDirectory, directoryTree } from 'recursive-directory';

(async () => {
  const files = await recursiveDirectory('./dir');

  const fileTree = directoryTree(files);

  console.log(fileTree);
})();
```

- CommonJS

```js
const { recursiveDirectory, directoryTree } = require('recursive-directory');

(async () => {
  const files = await recursiveDirectory('./dir');

  const fileTree = directoryTree(files);

  console.log(fileTree);
})();
```

- Expected result

<details>

```txt
/home/mkabumttar/work/recursive-directory/dir
├── assets
|  ├── css
|  |  ├── normalize.css
|  |  └── style.css
|  ├── icons
|  |  ├── favicon.ico
|  |  └── icon.svg
|  ├── images
|  |  ├── logo.png
|  |  └── logo.svg
|  └── js/main.js
├── index.html
└── manifest.webmanifest
```

</details>

### Example

<details>

- TypeScript

```ts
import { Files, recursiveDirectory } from 'recursive-directory';
import fs from 'fs';
import path from 'path';

(async () => {
  const files: Files = (await recursiveDirectory('./dir')) as Files;

  fs.writeFileSync(
    path.resolve(__dirname, 'build.config.json'),
    JSON.stringify(files),
  );
})();
```

```ts
import { RecursiveDirectory, recursiveDirectory } from 'recursive-directory';
import fs from 'fs';
import path from 'path';

(async () => {
  const files: RecursiveDirectory = (await recursiveDirectory(
    './dir',
    true,
  )) as RecursiveDirectory;

  fs.writeFileSync(
    path.resolve(__dirname, 'build.config.json'),
    JSON.stringify(files),
  );
})();
```

```ts
import { directoryTree, Files, recursiveDirectory } from 'recursive-directory';
import fs from 'fs';
import path from 'path';

(async () => {
  const files: Files = (await recursiveDirectory('./dir')) as Files;

  const fileTree = directoryTree(files);

  fs.writeFileSync(path.resolve(__dirname, 'build.config.txt'), fileTree);
})();
```

- ECMAScript modules

```js
import { recursiveDirectory } from 'recursive-directory';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

(async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const files = await recursiveDirectory('./dir');

  fs.writeFileSync(
    path.resolve(__dirname, 'build.config.json'),
    JSON.stringify(files),
  );
})();
```

```js
import { recursiveDirectory } from 'recursive-directory';
import path, { dirname } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

(async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const files = await recursiveDirectory('./dir', true);

  fs.writeFileSync(
    path.resolve(__dirname, 'build.config.json'),
    JSON.stringify(files),
  );
})();
```

```js
import { recursiveDirectory, directoryTree } from 'recursive-directory';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

(async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const files = await recursiveDirectory('./dir');

  const fileTree = directoryTree(files);

  fs.writeFileSync(path.resolve(__dirname, 'build.config.txt'), fileTree);
})();
```

- CommonJS

```js
const { recursiveDirectory } = require('recursive-directory');
const path = require('path');
const fs = require('fs');

(async () => {
  const files = await recursiveDirectory('./dir');

  fs.writeFileSync(
    path.resolve(__dirname, 'build.config.json'),
    JSON.stringify(files),
  );
})();
```

```js
const { recursiveDirectory } = require('recursive-directory');
const path = require('path');
const fs = require('fs');

(async () => {
  const files = await recursiveDirectory('./dir', true);

  fs.writeFileSync(
    path.resolve(__dirname, 'build.config.json'),
    JSON.stringify(files),
  );
})();
```

```js
const { recursiveDirectory, directoryTree } = require('recursive-directory');
const path = require('path');
const fs = require('fs');

(async () => {
  const files = await recursiveDirectory('./dir');

  const fileTree = directoryTree(files);

  fs.writeFileSync(path.resolve(__dirname, 'build.config.txt'), fileTree);
})();
```

</details>

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
