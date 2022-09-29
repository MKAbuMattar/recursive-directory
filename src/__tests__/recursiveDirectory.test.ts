import { expect, test } from '@jest/globals';

import { Files, RecursiveDirectory, recursiveDirectory } from '../index';
import {
  EmptyResult,
  SuccessResultAsArray,
  SuccessResultAsObject,
} from './__mocks__/index.mock';

test('List of files as lest', async () => {
  const files: Files = (await recursiveDirectory('dir')) as Files;

  expect(files).toBeInstanceOf(Array);
  expect(files).toEqual(SuccessResultAsArray);
});

test('List of files as object', async () => {
  const files: RecursiveDirectory = (await recursiveDirectory(
    'dir',
    true,
  )) as RecursiveDirectory;

  expect(files).toBeInstanceOf(Array);
  expect(files).toEqual(SuccessResultAsObject);
});

test('List of files as lest empty directory', async () => {
  const files: Files = (await recursiveDirectory('empty')) as Files;

  expect(files).toBeInstanceOf(Array);
  expect(files).toEqual(EmptyResult);
});

test('List of files as object empty directory', async () => {
  const files: RecursiveDirectory = (await recursiveDirectory(
    'empty',
    true,
  )) as RecursiveDirectory;

  expect(files).toBeInstanceOf(Array);
  expect(files).toEqual(EmptyResult);
});

// test('List of files as lest empty argument', async () => {
//   expect(() => recursiveDirectory('')).toThrowError(
//     'dir: "" must not be empty',
//   );
// });

// test('List of files as object empty argument', async () => {
//   expect(() => recursiveDirectory('', true)).toThrowError(
//     'dir: "" must not be empty',
//   );
// });
