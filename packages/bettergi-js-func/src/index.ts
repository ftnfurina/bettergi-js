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
