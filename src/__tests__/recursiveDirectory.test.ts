import { afterEach, beforeEach, expect, test } from '@jest/globals';
import mock from 'mock-fs';

import recursiveDirectory, { Files, RecursiveDirectory } from '../index';
import {
  EmptyResult,
  MockDirectory,
  SuccessResultAsArray,
  SuccessResultAsObject,
} from './__mocks__/index.mock';

beforeEach(() => {
  mock(MockDirectory);
});

afterEach(() => {
  mock.restore();
});

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

test('List of files as lest empty argument', async () => {
  expect(() => recursiveDirectory('')).toThrowError('Invalid arguments');
});

test('List of files as object empty argument', async () => {
  expect(() => recursiveDirectory('', true)).toThrowError('Invalid arguments');
});
