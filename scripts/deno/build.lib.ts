import { build } from 'build-deno';

build({
  root: '',
  rootDir: 'src',
  outDir: 'deno',
  changePackage: [
    {
      byPackageName: true,
      package: `glob`,
      replace: `import glob from 'npm:glob';`,
    },
    {
      byPackageName: true,
      package: `path`,
      replace: `import path from 'npm:path';`,
    },
    {
      byPackageName: true,
      package: '@jest/globals',
      replace: `import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts';\r\nconst test = Deno.test;`,
    },
    {
      package: `import { Files, RecursiveDirectory, recursiveDirectory } from '../index';`,
      replace: `import { Files, RecursiveDirectory, recursiveDirectory } from '../index.ts';`,
    },
    {
      package: `import {
  EmptyResult,
  SuccessResultAsArray,
  SuccessResultAsObject,
} from './__mocks__/index.mock';`,
      replace: `import {
  EmptyResult,
  SuccessResultAsArray,
  SuccessResultAsObject,
} from './__mocks__/deno.mock.ts';`,
    },
    {
      package: `import { EmptyResultTree, SuccessResultAsTree } from './__mocks__/index.mock';`,
      replace: `import { EmptyResultTree, SuccessResultAsTree } from './__mocks__/deno.mock.ts';`,
    },
  ],
  skipFile: [
    {
      dir: 'playground',
      name: 'index.ts',
    },
  ],
  copyFiles: [
    {
      from: 'README.md',
      to: 'README.md',
    },
  ],
});
