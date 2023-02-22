import glob from 'npm:glob';
import path from 'npm:path';

import { AsObject, Dir, Files, RecursiveDirectory } from '../types/index.ts';

/**
 * Recursively get the list of files in a directory.
 * @param dir - The directory to get the files from.
 * @param asObject - If true, returns an object with the file information instead of just the file paths.
 * @returns A Promise that resolves to a list of file paths or file information objects.
 */
const recursiveDirectory = (
  dir: Dir,
  asObject: AsObject = false,
): Promise<RecursiveDirectory | Files> => {
  if (dir.length === 0) {
    throw new Error(`dir: "${dir}" must not be empty`);
  }

  return new Promise((resolve, reject) => {
    glob(
      path.resolve(`${dir}/**/*`),
      { strict: false, silent: true, nodir: true },
      (error: Error | null, files: Files) => {
        if (error) {
          reject(error);
          return;
        }

        if (!asObject) {
          resolve(files);
          return;
        }

        const filesObject: RecursiveDirectory = files.map((file) => {
          const regexp = /^(.*[\\/])(.*)$/;
          const match = regexp.exec(file);

          if (!match) {
            throw new Error(
              `Failed to extract file information from "${file}"`,
            );
          }

          return {
            fullpath: file,
            filepath: match[1],
            filename: match[2],
            dirname: regexp.exec(
              match[1].substring(0, match[1].length - 1),
            )![2],
          };
        });

        resolve(filesObject);
      },
    );
  });
};

export default recursiveDirectory;
