import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.ts',
    external: ['glob', 'path'],
    plugins: [
      typescript({
        tsconfig: 'tsconfig.json',
        declaration: true,
        declarationDir: 'types',
        rootDir: 'src',
        sourceMap: false,
      }),
    ],
    output: [
      {
        file: 'lib/index.js',
        name: 'RecursiveDirectory',
        format: 'cjs',
        sourcemap: false,
      },
      {
        file: 'lib/index.mjs',
        name: 'RecursiveDirectory',
        format: 'es',
        sourcemap: false,
      },
    ],
  },
  {
    input: 'lib/types/index.d.ts',
    external: ['glob', 'path'],
    plugins: [dts()],
    output: [{ file: 'lib/index.d.ts', format: 'es' }],
  },
];
