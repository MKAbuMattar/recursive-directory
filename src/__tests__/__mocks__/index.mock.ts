import { RecursiveDirectory } from '../../index';

const MockDirectory = {
  dir: {
    '.vscode': {
      'settings.json': '{}',
    },
    assets: {
      css: {
        'style.css': '',
        'normalize.css': '',
      },
      icons: {
        'favicon.ico': '',
        'icon.svg': '',
      },
      images: {
        'logo.png': '',
        'logo.svg': '',
      },
      js: {
        'main.js': '',
      },
    },
    '.prettierrc': '',
    'index.html': '',
    'manifest.webmanifest': '',
  },
  empty: {},
};

const SuccessResultAsArray: RecursiveDirectory = [
  '/home/mkabumttar/work/recursive-directory/dir/assets/css/normalize.css',
  '/home/mkabumttar/work/recursive-directory/dir/assets/css/style.css',
  '/home/mkabumttar/work/recursive-directory/dir/assets/icons/favicon.ico',
  '/home/mkabumttar/work/recursive-directory/dir/assets/icons/icon.svg',
  '/home/mkabumttar/work/recursive-directory/dir/assets/images/logo.png',
  '/home/mkabumttar/work/recursive-directory/dir/assets/images/logo.svg',
  '/home/mkabumttar/work/recursive-directory/dir/assets/js/main.js',
  '/home/mkabumttar/work/recursive-directory/dir/index.html',
  '/home/mkabumttar/work/recursive-directory/dir/manifest.webmanifest',
];

const SuccessResultAsObject: RecursiveDirectory = [
  {
    fullpath:
      '/home/mkabumttar/work/recursive-directory/dir/assets/css/normalize.css',
    filepath: '/home/mkabumttar/work/recursive-directory/dir/assets/css/',
    filename: 'normalize.css',
    dirname: 'css',
  },
  {
    fullpath:
      '/home/mkabumttar/work/recursive-directory/dir/assets/css/style.css',
    filepath: '/home/mkabumttar/work/recursive-directory/dir/assets/css/',
    filename: 'style.css',
    dirname: 'css',
  },
  {
    fullpath:
      '/home/mkabumttar/work/recursive-directory/dir/assets/icons/favicon.ico',
    filepath: '/home/mkabumttar/work/recursive-directory/dir/assets/icons/',
    filename: 'favicon.ico',
    dirname: 'icons',
  },
  {
    fullpath:
      '/home/mkabumttar/work/recursive-directory/dir/assets/icons/icon.svg',
    filepath: '/home/mkabumttar/work/recursive-directory/dir/assets/icons/',
    filename: 'icon.svg',
    dirname: 'icons',
  },
  {
    fullpath:
      '/home/mkabumttar/work/recursive-directory/dir/assets/images/logo.png',
    filepath: '/home/mkabumttar/work/recursive-directory/dir/assets/images/',
    filename: 'logo.png',
    dirname: 'images',
  },
  {
    fullpath:
      '/home/mkabumttar/work/recursive-directory/dir/assets/images/logo.svg',
    filepath: '/home/mkabumttar/work/recursive-directory/dir/assets/images/',
    filename: 'logo.svg',
    dirname: 'images',
  },
  {
    fullpath: '/home/mkabumttar/work/recursive-directory/dir/assets/js/main.js',
    filepath: '/home/mkabumttar/work/recursive-directory/dir/assets/js/',
    filename: 'main.js',
    dirname: 'js',
  },
  {
    fullpath: '/home/mkabumttar/work/recursive-directory/dir/index.html',
    filepath: '/home/mkabumttar/work/recursive-directory/dir/',
    filename: 'index.html',
    dirname: 'dir',
  },
  {
    fullpath:
      '/home/mkabumttar/work/recursive-directory/dir/manifest.webmanifest',
    filepath: '/home/mkabumttar/work/recursive-directory/dir/',
    filename: 'manifest.webmanifest',
    dirname: 'dir',
  },
];

const SuccessResultAsTree: string = `/home/mkabumttar/work/recursive-directory/dir
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
  MockDirectory,
  SuccessResultAsArray,
  SuccessResultAsObject,
  SuccessResultAsTree,
  EmptyResult,
  EmptyResultTree,
};
