export type Dir = string;

export type AsObject = boolean;

export type Files = string[];

export type RecursiveDirectory = {
  fullpath: string;
  filepath: string;
  filename: string;
  dirname: string;
  // extension: string;
}[];

export type Sequences = {
  throughTee: string;
  endTee: string;
  vertical: string;
  emptyColumn: string;
};

export type Options = {
  pathSeparator: string;
  sequences: Sequences;
};
