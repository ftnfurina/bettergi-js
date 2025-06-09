export { }

// V8引擎内置类型和对象注入点
// https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/Core/Script/EngineExtend.cs
// https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/Core/Script/Project/ScriptProject.cs#L88

// Microsoft.ClearScript 不支持 TypeScript 类型定义生成(.d.ts)
// https://github.com/microsoft/ClearScript/issues/438
declare global {

  // TODO: 补充其他内置对象/类型
  // class PostMessage { }
  // class DesktopRegion { }
  // class GameCaptureRegion { }

  // TODO: 内置类型后续再补充详细类型定义
  const INodeConverter: any
  const DrawContent: any
  const Pen: any
  const Mat: any
  const Bitmap: any

  // 识别对象类
  // https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/Core/Recognition/RecognitionObject.cs
  class RecognitionObject {
    // todo: 补充其他内置属性
    /**
     * 模板匹配阈值
     * @default 0.8
     */
    threshold?: number
    Threshold?: number
    /**
     * 是否使用 3 通道匹配
     * @default false
     */
    use3Channels?: boolean
    Use3Channels?: boolean

    static ocrThis: RecognitionObject
    static OcrThis: RecognitionObject

    /**
     * 创建模板匹配识别对象（推荐使用）
     * @param mat 待匹配的 OpenCV Mat 矩阵
     */
    static templateMatch(mat: Mat): RecognitionObject
    static TemplateMatch(mat: Mat): RecognitionObject

    /**
     * 创建带区域的模板匹配识别对象（推荐使用）
     * @param mat 待匹配的 OpenCV Mat 矩阵
     * @param x X 坐标
     * @param y Y 坐标
     * @param w 宽度
     * @param h 高度
     */
    static templateMatch(mat: Mat, x: number, y: number, w: number, h: number): RecognitionObject
    static TemplateMatch(mat: Mat, x: number, y: number, w: number, h: number): RecognitionObject

    /**
     * 创建 OCR 识别对象（推荐使用）
     * @param x X 坐标
     * @param y Y 坐标
     * @param w 宽度
     * @param h 高度
     */
    static ocr(x: number, y: number, w: number, h: number): RecognitionObject
    static Ocr(x: number, y: number, w: number, h: number): RecognitionObject
  }

  // https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/GameTask/Model/Area/Region.cs
  class Region {
    /** 区域的 X 坐标 */
    x: number
    X: number
    /** 区域的 Y 坐标 */
    y: number
    Y: number
    /** 区域的宽度 */
    width: number
    Width: number
    /** 区域的高度 */
    height: number
    Height: number
    /** 区域顶部位置，等同于 Y 坐标 */
    top: number
    Top: number
    /** 区域底部位置，等于 Y + Height */
    readonly bottom: number
    readonly Bottom: number
    /** 区域左侧位置，等同于 X 坐标 */
    left: number
    Left: number
    /** 区域右侧位置，等于 X + Width */
    readonly right: number
    readonly Right: number
    /** 存放 OCR 识别的结果文本 */
    text: string
    Text: string

    /** 创建一个空的区域对象 */
    constructor()
    /** 创建一个具有指定位置和大小的区域对象 */
    constructor(
      x: number,
      y: number,
      width: number,
      height: number,
      owner?: Region,
      converter?: INodeConverter,
      drawContent?: DrawContent
    )

    /** 鼠标后台点击当前区域的中心位置 */
    backgroundClick(): void
    BackgroundClick(): void
    /** 鼠标点击当前区域的中心位置 */
    click(): void
    Click(): void
    /**
     * 鼠标点击区域内指定位置
     * @param x 区域内 X 坐标
     * @param y 区域内 Y 坐标
     */
    clickTo(x: number, y: number): void
    ClickTo(x: number, y: number): void
    /**
     * 鼠标点击矩形区域内中心位置
     * @param x 矩形X 坐标
     * @param y 矩形Y 坐标
     * @param w 矩形宽度
     * @param h 矩形高度
     */
    clickTo(x: number, y: number, w: number, h: number): void
    ClickTo(x: number, y: number, w: number, h: number): void
    /** 鼠标移动到当前区域的中心位置 */
    move(): void
    Move(): void
    /**
     * 鼠标移动到区域内指定位置
     * @param x 区域内 X 坐标
     * @param y 区域内 Y 坐标
     */
    moveTo(x: number, y: number): void
    MoveTo(x: number, y: number): void
    /**
     * 鼠标移动到矩形区域内中心位置
     * @param x 矩形X 坐标
     * @param y 矩形Y 坐标
     * @param w 矩形宽度
     * @param h 矩形高度
     */
    moveTo(x: number, y: number, w: number, h: number): void
    MoveTo(x: number, y: number, w: number, h: number): void
    /**
     * 绘制自身区域到遮罩窗口上
     * @param name 遮罩窗口名称
     * @param pen 绘制使用的画笔
     */
    drawSelf(name: string, pen?: Pen): void
    DrawSelf(name: string, pen?: Pen): void
    /**
     * 派生一个点类型的区域
     * @param x 区域内 X 坐标
     * @param y 区域内 Y 坐标
     */
    derive(x: number, y: number): Region
    Derive(x: number, y: number): Region
    /**
     * 派生一个矩形类型的区域
     * @param x 矩形X 坐标
     * @param y 矩形Y 坐标
     * @param w 矩形宽度
     * @param h 矩形高度
     */
    derive(x: number, y: number, w: number, h: number): Region
    Derive(x: number, y: number, w: number, h: number): Region
    /** 检查区域是否为空 */
    isEmpty(): boolean
    IsEmpty(): boolean
    /** 检查区域是否为有效 */
    isValid(): boolean
    isExist(): boolean
  }

  interface List<T> {
    [Symbol.iterator]: () => ArrayIterator<T>
    /** 数量 */
    count: number
    Count: number
  }

  // https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/GameTask/Model/Area/ImageRegion.cs
  class ImageRegion extends Region {
    /** 获取源位图图像。如果需要会从 Mat 转换 */
    // 已失效
    // srcBitmap: Bitmap;
    /** 获取源 OpenCV Mat 矩阵。如果需要会从 Bitmap 转换 */
    readonly srcMat: Mat
    readonly SrcMat: Mat
    /** 获取源图像的灰度版本 Mat 矩阵 */
    // 已失效
    // srcGreyMat: Mat;

    /** 获取缓存的灰度版本 Mat 矩阵 */
    readonly cacheGreyMat: Mat
    readonly CacheGreyMat: Mat

    /** 使用 Mat 矩阵创建新的图像区域 */
    constructor(
      mat: Mat,
      x: number,
      y: number,
      owner?: Region,
      converter?: INodeConverter,
      drawContent?: DrawContent
    )

    /**
     * 创建当前区域的剪裁派生
     * @param x 矩形X 坐标
     * @param y 矩形Y 坐标
     * @param w 矩形宽度
     * @param h 矩形高度
     */
    deriveCrop(x: number, y: number, w: number, h: number): ImageRegion
    DeriveCrop(x: number, y: number, w: number, h: number): ImageRegion
    /**
     * 在区域内查找识别对象
     * @param ro 待匹配的识别对象
     */
    find(ro: RecognitionObject): Region
    Find(ro: RecognitionObject): Region
    /**
     * 查找多个识别对象实例
     * @param ro 待匹配的识别对象
     */
    findMulti(ro: RecognitionObject): List<Region>
    FindMulti(ro: RecognitionObject): List<Region>
  }

  // 全局方法
  // https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/Core/Script/Dependence/GlobalMethod.cs

  // 按键映射
  // https://bettergi.com/feats/append/keycodes.html
  // https://learn.microsoft.com/zh-cn/windows/win32/inputdev/virtual-key-codes
  type Key = 'LBUTTON' | 'RBUTTON' | 'CANCEL' | 'MBUTTON' | 'XBUTTON1' | 'XBUTTON2' | 'BACK' | 'TAB' | 'CLEAR' | 'RETURN' | 'SHIFT' | 'CONTROL' | 'MENU' | 'PAUSE' | 'CAPITAL' | 'ESCAPE' | 'SPACE' | 'PRIOR' | 'NEXT' | 'END' | 'HOME' | 'LEFT' | 'UP' | 'RIGHT' | 'DOWN' | 'SELECT' | 'PRINT' | 'EXECUTE' | 'SNAPSHOT' | 'INSERT' | 'DELETE' | 'HELP' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z' | 'LWIN' | 'RWIN' | 'APPS' | 'NUMPAD0' | 'NUMPAD1' | 'NUMPAD2' | 'NUMPAD3' | 'NUMPAD4' | 'NUMPAD5' | 'NUMPAD6' | 'NUMPAD7' | 'NUMPAD8' | 'NUMPAD9' | 'MULTIPLY' | 'ADD' | 'SEPARATOR' | 'SUBTRACT' | 'DECIMAL' | 'DIVIDE' | 'F1' | 'F2' | 'F3' | 'F4' | 'F5' | 'F6' | 'F7' | 'F8' | 'F9' | 'F10' | 'F11' | 'F12' | 'F13' | 'F14' | 'F15' | 'F16' | 'F17' | 'F18' | 'F19' | 'F20' | 'F21' | 'F22' | 'F23' | 'F24' | 'NUMLOCK' | 'SCROLL' | 'LSHIFT' | 'RSHIFT' | 'LCONTROL' | 'RCONTROL' | 'LMENU' | 'RMENU'
  type AddVKPrefix<T> = `VK_${T}`
  type VKey = AddVKPrefix<Key> // VK_ 前缀
    | Key // 原始键名
    | Lowercase<AddVKPrefix<Key>> // VK_ 前缀的小写形式
    | Lowercase<Key> // 原始键名的小写形式
    | (string & {}) // 任意字符串

  /**
   * 使当前任务休眠指定的毫秒数
   * @param millisecondsTimeout 休眠时间，单位为毫秒
   */
  function sleep(millisecondsTimeout: number): Promise<void>

  /**
   * 按下指定的键
   * @param key 要按下的键，具体可用参数见虚拟键代码表
   */
  function keyDown(key: VKey): void

  /**
   * 释放指定的键
   * @param key 要释放的键，具体可用参数见虚拟键代码表
   */
  function keyUp(key: VKey): void

  /**
   * 按下并释放指定的键
   * @param key 要按下并释放的键，具体可用参数见虚拟键代码表
   */
  function keyPress(key: VKey): void

  /**
   * 设置你编写脚本环境的游戏分辨率和DPI缩放
   * @param width 游戏宽度
   * @param height 游戏高度
   * @param dpi DPI缩放比例，默认为1
   */
  function setGameMetrics(width: number, height: number, dpi?: number): void

  /**
   * 移动鼠标相对于当前位置的偏移量
   * @param x 水平偏移量
   * @param y 垂直偏移量
   */
  function moveMouseBy(x: number, y: number): void

  /**
   * 移动鼠标到指定位置
   * @param x 目标位置的X坐标
   * @param y 目标位置的Y坐标
   */
  function moveMouseTo(x: number, y: number): void

  /**
   * 在指定位置点击鼠标左键
   * @param x 目标位置的X坐标
   * @param y 目标位置的Y坐标
   */
  function click(x: number, y: number): void

  /** 点击鼠标左键 */
  function leftButtonClick(): void
  /** 按下鼠标左键 */
  function leftButtonDown(): void
  /** 释放鼠标左键 */
  function leftButtonUp(): void

  /** 点击鼠标右键 */
  function rightButtonClick(): void
  /** 按下鼠标右键 */
  function rightButtonDown(): void
  /** 释放鼠标右键 */
  function rightButtonUp(): void

  /** 点击鼠标中键 */
  function middleButtonClick(): void
  /** 按下鼠标中键 */
  function middleButtonDown(): void
  /** 释放鼠标中键 */
  function middleButtonUp(): void

  /**
   * 捕获游戏区域的图像，用于图像识别
   * @returns ImageRegion
   */
  function captureGameRegion(): ImageRegion

  /**
   * 键入文本
   * @param text 要输入的文本
   */
  function inputText(text: string): void

  interface Callback<T> {
    (error?: string, context?: T): void
  }

  // 文件读取
  // https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/Core/Script/Dependence/LimitedFile.cs
  class File {
    /**
     * 读取指定文件夹内所有文件和文件夹的路径
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
     * @param callback 回调函数
     * @param append 是否追加模式，默认为 false 表示覆盖写入
     */
    writeText(path: string, content: string, append?: boolean): Promise<boolean>
    WriteText(path: string, content: string, append?: boolean): Promise<boolean>
    writeText(path: string, content: string, callback?: Callback<boolean>, append?: boolean): Promise<boolean>
    WriteText(path: string, content: string, callback?: Callback<boolean>, append?: boolean): Promise<boolean>
  }

  const file: File

  // 日志
  // https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/Core/Script/Dependence/Log.cs
  class Log {
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

  const log: Log

  // 发送通知
  // https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/Core/Script/Dependence/Notification.cs
  class Notification {
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

  const notification: Notification

  // 原神相关
  class Point2f {
    x: number
    X: number
    y: number
    Y: number
  }

  // https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/GameTask/Common/Map/Maps/Base/MapTypes.cs
  type MapType = 'Teyvat' // 提瓦特大陆
    | 'TheChasm' // 层岩巨渊
    | 'Enkanomiya' // 渊下宫
    | 'SeaOfBygoneEras' // 旧日之海
    | 'AncientSacredMountain' // 远古圣山

  type ForceCountry = string

  // 支持的冒险家协会国家名
  type AdventurersGuildCountry = '稻妻' | '枫丹' | '璃月' | '蒙德' | (string & {})

  // 支持的合成台国家名
  type CraftingBenchCountry = '稻妻' | '枫丹' | '璃月' | '蒙德' | (string & {})

  // 钓鱼时间策略
  type FishingTimePolicy = 0 // 全天
    | 1 // 白天
    | 2 // 夜晚
    | 3 // 不调

  // https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/Core/Script/Dependence/Genshin.cs
  class Genshin {
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
    tp(x: number, y: number, force?: boolean): Promise<void>
    Tp(x: number, y: number, force?: boolean): Promise<void>
    tp(x: string, y: string, force?: boolean): Promise<void>
    Tp(x: string, y: string, force?: boolean): Promise<void>

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
    moveMapTo(x: number, y: number, forceCountry?: ForceCountry): Promise<void>
    MoveMapTo(x: number, y: number, forceCountry?: ForceCountry): Promise<void>

    /**
     * 移动大地图到指定坐标
     * @param x 目标X坐标
     * @param y 目标Y坐标
     * @param mapName 地图名称
     * @param forceCountry 强制指定移动大地图时先切换的国家，默认为undefined
     */
    moveIndependentMapTo(x: number, y: number, mapName: MapType, forceCountry?: ForceCountry): Promise<void>
    MoveIndependentMapTo(x: number, y: number, mapName: MapType, forceCountry?: ForceCountry): Promise<void>

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

  const genshin: Genshin

  // 调用其他脚本
  // https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/Core/Script/Dependence/AutoPathingScript.cs
  class PathingScript {
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
  class KeyMouseScript {
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

  const pathingScript: PathingScript
  const keyMouseScript: KeyMouseScript

  // 调用任务

  // https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/GameTask/GameTaskManager.cs#L87-L97
  type RealtimeTimerName = 'AutoPick'
    | 'AutoSkip'
    | (string & {})

  // https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/Core/Script/Dependence/Model/RealTimeTimer.cs
  class RealtimeTimer<N = RealtimeTimerName> {
    /** 实时任务触发器名称 */
    name?: N
    Name?: string
    /**
     * 实时任务触发器时间间隔(毫秒)
     * @default 50
     */
    interval: number
    Interval: number

    constructor()
    constructor(name: N, config?: any)
  }

  // https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/Core/Script/Dependence/Dispatcher.cs#L132-L168
  type SoloTaskName = 'AutoGeniusInvokation'
    | 'AutoWood'
    | 'AutoFight'
    | 'AutoDomain'
    | 'AutoFishing'
    | (string & {})

  // https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/Core/Script/Dependence/Model/SoloTask.cs
  class SoloTask<N = SoloTaskName> {
    /** 独立任务名称 */
    name?: N
    Name?: string

    /** 独立任务配置 */
    config: any
    Config: any

    constructor(name: N, config?: any)
  }

  class CancellationToken {
    /** 取消令牌是否已被请求 */
    readonly isCancellationRequested: boolean
    readonly IsCancellationRequested: boolean
  }

  class CancellationTokenSource {
    /** 关联的取消令牌 */
    readonly token: CancellationToken
    readonly Token: CancellationToken

    cancel(): void
    Cancel(): void
  }

  // https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/Core/Script/Dependence/Dispatcher.cs
  class Dispatcher {
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
     */
    runTask(soloTask: SoloTask, customCt?: CancellationToken): Promise<void>
    RunTask(soloTask: SoloTask, customCt?: CancellationToken): Promise<void>
    runTask(soloTask: SoloTask, customCts: CancellationTokenSource): Promise<void>
    RunTask(soloTask: SoloTask, customCts: CancellationTokenSource): Promise<void>

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

  const dispatcher: Dispatcher

  // 设置
  interface Settings {
    readonly [key: string]: string | boolean
  }

  const settings: Settings
}
