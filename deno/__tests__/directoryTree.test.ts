import { expect } from 'https://deno.land/x/expect@v0.2.6/mod.ts';
const test = Deno.test;

import { directoryTree, Files, recursiveDirectory } from '../index.ts';
import {
  EmptyResult,
  EmptyResultTree,
  SuccessResultAsArray,
  SuccessResultAsObject,
  SuccessResultAsTree,
} from './__mocks__/deno.mock.ts';

test('List of files to tree', async () => {
  const files: Files = (await recursiveDirectory('dir')) as Files;

  const fileTree = directoryTree(files);

  expect(fileTree).toEqual(SuccessResultAsTree);
});

test('List of files to tree empty', async () => {
  const files: Files = (await recursiveDirectory('empty')) as Files;

  const fileTree = directoryTree(files);

  expect(fileTree).toEqual(EmptyResultTree);
});
