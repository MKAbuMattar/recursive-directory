export default class RenderTableEntry {
  value: string;
  depth: number;
  isLastChild: boolean;
  constructor(value: string, depth: number, isLastChild: boolean) {
    this.value = value;
    this.depth = depth;
    this.isLastChild = isLastChild;
  }
}
