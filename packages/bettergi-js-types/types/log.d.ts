// https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/Core/Script/Dependence/Log.cs
export class Log {
  /**
   * 在遮罩日志窗口输出调试级别的信息
   * @param message 日志消息
   * @param args 日志参数
   */
  debug(message: string, ...args: any[]): void
  Debug(message: string, ...args: any[]): void

  /**
   * 在遮罩日志窗口输出信息级别的信息
   * @param message 日志消息
   * @param args 日志参数
   */
  info(message: string, ...args: any[]): void
  Info(message: string, ...args: any[]): void

  /**
   * 在遮罩日志窗口输出警告级别的信息
   * @param message 日志消息
   * @param args 日志参数
   */
  warn(message: string, ...args: any[]): void
  Warn(message: string, ...args: any[]): void

  /**
   * 在遮罩日志窗口输出错误级别的信息
   * @param message 日志消息
   * @param args 日志参数
   */
  error(message: string, ...args: any[]): void
  Error(message: string, ...args: any[]): void
}
