import Edge from './edge.helper.ts';
import RenderTableEntry from './renderTableEntry.helper.ts';

/**
 * Builds a render table for the given roots.
 * @param {Map<string, Edge>} roots - The roots of the tree.
 * @param {string} pathSeparator - The separator to use between parts of a file path.
 * @returns {RenderTableEntry[]} The render table.
 */
const builderRenderTable = (
  roots: Map<string, Edge>,
  pathSeparator: string,
): RenderTableEntry[] => {
  const renderTable: RenderTableEntry[] = [];
  let toVisit: Edge[] = [...roots.values()];

  const edgeDepths = new Map();
  const lastEdges: Set<Edge> = new Set([toVisit[toVisit.length - 1]]);

  while (toVisit.length > 0) {
    const currentEdge = toVisit.shift();

    if (!currentEdge) {
      continue;
    }

    const edgeDepth = edgeDepths.get(currentEdge) || 0;

    while (currentEdge.children.size === 1) {
      const childEdge = [...currentEdge.children.values()][0];
      currentEdge.value += `${pathSeparator}${childEdge.value}`;
      currentEdge.children = childEdge.children;
    }

    const children = [...currentEdge.children.values()];
    if (children.length > 0) {
      for (const child of children) {
        edgeDepths.set(child, edgeDepth + 1);
      }
      lastEdges.add(children[children.length - 1]);
      toVisit = children.concat(toVisit);
    }

    renderTable.push(
      new RenderTableEntry(
        currentEdge.value,
        edgeDepth,
        lastEdges.has(currentEdge),
      ),
    );
  }
  return renderTable;
};

export default builderRenderTable;
