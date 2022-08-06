import { z } from 'zod';

import Edge from '../helpers/edge.helper';
import RenderTableEntry from '../helpers/renderTableEntry.helper';

const FilesSchema = z.string().array();
type Files = z.infer<typeof FilesSchema>;

const SequencesSchema = z.object({
  throughTee: z.string(),
  endTee: z.string(),
  vertical: z.string(),
  emptyColumn: z.string(),
});
type Sequences = z.infer<typeof SequencesSchema>;

const OptionsSchema = z.object({
  pathSeparator: z.string(),
  sequences: SequencesSchema,
});
export type Options = z.infer<typeof OptionsSchema>;

const DEFAULT_OPTIONS: Options = {
  pathSeparator: '/',
  sequences: {
    throughTee: '├──',
    endTee: '└──',
    vertical: '|  ',
    emptyColumn: '   ',
  },
};

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

const builderRenderTable = (
  roots: Map<string, Edge>,
  pathSeparator: string,
) => {
  const renderTable: RenderTableEntry[] = [];
  let toVisit: Edge[] = [...roots.values()];

  const edgeDepths = new Map();
  const lastEdges: Set<Edge> = new Set([toVisit[toVisit.length - 1]]);

  while (toVisit.length > 0) {
    const currentEdge = toVisit.shift();

    const edgeDepth = edgeDepths.get(currentEdge) || 0;

    while (currentEdge?.children.size === 1) {
      const childEdge = currentEdge.children.values().next().value;
      currentEdge.value += `${pathSeparator}${childEdge.value}`;
      currentEdge.children = childEdge.children;
    }

    const children = [...currentEdge!.children.values()];
    if (children.length > 0) {
      for (const child of children) {
        edgeDepths.set(child, edgeDepth + 1);
      }
      lastEdges.add(children[children.length - 1]);
      toVisit = children.concat(toVisit);
    }

    renderTable.push(
      new RenderTableEntry(
        currentEdge!.value,
        edgeDepth,
        lastEdges.has(currentEdge as Edge),
      ),
    );
  }
  return renderTable;
};

const printTree = (renderTable: RenderTableEntry[], options: Options) => {
  let outputString = '';
  const activeColumns = [];

  for (const tableEntry of renderTable) {
    if (tableEntry.depth !== 0) {
      for (let column = 1; column < tableEntry.depth; column++) {
        if (!activeColumns[column]) {
          outputString += options.sequences.emptyColumn;
        } else {
          outputString += options.sequences.vertical;
        }
      }
      outputString += tableEntry.isLastChild
        ? options.sequences.endTee
        : options.sequences.throughTee;
      outputString += ' ' + tableEntry.value;
    } else {
      outputString += tableEntry.value;
    }

    outputString +=
      tableEntry === renderTable[renderTable.length - 1] ? '' : '\n';
    activeColumns[tableEntry.depth] = !tableEntry.isLastChild;
  }
  return outputString;
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
  if (!OptionsSchema.safeParse(options).success) {
    options = setStyleProps(options);
  }

  if (!FilesSchema.safeParse(files).success) {
    throw new Error('Invalid arguments');
  }

  if (files === undefined || files.length === 0) {
    return '';
  }

  return printTree(parseTree(files, options as Options), options as Options);
};

export default directoryTree;
