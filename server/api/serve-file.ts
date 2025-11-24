import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export default defineEventHandler((event) => {
  const query = getQuery(event);
  const filePath = query.path as string;

  if (!filePath) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request: Missing file path',
    });
  }

  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  const contentDirPath = resolve(__dirname, '../contents');
  const targetFilePath = resolve(contentDirPath, filePath);

  // Security check: Ensure the resolved path is within the 'contents' directory
  if (!targetFilePath.startsWith(contentDirPath)) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Forbidden: Access to specified path is denied.',
    });
  }

  try {
    const fileContent = readFileSync(targetFilePath, 'utf-8');
    return { content: fileContent };
  }
  catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      throw createError({
        statusCode: 404,
        statusMessage: `File Not Found: ${filePath}`,
      });
    }
    throw createError({
      statusCode: 500,
      statusMessage: `Internal Server Error: ${(error as Error).message}`,
    });
  }
});
