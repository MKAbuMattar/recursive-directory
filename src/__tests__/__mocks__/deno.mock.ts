import { Files, RecursiveDirectory } from '../../index';

const SuccessResultAsArray: Files = [
  '/home/mkabumattar/work/recursive-directory/deno/dir/assets/css/normalize.css',
  '/home/mkabumattar/work/recursive-directory/deno/dir/assets/css/style.css',
  '/home/mkabumattar/work/recursive-directory/deno/dir/assets/icons/favicon.ico',
  '/home/mkabumattar/work/recursive-directory/deno/dir/assets/icons/icon.svg',
  '/home/mkabumattar/work/recursive-directory/deno/dir/assets/images/logo.png',
  '/home/mkabumattar/work/recursive-directory/deno/dir/assets/images/logo.svg',
  '/home/mkabumattar/work/recursive-directory/deno/dir/assets/js/main.js',
  '/home/mkabumattar/work/recursive-directory/deno/dir/index.html',
  '/home/mkabumattar/work/recursive-directory/deno/dir/manifest.webmanifest',
];

const SuccessResultAsObject: RecursiveDirectory = [
  {
    fullpath:
      '/home/mkabumattar/work/recursive-directory/deno/dir/assets/css/normalize.css',
    filepath: '/home/mkabumattar/work/recursive-directory/deno/dir/assets/css/',
    filename: 'normalize.css',
    dirname: 'css',
  },
  {
    fullpath:
      '/home/mkabumattar/work/recursive-directory/deno/dir/assets/css/style.css',
    filepath: '/home/mkabumattar/work/recursive-directory/deno/dir/assets/css/',
    filename: 'style.css',
    dirname: 'css',
  },
  {
    fullpath:
      '/home/mkabumattar/work/recursive-directory/deno/dir/assets/icons/favicon.ico',
    filepath:
      '/home/mkabumattar/work/recursive-directory/deno/dir/assets/icons/',
    filename: 'favicon.ico',
    dirname: 'icons',
  },
  {
    fullpath:
      '/home/mkabumattar/work/recursive-directory/deno/dir/assets/icons/icon.svg',
    filepath:
      '/home/mkabumattar/work/recursive-directory/deno/dir/assets/icons/',
    filename: 'icon.svg',
    dirname: 'icons',
  },
  {
    fullpath:
      '/home/mkabumattar/work/recursive-directory/deno/dir/assets/images/logo.png',
    filepath:
      '/home/mkabumattar/work/recursive-directory/deno/dir/assets/images/',
    filename: 'logo.png',
    dirname: 'images',
  },
  {
    fullpath:
      '/home/mkabumattar/work/recursive-directory/deno/dir/assets/images/logo.svg',
    filepath:
      '/home/mkabumattar/work/recursive-directory/deno/dir/assets/images/',
    filename: 'logo.svg',
    dirname: 'images',
  },
  {
    fullpath:
      '/home/mkabumattar/work/recursive-directory/deno/dir/assets/js/main.js',
    filepath: '/home/mkabumattar/work/recursive-directory/deno/dir/assets/js/',
    filename: 'main.js',
    dirname: 'js',
  },
  {
    fullpath: '/home/mkabumattar/work/recursive-directory/deno/dir/index.html',
    filepath: '/home/mkabumattar/work/recursive-directory/deno/dir/',
    filename: 'index.html',
    dirname: 'dir',
  },
  {
    fullpath:
      '/home/mkabumattar/work/recursive-directory/deno/dir/manifest.webmanifest',
    filepath: '/home/mkabumattar/work/recursive-directory/deno/dir/',
    filename: 'manifest.webmanifest',
    dirname: 'dir',
  },
];

const SuccessResultAsTree = `/home/mkabumattar/work/recursive-directory/deno/dir
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
└── manifest.webmanifest`;

const EmptyResult: RecursiveDirectory = [];
const EmptyResultTree = '';

export {
  EmptyResult,
  EmptyResultTree,
  SuccessResultAsArray,
  SuccessResultAsObject,
  SuccessResultAsTree,
};
