import parseTree from '../helpers/parseTree.helper.ts';
import printTree from '../helpers/printTree.helper.ts';
import { Files, Options, Sequences } from '../types/index.ts';

const DEFAULT_OPTIONS: Options = {
  pathSeparator: '/',
  sequences: {
    throughTee: '├──',
    endTee: '└──',
    vertical: '|  ',
    emptyColumn: '   ',
  },
};

/**
 * @param options - object with sequences and pathSeparator
 * @returns object with sequences and pathSeparator
 */
const setStyleProps = (options: Options): Options => {
  const sequences: Sequences = {
    ...DEFAULT_OPTIONS.sequences,
    ...options.sequences,
  };
  const pathSeparator: string =
    options.pathSeparator || DEFAULT_OPTIONS.pathSeparator;

  return { sequences, pathSeparator };
};

/**
 * Generates a tree-like string representation of the provided file paths.
 * @param {Files} files - The file paths to generate the tree for.
 * @param {Options | object} [options] - Options for customizing the tree.
 * @return {string} - The tree-like string representation of the provided file paths.
 */
const directoryTree = (
  files: Files,
  options: Options | object = {},
): string => {
  if (files === undefined || files.length === 0) {
    return '';
  }

  options = setStyleProps(options as Options);

  return printTree(parseTree(files, options as Options), options as Options);
};

export default directoryTree;
