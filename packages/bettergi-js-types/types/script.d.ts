// https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/Core/Script/Dependence/AutoPathingScript.cs
export class PathingScript {
  /**
   * 运行地图追踪任务
   * @param json 自动路径任务的JSON字符串
   */
  run(json: string): Promise<void>
  Run(json: string): Promise<void>

  /**
   * 从文件中读取地图追踪任务并运行
   * @param path 相对文件路径，只允许读取脚本目录下文件
   */
  runFile(path: string): Promise<void>
  RunFile(path: string): Promise<void>

  /**
   * 从文件中读取地图追踪任务并运行
   * @param path 相对文件路径，在 /User/AutoPathing 目录下获取文件
   */
  runFileFromUser(path: string): Promise<void>
  RunFileFromUser(path: string): Promise<void>
}

// https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/Core/Script/Dependence/KeyMouseScript.cs
export class KeyMouseScript {
  /**
   * 运行键鼠脚本任务
   * @param json 键鼠脚本任务的JSON字符串
   */
  run(json: string): Promise<void>
  Run(json: string): Promise<void>

  /**
   * 从文件中读取键鼠脚本任务并运行
   * @param path 文件路径，只允许读取脚本目录下文件
   */
  runFile(path: string): Promise<void>
  RunFile(path: string): Promise<void>
}
