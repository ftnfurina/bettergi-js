// https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/GameTask/GameTaskManager.cs#L87-L97
/** 实时任务触发器名称 */
type RealtimeTimerName = 'AutoPick' // 自动拾取
  | 'AutoSkip' // 自动跳过剧情
  | (string & {})

// https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/Core/Script/Dependence/Model/RealTimeTimer.cs
export class RealtimeTimer<N = RealtimeTimerName> {
  /** 实时任务触发器名称 */
  name?: N
  Name?: N

  /**
   * 实时任务触发器时间间隔(毫秒)
   * @default 50
   */
  interval: number
  Interval: number

  /** 构造实时任务触发器 */
  constructor()
  /**
   * 构造实时任务触发器
   * @param name 名称
   * @param config 配置
   */
  constructor(name: N, config?: any)
}

// https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/Core/Script/Dependence/Dispatcher.cs#L132-L168
/** 任务名称 */
type SoloTaskName = 'AutoGeniusInvokation' // 自动七圣召唤
  | 'AutoWood' // 自动采集
  | 'AutoFight' // 自动战斗
  | 'AutoDomain' // 自动秘境
  | 'AutoFishing' // 自动钓鱼
  | (string & {})

// https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/Core/Script/Dependence/Model/SoloTask.cs
export class SoloTask<N = SoloTaskName> {
  /** 独立任务名称 */
  name?: N
  Name?: N

  /** 独立任务配置 */
  config: any
  Config: any

  /**
   * 构造独立任务
   * @param name 名称
   * @param config 配置
   */
  constructor(name: N, config?: any)
}

/** 取消令牌 */
export class CancellationToken {
  /** 取消令牌是否已被请求 */
  readonly isCancellationRequested: boolean
  readonly IsCancellationRequested: boolean
}

/** 取消令牌管理器 */
export class CancellationTokenSource {
  /** 关联的取消令牌 */
  readonly token: CancellationToken
  readonly Token: CancellationToken

  /** 取消 */
  cancel(): void
  Cancel(): void
}

// https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/Core/Script/Dependence/Dispatcher.cs
export class Dispatcher {
  /**
   * 添加实时任务,会清理之前的所有任务
   * @param timer 实时任务触发器
   */
  addTimer(timer: RealtimeTimer): void
  AddTimer(timer: RealtimeTimer): void

  /** 清理所有实时任务 */
  clearAllTriggers(): void
  ClearAllTriggers(): void

  /**
   * 添加实时任务,不会清理之前的任务
   * @param timer 实时任务触发器
   */
  addTrigger(timer: RealtimeTimer): void
  AddTrigger(timer: RealtimeTimer): void

  /**
   * 运行独立任务
   * @param soloTask 独立任务对象
   * @param customCts 取消令牌管理器
   */
  runTask(soloTask: SoloTask, customCts: CancellationTokenSource): Promise<void>
  RunTask(soloTask: SoloTask, customCts: CancellationTokenSource): Promise<void>

  /**
   * 运行独立任务
   * @param soloTask 独立任务对象
   * @param customCt 取消令牌
   */
  runTask(soloTask: SoloTask, customCt?: CancellationToken): Promise<void>
  RunTask(soloTask: SoloTask, customCt?: CancellationToken): Promise<void>

  /**
   * 获取一个取消令牌，用于在多线程场景下取消任务
   */
  getLinkedCancellationToken(): CancellationToken
  GetLinkedCancellationToken(): CancellationToken

  /**
   * 创建一个新的链接令牌源，链接到全局令牌源
   */
  getLinkedCancellationTokenSource(): CancellationTokenSource
  GetLinkedCancellationTokenSource(): CancellationTokenSource
}
