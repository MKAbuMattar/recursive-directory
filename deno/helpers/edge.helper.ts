export default class Edge {
  value: string;
  children: Map<string, Edge>;
  constructor(value: string) {
    this.value = value;
    this.children = new Map();
  }

  addChild(value: string) {
    if (!this.children.has(value)) {
      const newNode = new Edge(value);
      this.children.set(value, newNode);
      return newNode;
    }
    return this.children.get(value);
  }
}
