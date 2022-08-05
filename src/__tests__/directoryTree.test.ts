import { afterEach, beforeEach, expect, test } from '@jest/globals';
import mock from 'mock-fs';

import recursiveDirectory, { directoryTree, Files } from '../index';
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
  const files: Files = (await recursiveDirectory('dir')) as Files;

  const fileTree = directoryTree(files);

  expect(fileTree).toEqual(SuccessResultAsTree);
});

test('List of files to tree empty', async () => {
  const files: Files = (await recursiveDirectory('empty')) as Files;

  const fileTree = directoryTree(files);

  expect(fileTree).toEqual(EmptyResultTree);
});
