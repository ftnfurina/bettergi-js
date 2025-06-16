import type * as rec from 'bettergi-js-types/types/rec'

/**
 * 自适应 16:9 缩放的 OCR 对象
 * @param x X 坐标
 * @param y Y 坐标
 * @param w 宽度
 * @param h 高度
 */
export function autoZoomOcr(x: number, y: number, w: number, h: number): rec.RecognitionObject {
  const ratio = genshin.scaleTo1080PRatio
  return RecognitionObject.ocr(x * ratio, y * ratio, w * ratio, h * ratio)
}

/** 定时器 */
export interface Timer {
  /** 重置定时器 */
  reStart: () => void
  /** 是否超时 */
  isTimeout: () => boolean
}

/**
 * 创建一个定时器
 * @param timeout 超时时间(毫秒)
 */
export function createTimer(timeout: number): Timer {
  let time: number = Date.now()
  return Object.freeze({
    reStart() {
      time = Date.now()
    },
    isTimeout() {
      return Date.now() - time >= timeout
    },
  })
}
