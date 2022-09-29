import { Files, Options } from '../types/index.ts';
import builderRenderTable from './builderRenderTable.helper.ts';
import Edge from './edge.helper.ts';

const parseTree = (filePaths: Files, options: Options) => {
  const PATH_SEPARATOR: string = options.pathSeparator;
  const roots: Map<string, Edge> = new Map();

  // Parse into tree
  let pathElements: string[];
  let rootElement: string | undefined;
  let edge: Edge | undefined;

  for (const path of filePaths) {
    pathElements = path.split(PATH_SEPARATOR);
    rootElement = pathElements.shift() as string;

    edge = roots.get(rootElement);

    if (edge == null) {
      edge = new Edge(rootElement as string);
      roots.set(rootElement, edge);
    }

    for (const pathElement of pathElements) {
      edge = edge!.addChild(pathElement);
    }
  }
  return builderRenderTable(roots, PATH_SEPARATOR);
};

export default parseTree;
