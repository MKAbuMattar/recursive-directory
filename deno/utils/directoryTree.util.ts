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

const setStyleProps = (options: object) => {
  const sequences: Sequences = Object.assign(
    DEFAULT_OPTIONS.sequences,
    options,
  );
  const pathSeparator: string = DEFAULT_OPTIONS.pathSeparator;

  return {
    sequences,
    pathSeparator,
  };
};

const directoryTree = (
  files: Files,
  options: Options | object = {},
): string => {
  if (files === undefined || files.length === 0) {
    return '';
  }

  options = setStyleProps(options);

  return printTree(parseTree(files, options as Options), options as Options);
};

export default directoryTree;
