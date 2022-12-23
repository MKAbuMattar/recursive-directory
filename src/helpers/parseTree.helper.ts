import { Files, Options } from '../types';
import builderRenderTable from './builderRenderTable.helper';
import Edge from './edge.helper';
import RenderTableEntry from './renderTableEntry.helper';

/**
 * Parses the given file paths into a tree structure.
 * @param {Files} filePaths - The file paths to parse.
 * @param {Options} options - The options to use when parsing the file paths.
 * @returns {RenderTableEntry[]} The tree structure.
 */
const parseTree = (filePaths: Files, options: Options): RenderTableEntry[] => {
  const PATH_SEPARATOR: string = options.pathSeparator;
  const roots: Map<string, Edge> = new Map();

  // Parse into tree
  let pathElements: string[];
  let rootElement: string | undefined;
  let edge: Edge | undefined;

  for (const path of filePaths) {
    pathElements = path.split(PATH_SEPARATOR);
    rootElement = pathElements.shift();

    if (rootElement == null) {
      continue;
    }

    edge = roots.get(rootElement);

    if (edge == null) {
      edge = new Edge(rootElement);
      roots.set(rootElement, edge);
    }

    for (const pathElement of pathElements) {
      if (edge != null) {
        edge = edge.addChild(pathElement);
      }
    }
  }
  return builderRenderTable(roots, PATH_SEPARATOR);
};

export default parseTree;
