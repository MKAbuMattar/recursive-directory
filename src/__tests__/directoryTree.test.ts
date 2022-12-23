import { test } from '@jest/globals';

import { directoryTree, Files, recursiveDirectory } from '../index';
import { EmptyResultTree, SuccessResultAsTree } from './__mocks__/index.mock';

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
