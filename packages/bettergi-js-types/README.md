# bettergi-js-types

**BetterGI JS 脚本的 TypeScript 类型定义。**

## 安装依赖

```bash
npm install --save-dev bettergi-js-types
```

## 类型推断

方式一：在 tsconfig.json 中添加如下配置：推荐

```json5
{
  "compilerOptions": {
    "types": ["bettergi-js-types"]
  }
}
```

方式二：在项目中添加一个全局声明文件 `bettergi-js.d.ts`，并添加如下内容

```typescript
/// <reference types="bettergi-js-types" />
```

## settings 配置推断

在项目中添加一个全局声明文件 `settings.d.ts`，并添加如下内容

```typescript
interface Settings {
  readonly name: string
  readonly open: boolean
}
```

使用时：

```typescript
const name = settings.name // string
const isOpen = settings.open // boolean
```

## 重要信息

除开全局方法名、类名大小写敏感之外，其他任意 BetterGI 注入的类的属性名和方法名大小写不敏感。
所以，此定义文件目前只提供了小驼峰 和 大驼峰(兼容适配，后续可能会逐步废弃) 两种命名风格的定义。

```javascript
// 全局方法
keyDown('W') // 正确
KeyDown('W') // 错误
KEYDOWN('W') // 错误
keydown('W') // 错误

// 类
new soloTask('AutoDomain') // 错误
new SoloTask('AutoDomain') // 正确
new SOLOTASK('AutoDomain') // 错误
new solotask('AutoDomain') // 错误

// 方法
genshin.moveMapTo(0, 0) // 正确 小驼峰
genshin.MoveMapTo(0, 0) // 正确 大驼峰
genshin.MOVEMAPTO(0, 0) // 正确
genshin.movemapto(0, 0) // 正确

// 属性
genshin.screenDpiScale // 正确 小驼峰
genshin.ScreenDpiScale // 正确 大驼峰
genshin.SCREENDPISCALE // 正确
genshin.screendpiscale // 正确
```
