import { Options } from '../types/index.ts';
import RenderTableEntry from './renderTableEntry.helper.ts';

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

export default printTree;
