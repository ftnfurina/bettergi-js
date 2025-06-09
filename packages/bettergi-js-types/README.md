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
