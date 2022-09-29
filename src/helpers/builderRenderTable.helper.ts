import Edge from './edge.helper';
import RenderTableEntry from './renderTableEntry.helper';

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

export default builderRenderTable;
