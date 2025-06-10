// TODO: 补充完整的类型定义
/** OpenCV Mat 矩阵 */
export type Mat = any

/** C# 数组 */
interface List<T> {
  [Symbol.iterator]: () => IterableIterator<T>
  [index: number]: T
  /** 数量 */
  count: number
  Count: number
}

type INodeConverter = any
type DrawContent = any

// https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/Core/Recognition/RecognitionObject.cs
export class RecognitionObject {
  // TODO: 补充其他内置属性
  /** 模板匹配阈值 */
  threshold: number
  Threshold: number

  /** 是否使用 3 通道匹配 */
  use3Channels: boolean
  Use3Channels: boolean

  /** 初始化模板 */
  // initTemplate(): RecognitionObject
  // InitTemplate(): RecognitionObject

  static readonly ocrThis: RecognitionObject
  static readonly OcrThis: RecognitionObject

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
export class Region {
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

// https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/GameTask/Model/Area/ImageRegion.cs
export class ImageRegion extends Region {
  /** 获取源 OpenCV Mat 矩阵。如果需要会从 Bitmap 转换 */
  readonly srcMat: Mat
  readonly SrcMat: Mat

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
