export interface Point2f {
  /** x坐标 */
  x: number
  X: number
  /** y坐标 */
  y: number
  Y: number
}

// https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/GameTask/Common/Map/Maps/Base/MapTypes.cs
/** 地图名称 */
type MapType = 'Teyvat' // 提瓦特大陆
  | 'TheChasm' // 层岩巨渊
  | 'Enkanomiya' // 渊下宫
  | 'SeaOfBygoneEras' // 旧日之海
  | 'AncientSacredMountain' // 远古圣山
  | (string & {})

/** 支持的冒险家协会国家名 */
type AdventurersGuildCountry = '稻妻' | '枫丹' | '璃月' | '蒙德' | (string & {})

/** 支持的合成台国家名 */
type CraftingBenchCountry = '稻妻' | '枫丹' | '璃月' | '蒙德' | (string & {})

/** 钓鱼时间策略 */
type FishingTimePolicy = 0 // 全天
  | 1 // 白天
  | 2 // 夜晚
  | 3 // 不调

// https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/Core/Script/Dependence/Genshin.cs
export class Genshin {
  /** 获取游戏窗口宽度 */
  readonly width: number
  readonly Width: number

  /** 获取游戏窗口高度 */
  readonly height: number
  readonly Height: number

  /** 获取游戏窗口相对于1080P的缩放比例 */
  readonly scaleTo1080PRatio: number
  readonly ScaleTo1080PRatio: number

  /** 获取系统屏幕的DPI缩放比例 */
  readonly screenDpiScale: number
  readonly ScreenDpiScale: number

  /**
   * 传送到指定位置
   * @param x X 坐标
   * @param y Y 坐标
   * @param force 是否强制传送，默认为false
   */
  tp<T = number | string>(x: T, y: T, force?: boolean): Promise<void>
  Tp<T = number | string>(x: T, y: T, force?: boolean): Promise<void>

  /**
   * 传送到指定位置
   * @param x X 坐标
   * @param y Y 坐标
   * @param mapName 地图名称
   * @param force 是否强制传送，默认为false
   */
  tp(x: number, y: number, mapName: MapType, force?: boolean): Promise<void>
  Tp(x: number, y: number, mapName: MapType, force?: boolean): Promise<void>

  /**
   * 移动大地图到指定坐标
   * @param x 目标X坐标
   * @param y 目标Y坐标
   * @param forceCountry 强制指定移动大地图时先切换的国家，默认为undefined
   */
  moveMapTo(x: number, y: number, forceCountry?: string): Promise<void>
  MoveMapTo(x: number, y: number, forceCountry?: string): Promise<void>

  /**
   * 移动大地图到指定坐标
   * @param x 目标X坐标
   * @param y 目标Y坐标
   * @param mapName 地图名称
   * @param forceCountry 强制指定移动大地图时先切换的国家，默认为undefined
   */
  moveIndependentMapTo(x: number, y: number, mapName: MapType, forceCountry?: string): Promise<void>
  MoveIndependentMapTo(x: number, y: number, mapName: MapType, forceCountry?: string): Promise<void>

  /**
   * 获取当前大地图缩放等级
   * @returns 当前大地图缩放等级，范围1.0-6.0
   */
  getBigMapZoomLevel(): number
  GetBigMapZoomLevel(): number

  /**
   * 设置大地图缩放等级
   * @param zoomLevel 目标缩放等级，范围 1.0-6.0
   */
  setBigMapZoomLevel(zoomLevel: number): Promise<void>
  SetBigMapZoomLevel(zoomLevel: number): Promise<void>

  /**
   * 传送到用户指定的七天神像
   */
  tpToStatueOfTheSeven(): Promise<void>
  TpToStatueOfTheSeven(): Promise<void>

  /**
   * 获取当前在大地图上的位置坐标
   * @param mapName 地图名称
   */
  getPositionFromBigMap(mapName?: MapType): Point2f
  GetPositionFromBigMap(mapName?: MapType): Point2f

  /**
   * 获取当前在小地图上的位置坐标
   * @param mapName 地图名称
   */
  getPositionFromMap(mapName?: MapType): Point2f
  GetPositionFromMap(mapName?: MapType): Point2f

  /**
   * 切换队伍
   * @param partyName 队伍界面自定义的队伍名称
   */
  switchParty(partyName: string): Promise<boolean>
  SwitchParty(partyName: string): Promise<boolean>

  /**
   * 自动点击空月祝福
   */
  blessingOfTheWelkinMoon(): Promise<void>
  BlessingOfTheWelkinMoon(): Promise<void>

  /**
   * 持续对话并选择目标选项
   * @param option 选项文本
   * @param skipTimes 跳过次数，默认为10
   * @param isOrange 是否为橙色选项，默认为false
   */
  chooseTalkOption(option: string, skipTimes?: number, isOrange?: boolean): Promise<void>
  ChooseTalkOption(option: string, skipTimes?: number, isOrange?: boolean): Promise<void>

  /**
   * 一键领取纪行奖励
   */
  claimBattlePassRewards(): Promise<void>
  ClaimBattlePassRewards(): Promise<void>

  /**
   * 领取长效历练点奖励
   */
  claimEncounterPointsRewards(): Promise<void>
  ClaimEncounterPointsRewards(): Promise<void>

  /**
   * 前往冒险家协会领取奖励
   * @param country 国家名称
   */
  goToAdventurersGuild(country: AdventurersGuildCountry): Promise<void>
  GoToAdventurersGuild(country: AdventurersGuildCountry): Promise<void>

  /**
   * 前往合成台
   * @param country 国家名称
   */
  goToCraftingBench(country: CraftingBenchCountry): Promise<void>
  GoToCraftingBench(country: CraftingBenchCountry): Promise<void>

  /**
   * 返回主界面
   */
  returnMainUi(): Promise<void>
  ReturnMainUi(): Promise<void>

  /**
   * 自动钓鱼
   * @param fishingTimePolicy 钓鱼时间策略，默认为0
   */
  autoFishing(fishingTimePolicy?: FishingTimePolicy): Promise<void>
  AutoFishing(fishingTimePolicy?: FishingTimePolicy): Promise<void>

  /**
   * 返回到登录界面并重新开门进入游戏
   */
  relogin(): Promise<void>
  Relogin(): Promise<void>
}
