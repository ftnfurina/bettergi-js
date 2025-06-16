import { autoZoomOcr } from './utils'

/**
 * 判断是否在多人游戏中
 */
export async function isCoOpMode(): Promise<boolean> {
  await genshin.returnMainUi()
  const gameRegion = captureGameRegion()
  const ocrRegion = gameRegion.find(autoZoomOcr(343, 22, 45, 45))
  const ocrText = ocrRegion.text.trim().toLocaleLowerCase()
  return ocrText.includes('p') || ocrText !== ''
}

/**
 * 获取当前世界玩家人数，读取异常时返回 -1
 */
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
