# bettergi-js-func

**BetterGI JS 脚本常用函数工具库。**

## 安装依赖

```bash
npm install bettergi-js-func
```

## 使用方法

```typescript
import { mouseSmoothDrag } from 'bettergi-js-func'

(async () => {
  // 鼠标平滑拖动 (0, 870) 到 (1200, 170) 持续 3000ms
  await mouseSmoothDrag(0, 870, 1200, 170, 3000)
})()
```

## 支持函数

+ `mouseSmoothMove`：鼠标平滑移动
+ `mouseSmoothDrag`：鼠标平滑拖动
+ `autoZoomOcr`：自适应缩放OCR对象
+ `createTimer`：创建计时器
+ `isCoOpMode`：是否是多人游戏
+ `playerCount`：获取当前世界的玩家数量
+ `pathExistsSync`：同步判断路径是否存在
+ `readJSONFile`：异步读取JSON文件
+ `readJSONFileSync` ：同步读取JSON文件
+ `writeJSONFile`：异步写入JSON文件
+ `writeJSONFileSync`：同步写入JSON文件

## 使用示例

[UseFunc](https://github.com/ftnfurina/bettergi-js/tree/main/examples/use-func) 使用函数示例。