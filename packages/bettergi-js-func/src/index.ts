import type * as rec from 'bettergi-js-types/types/rec'

/**
 * 平滑移动鼠标
 * @param sx 起始 X 坐标
 * @param sy 起始 Y 坐标
 * @param ex 终止 X 坐标
 * @param ey 终止 Y 坐标
 * @param duration 移动时间(毫秒)
 */
export async function mouseSmoothMove(sx: number, sy: number, ex: number, ey: number, duration: number): Promise<void> {
  const steps = Math.max(Math.floor(duration / (1000 / 60)), 20)
  const points: [x: number, y: number][] = []

  points.push([sx, sy])
  for (let i = 1; i < steps - 1; i++) {
    const t = i / (steps - 1)
    const x = (1 - t) * sx + t * ex
    const y = (1 - t) * sy + t * ey
    points.push([x, y])
  }
  points.push([ex, ey])

  const interval = duration / steps

  for (const [x, y] of points) {
    moveMouseTo(Math.floor(x), Math.floor(y))
    await sleep(Math.floor(interval))
  }
}

/**
 * 平滑拖动鼠标
 * @param sx 起始 X 坐标
 * @param sy 起始 Y 坐标
 * @param ex 终止 X 坐标
 * @param ey 终止 Y 坐标
 * @param duration 移动时间(毫秒)
 */
export async function mouseSmoothDrag(sx: number, sy: number, ex: number, ey: number, duration: number): Promise<void> {
  moveMouseTo(sx, sy)
  leftButtonDown()
  await sleep(50)
  await mouseSmoothMove(sx, sy, ex, ey, duration - 300)
  await sleep(250)
  leftButtonUp()
}

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

/** 判断是否在多人游戏中 */
export async function isCoOpMode(): Promise<boolean> {
  await genshin.returnMainUi()
  const gameRegion = captureGameRegion()
  const ocrRegion = gameRegion.find(autoZoomOcr(343, 22, 45, 45))
  const ocrText = ocrRegion.text.trim().toLocaleLowerCase()
  return ocrText.includes('p') || ocrText !== ''
}

/** 获取当前世界玩家人数，读取异常时返回 -1 */
export async function playerCount(): Promise<number> {
  const coCpMode = await isCoOpMode()
  let count = 1
  if (coCpMode) {
    keyPress('VK_F2')
    await sleep(1000)
    const gameRegion = captureGameRegion()
    const roomInfoRegion = gameRegion.find(autoZoomOcr(590, 94, 693, 41))
    const roomInfoText = roomInfoRegion.text.trim()
    try {
      const playerCountMatch = roomInfoText.match(/(\d+)\/\d+/)
      count = Number.parseInt(playerCountMatch[1])
    }
    catch {
      count = -1
    }
    finally {
      await genshin.returnMainUi()
    }
  }
  return count
}
