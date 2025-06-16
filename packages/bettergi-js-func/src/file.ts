/**
 * 同步读取JSON文件
 * @param filePath 文件路径
 */
export function readJSONFileSync<T = any>(filePath: string): T {
  const content = file.readTextSync(filePath)
  return JSON.parse(content) as T
}

/**
 * 异步读取JSON文件
 * @param filePath 文件路径
 */
export async function readJSONFile<T = any>(filePath: string): Promise<T> {
  const content = await file.readText(filePath)
  return JSON.parse(content) as T
}

/**
 * 同步写入JSON文件
 * @param filePath 文件路径
 * @param data 数据
 * @param space 缩进空格数，默认为 2
 */
export function writeJSONFileSync(filePath: string, data: any, space: number = 2): boolean {
  const content = JSON.stringify(data, null, space)
  return file.writeTextSync(filePath, content)
}

/**
 * 异步写入JSON文件
 * @param filePath 文件路径
 * @param data 数据
 * @param space 缩进空格数，默认为 2
 */
export async function writeJSONFile(filePath: string, data: any, space: number = 2): Promise<boolean> {
  const content = JSON.stringify(data, null, space)
  return file.writeText(filePath, content)
}

/**
 * 同步判断路径是否存在
 * @param path 路径
 */
export function pathExistsSync(path: string): boolean {
  if (!file.isFolder(path)) {
    try {
      file.readTextSync(path)
    }
    catch {
      return false
    }
  }
  return true
}
