import type { ImageRegion } from './rec'

// https://bettergi.com/feats/append/keycodes.html
// https://learn.microsoft.com/zh-cn/windows/win32/inputdev/virtual-key-codes
/** 游戏内按键 */
type Key = 'LBUTTON' | 'RBUTTON' | 'CANCEL' | 'MBUTTON' | 'XBUTTON1' | 'XBUTTON2' | 'BACK' | 'TAB' | 'CLEAR' | 'RETURN' | 'SHIFT' | 'CONTROL' | 'MENU' | 'PAUSE' | 'CAPITAL' | 'ESCAPE' | 'SPACE' | 'PRIOR' | 'NEXT' | 'END' | 'HOME' | 'LEFT' | 'UP' | 'RIGHT' | 'DOWN' | 'SELECT' | 'PRINT' | 'EXECUTE' | 'SNAPSHOT' | 'INSERT' | 'DELETE' | 'HELP' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z' | 'LWIN' | 'RWIN' | 'APPS' | 'NUMPAD0' | 'NUMPAD1' | 'NUMPAD2' | 'NUMPAD3' | 'NUMPAD4' | 'NUMPAD5' | 'NUMPAD6' | 'NUMPAD7' | 'NUMPAD8' | 'NUMPAD9' | 'MULTIPLY' | 'ADD' | 'SEPARATOR' | 'SUBTRACT' | 'DECIMAL' | 'DIVIDE' | 'F1' | 'F2' | 'F3' | 'F4' | 'F5' | 'F6' | 'F7' | 'F8' | 'F9' | 'F10' | 'F11' | 'F12' | 'F13' | 'F14' | 'F15' | 'F16' | 'F17' | 'F18' | 'F19' | 'F20' | 'F21' | 'F22' | 'F23' | 'F24' | 'NUMLOCK' | 'SCROLL' | 'LSHIFT' | 'RSHIFT' | 'LCONTROL' | 'RCONTROL' | 'LMENU' | 'RMENU'

// 前缀
type AddVKPrefix<T> = `VK_${T}`

/** 按键映射 */
type VKey = AddVKPrefix<Key> // VK_ 前缀
  | Key // 原始键名
  | Lowercase<AddVKPrefix<Key>> // VK_ 前缀的小写形式
  | Lowercase<Key> // 原始键名的小写形式
  | (string & {}) // 任意字符串

// https://github.com/babalae/better-genshin-impact/blob/main/BetterGenshinImpact/Core/Script/Dependence/GlobalMethod.cs
/**
 * 使当前任务休眠指定的毫秒数
 * @param millisecondsTimeout 休眠时间，单位为毫秒
 */
export function sleep(millisecondsTimeout: number): Promise<void>

/**
 * 按下指定的键
 * @param key 要按下的键，具体可用参数见虚拟键代码表
 */
export function keyDown(key: VKey): void

/**
 * 释放指定的键
 * @param key 要释放的键，具体可用参数见虚拟键代码表
 */
export function keyUp(key: VKey): void

/**
 * 按下并释放指定的键
 * @param key 要按下并释放的键，具体可用参数见虚拟键代码表
 */
export function keyPress(key: VKey): void

/**
 * 设置你编写脚本环境的游戏分辨率和DPI缩放
 * @param width 游戏宽度
 * @param height 游戏高度
 * @param dpi DPI缩放比例，默认为1
 */
export function setGameMetrics(width: number, height: number, dpi?: number): void

/**
 * 移动鼠标相对于当前位置的偏移量
 * @param x 水平偏移量
 * @param y 垂直偏移量
 */
export function moveMouseBy(x: number, y: number): void

/**
 * 移动鼠标到指定位置
 * @param x 目标位置的X坐标
 * @param y 目标位置的Y坐标
 */
export function moveMouseTo(x: number, y: number): void

/**
 * 在指定位置点击鼠标左键
 * @param x 目标位置的X坐标
 * @param y 目标位置的Y坐标
 */
export function click(x: number, y: number): void

/** 点击鼠标左键 */
export function leftButtonClick(): void

/** 按下鼠标左键 */
export function leftButtonDown(): void

/** 释放鼠标左键 */
export function leftButtonUp(): void

/** 点击鼠标右键 */
export function rightButtonClick(): void

/** 按下鼠标右键 */
export function rightButtonDown(): void

/** 释放鼠标右键 */
export function rightButtonUp(): void

/** 点击鼠标中键 */
export function middleButtonClick(): void

/** 按下鼠标中键 */
export function middleButtonDown(): void

/** 释放鼠标中键 */
export function middleButtonUp(): void

/** 捕获游戏区域的图像，用于图像识别 */
export function captureGameRegion(): ImageRegion

/**
 * 键入文本
 * @param text 要输入的文本
 */
export function inputText(text: string): void
