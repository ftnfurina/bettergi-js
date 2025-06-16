import type { Mat } from './rec'

/**
 * 回调函数
 * @param error 错误信息，如果有的话
 * @param context 回调内容
 */
type Callback<T> = (error?: string, context: T) => void

// https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/Core/Script/Dependence/LimitedFile.cs
export class File {
  /**
   * 读取指定文件夹内所有文件和文件夹的路径
   *
   * PS: 当文件夹不存在时，会创建文件夹，并返回空数组
   * @param folderPath 文件夹路径
   */
  readPathSync(folderPath: string): string[]
  ReadPathSync(folderPath: string): string[]

  /**
   * 判断指定路径是否为文件夹
   * @param path 文件路径
   */
  isFolder(path: string): boolean
  IsFolder(path: string): boolean

  /**
   * 同步读取文本
   * @param path 文件路径
   */
  readTextSync(path: string): string
  ReadTextSync(path: string): string

  /**
   * 异步读取文本
   * @param path 文件路径
   * @param callback 回调函数，参数为读取到的文本内容
   */
  readText(path: string, callback?: Callback<string>): Promise<string>
  ReadText(path: string, callback?: Callback<string>): Promise<string>

  /**
   * 同步读取图像
   * @param path 文件路径
   */
  readImageMatSync(path: string): Mat
  ReadImageMatSync(path: string): Mat

  /**
   * 同步写入
   * @param path 文件路径
   * @param content 要写入的内容
   * @param append 是否追加模式，默认为 false 表示覆盖写入
   */
  writeTextSync(path: string, content: string, append?: boolean): boolean
  WriteTextSync(path: string, content: string, append?: boolean): boolean

  /**
   * 异步写入
   * @param path 文件路径
   * @param content 要写入的内容
   * @param append 是否追加模式，默认为 false 表示覆盖写入
   */
  writeText(path: string, content: string, append?: boolean): Promise<boolean>
  WriteText(path: string, content: string, append?: boolean): Promise<boolean>

  /**
   * 异步写入
   * @param path 文件路径
   * @param content 要写入的内容
   * @param callback 回调函数
   * @param append 是否追加模式，默认为 false 表示覆盖写入
   */
  writeText(path: string, content: string, callback: Callback<boolean>, append?: boolean): Promise<boolean>
  WriteText(path: string, content: string, callback: Callback<boolean>, append?: boolean): Promise<boolean>
}
