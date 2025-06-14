import { mouseSmoothDrag } from 'bettergi-js-func'

(async () => {
  try {
    await genshin.returnMainUi()
    keyPress('VK_M')
    await sleep(1000)
    await mouseSmoothDrag(0, 0, 960, 540, 3000)
  }
  catch (error) {
    log.error((error as Error).message)
  }
  finally {
    await genshin.returnMainUi()
  }
})()
