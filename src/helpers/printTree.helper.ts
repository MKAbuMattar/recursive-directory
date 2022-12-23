import { Options } from '../types';
import RenderTableEntry from './renderTableEntry.helper';

/**
 * @param renderTable - An array of RenderTableEntry objects
 * @param options - An object containing options for rendering the tree
 * @returns A string representation of the tree
 */
const printTree = (
  renderTable: RenderTableEntry[],
  options: Options,
): string => {
  // handle empty or undefined renderTable
  if (!renderTable || renderTable.length === 0) {
    throw new Error('Render table is empty or undefined');
  }

  let outputString = '';
  const activeColumns = [];

  for (const tableEntry of renderTable) {
    if (tableEntry.depth !== 0) {
      // output the appropriate number of vertical and empty columns
      for (let column = 1; column < tableEntry.depth; column++) {
        if (!activeColumns[column]) {
          outputString += options.sequences.emptyColumn;
        } else {
          outputString += options.sequences.vertical;
        }
      }

      // output the through tee or end tee character, depending on whether the
      // current entry is the last child in its parent
      outputString += tableEntry.isLastChild
        ? options.sequences.endTee
        : options.sequences.throughTee;

      // add a space and the value of the current entry
      outputString += ' ' + tableEntry.value;
    } else {
      // for the root element, just output the value
      outputString += tableEntry.value;
    }

    // add a newline character, unless this is the last entry in the table
    outputString +=
      tableEntry === renderTable[renderTable.length - 1] ? '' : '\n';

    // update the activeColumns array to reflect whether the current entry has
    // any children
    activeColumns[tableEntry.depth] = !tableEntry.isLastChild;
  }
  return outputString;
};

export default printTree;
