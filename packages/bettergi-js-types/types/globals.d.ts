import type { Dispatcher } from './dispatcher'
import type { File } from './file'
import type { Genshin } from './genshin'
import type { Log } from './log'
import type { Notification } from './notification'
import type { KeyMouseScript, PathingScript } from './script'

// V8引擎内置类型和对象注入点
// https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/Core/Script/EngineExtend.cs
// https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/Core/Script/Project/ScriptProject.cs#L88

// Microsoft.ClearScript 不支持 TypeScript 类型定义生成(.d.ts)
// https://github.com/microsoft/ClearScript/issues/438

declare global {
  // https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/Model/SettingItem.cs
  interface Settings {
    readonly [key: string]: string | boolean
  }
  const settings: Settings

  const keyMouseScript: KeyMouseScript
  const pathingScript: PathingScript
  const genshin: Genshin
  const log: Log
  const file: File
  const notification: Notification
  const dispatcher: Dispatcher

  const RealtimeTimer: typeof import('./dispatcher').RealtimeTimer
  const SoloTask: typeof import('./dispatcher').SoloTask

  const CancellationTokenSource: typeof import('./dispatcher').CancellationTokenSource
  const CancellationToken: typeof import('./dispatcher').CancellationToken

  const sleep: typeof import('./method').sleep
  const keyDown: typeof import('./method').keyDown
  const keyUp: typeof import('./method').keyUp
  const keyPress: typeof import('./method').keyPress
  const setGameMetrics: typeof import('./method').setGameMetrics
  const moveMouseBy: typeof import('./method').moveMouseBy
  const moveMouseTo: typeof import('./method').moveMouseTo
  const click: typeof import('./method').click
  const leftButtonClick: typeof import('./method').leftButtonClick
  const leftButtonDown: typeof import('./method').leftButtonDown
  const leftButtonUp: typeof import('./method').leftButtonUp
  const rightButtonClick: typeof import('./method').rightButtonClick
  const rightButtonDown: typeof import('./method').rightButtonDown
  const rightButtonUp: typeof import('./method').rightButtonUp
  const middleButtonClick: typeof import('./method').middleButtonClick
  const middleButtonDown: typeof import('./method').middleButtonDown
  const middleButtonUp: typeof import('./method').middleButtonUp
  const captureGameRegion: typeof import('./method').captureGameRegion
  const inputText: typeof import('./method').inputText

  const Mat: import('./rec').Mat
  const Point2f: import('./genshin').Point2f
  const RecognitionObject: typeof import('./rec').RecognitionObject
  const ImageRegion: typeof import('./rec').ImageRegion
  const Region: typeof import('./rec').Region

  // TODO: 补充其他类型
  // const DesktopRegion: any
  // const GameCaptureRegion: any
  // const PostMessage: any
}

export { }
