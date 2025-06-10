// https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/Core/Script/Dependence/Notification.cs
export class Notification {
  /**
   * 发送通知
   * @param message 通知消息
   */
  send(message: string): void
  Send(message: string): void

  /**
   * 发送错误通知
   * @param message 通知消息
   */
  error(message: string): void
  Error(message: string): void
}
