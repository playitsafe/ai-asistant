import path from 'path'
import { fileURLToPath } from 'url'

/**
 * Return absolute path instead of relative path
 * @param { string } relativePath
 */
export function getAbsolutePath(relativePath) {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  return path.join(__dirname, relativePath)
}
