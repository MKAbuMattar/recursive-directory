import { afterEach, beforeEach, expect, test } from '@jest/globals';
import mock from 'mock-fs';
import recursiveDirectory, {
  directoryTree,
  RecursiveDirectory,
} from '../index';

import {
  EmptyResultTree,
  MockDirectory,
  SuccessResultAsTree,
} from './__mocks__/index.mock';

beforeEach(() => {
  mock(MockDirectory);
});

afterEach(() => {
  mock.restore();
});

test('List of files to tree', async () => {
  const files: RecursiveDirectory = (await recursiveDirectory(
    'dir',
  )) as string[];

  const fileTree = directoryTree(files);

  expect(fileTree).toEqual(SuccessResultAsTree);
});

test('List of files to tree empty', async () => {
  const files: RecursiveDirectory = (await recursiveDirectory(
    'empty',
  )) as string[];

  const fileTree = directoryTree(files);

  expect(fileTree).toEqual(EmptyResultTree);
});
