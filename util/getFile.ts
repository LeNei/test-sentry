import fs from 'fs/promises';
import path from 'path';

export async function getJsonFile<T>(file: string) {
  const filePath = path.join(process.cwd(), `/constants/${file}.json`);
  const jsonData = await fs.readFile(filePath);
  const data: T[] = JSON.parse(jsonData.toString());
  return data;
}

