import glob from 'glob';
import path from 'path';
import { z } from 'zod';

const DirSchema = z.string().refine(
  (val) => val.length !== 0,
  (val) => ({ message: `${val} must not be empty` }),
);
type Dir = z.infer<typeof DirSchema>;

const AsObjectSchema = z.boolean();
type AsObject = z.infer<typeof AsObjectSchema>;

const FilesSchema = z.string().array();
export type Files = z.infer<typeof FilesSchema>;

const RecursiveDirectorySchema = z.array(
  z.object({
    fullpath: z.string(),
    filepath: z.string(),
    filename: z.string(),
    dirname: z.string(),
  }),
);
export type RecursiveDirectory = z.infer<typeof RecursiveDirectorySchema>;

const recursiveDirectory = (
  dir: Dir,
  asObject: AsObject = false,
): Promise<RecursiveDirectory | Files> => {
  if (
    !DirSchema.safeParse(dir).success ||
    !AsObjectSchema.safeParse(asObject).success
  ) {
    throw new Error('Invalid arguments');
  }

  return new Promise((resolve, reject) => {
    glob(
      path.resolve(`${dir}/**/*`),
      { strict: false, silent: true, nodir: true },
      (error: Error | null, files: string[]) => {
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
