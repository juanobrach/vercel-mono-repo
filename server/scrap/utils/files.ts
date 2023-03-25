import fs from 'fs';

export const writeFile = (
  body: string,
  fileName: string,
  options?: fs.WriteFileOptions
) => {
  return fs.writeFileSync(`./scrap/cached/${fileName}`, body ?? '', options);
};

export const getFile = async (fileName: string) => {
  const file = await fs.readFileSync(`./scrap/cached/${fileName}`, {
    encoding: 'utf-8',
    flag: 'r',
  });
  return file;
};
