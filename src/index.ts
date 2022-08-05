import directoryTree, { Options } from './utils/directoryTree.util';
import recursiveDirectory, {
  Files,
  RecursiveDirectory,
} from './utils/recursiveDirectory.util';

export * from './utils/directoryTree.util';
export * from './utils/recursiveDirectory.util';
export { recursiveDirectory };
export type { Files, RecursiveDirectory };
export { directoryTree };
export type { Options };

export default recursiveDirectory;
