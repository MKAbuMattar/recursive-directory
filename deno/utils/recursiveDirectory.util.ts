import glob from 'https://esm.sh/glob';
import path from 'https://esm.sh/path';

import { AsObject, Dir, Files, RecursiveDirectory } from '../types/index.ts';

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
        }

        if (!asObject) {
          resolve(files);
        }

        try {
          const filesObject: RecursiveDirectory = files.map((file) => {
            const regexp = /^(.*[\\/])(.*)$/;
            const match = regexp.exec(file);

            return {
              fullpath: file,
              filepath: match![1],
              filename: match![2],
              dirname: regexp.exec(
                match![1].substring(0, match![1].length - 1),
              )![2],
            };
          });

          resolve(filesObject);
        } catch (error) {
          reject(error);
        }
      },
    );
  });
};

export default recursiveDirectory;
