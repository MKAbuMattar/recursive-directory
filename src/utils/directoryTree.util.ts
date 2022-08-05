class Edge {
  value: any;
  children: any;
  constructor(value: any) {
    this.value = value;
    this.children = new Map();
  }

  addChild(value: any) {
    if (!this.children.has(value)) {
      const newNode = new Edge(value);
      this.children.set(value, newNode);
      return newNode;
    }
    return this.children.get(value);
  }
}

class RenderTableEntry {
  value: any;
  depth: any;
  isLastChild: any;
  constructor(value: any, depth: any, isLastChild: any) {
    this.value = value;
    this.depth = depth;
    this.isLastChild = isLastChild;
  }
}

const DEFAULT_OPTIONS = {
  pathSeparator: '/',
  sequences: {
    throughTee: '├──',
    endTee: '└──',
    vertical: '|  ',
    emptyColumn: '   ',
  },
};

const parseTree = (filePaths: any, options: { pathSeparator?: any }) => {
  const PATH_SEPARATOR = options.pathSeparator;
  const roots = new Map();

  // Parse into tree
  let pathElements: any, rootElement: any, node: Edge;
  for (const path of filePaths) {
    pathElements = path.split(PATH_SEPARATOR);
    rootElement = pathElements.shift();

    node = roots.get(rootElement);
    if (node == null) {
      node = new Edge(rootElement);
      roots.set(rootElement, node);
    }
    for (const pathElement of pathElements) {
      node = node.addChild(pathElement);
    }
  }
  return builderRenderTable(roots, PATH_SEPARATOR);
};

const builderRenderTable = (
  roots: { values: () => any },
  pathSeparator: any,
) => {
  const renderTable = [];
  let toVisit = [...roots.values()];

  const nodeDepths = new Map();
  const lastNodes = new Set([toVisit[toVisit.length - 1]]);

  while (toVisit.length > 0) {
    const currentNode = toVisit.shift();

    const nodeDepth = nodeDepths.get(currentNode) || 0;

    while (currentNode.children.size === 1) {
      const childNode = currentNode.children.values().next().value;
      currentNode.value += `${pathSeparator}${childNode.value}`;
      currentNode.children = childNode.children;
    }

    const children = [...currentNode.children.values()];
    if (children.length > 0) {
      for (const child of children) {
        nodeDepths.set(child, nodeDepth + 1);
      }
      lastNodes.add(children[children.length - 1]);
      toVisit = children.concat(toVisit);
    }

    renderTable.push(
      new RenderTableEntry(
        currentNode.value,
        nodeDepth,
        lastNodes.has(currentNode),
      ),
    );
  }
  return renderTable;
};

const printTree = (renderTable: any, options: any) => {
  let outputString = '';
  const activeColumns = [];
  for (const tableEntry of renderTable) {
    if (tableEntry.depth === 0) {
      outputString += tableEntry.value;
    } else {
      for (let column = 1; column < tableEntry.depth; column++) {
        if (activeColumns[column]) {
          outputString += options.sequences.vertical;
        } else {
          outputString += options.sequences.emptyColumn;
        }
      }
      outputString += tableEntry.isLastChild
        ? options.sequences.endTee
        : options.sequences.throughTee;
      outputString += ' ' + tableEntry.value;
    }
    outputString +=
      tableEntry === renderTable[renderTable.length - 1] ? '' : '\n';
    activeColumns[tableEntry.depth] = !tableEntry.isLastChild;
  }
  return outputString;
};

const setStyleProps = (options: object) => {
  const sequences = Object.assign(DEFAULT_OPTIONS.sequences, options);
  const pathSeparator = DEFAULT_OPTIONS.pathSeparator;
  return { sequences, pathSeparator };
};

const directoryTree = (files: string[], options = {}): string => {
  if (files === undefined || files.length === 0) {
    return '';
  }

  options = setStyleProps(options);
  if (!files || typeof files[Symbol.iterator] !== 'function') {
    return '';
  }
  return printTree(parseTree(files, options), options);
};

export default directoryTree;
