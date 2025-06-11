# BetterGI JS 脚本构建模板

## 快速开始

> [!Note]
> 请确保你已经安装了 Node.js 环境，并正确配置了 npm 全局安装路径。

### 安装依赖

```bash
npm install
```

### 打包构建

打包好后的脚本默认输出目录是 `dist`，你也可以修改 [tsup.config.ts](./tsup.config.ts) 文件修改输出目录 `outDir`。

```bash
npm run build
```

### 动态调试

> [!Note]
> BetterGI JS 脚本目录获取方法：启动 BetterGI，在全自动 -> JS 脚本点击 "打开脚本目录" 按钮，打开的目录即为 BetterGI JS 脚本目录。

1. 修改 [public/manifest.json](./public/manifest.json) 文件，更新你的脚本信息。
2. 修改 [tsup.config.ts](./tsup.config.ts) 文件，修改 `outDir` 选项为你的 BetterGI JS 脚本目录，如：

   ```typescript
   import { defineConfig } from 'tsup'

   export default defineConfig({
     // ...
     // outDir: 'dist',
     // 记得添加你的脚本名 {YourPackageName} 以作区分，推荐使用英文
     outDir: '.../BetterGI/User/JsScript/{YourPackageName}',
   })
   ```
3. 打开 BetterGI，在全自动 -> 调度器点击 "新增配置组" -> 在新的配置组中添加你的 JS 脚本。
4. 运行命令 `npm run build:watch` 监听文件变化并实时自动打包。
5. 打开 BetterGI 调度器选择你的配置组，点击 "运行" 按钮，即可运行你的 JS 脚本即可。

## 项目结构

> [!Warning]
> 使用静态资源时，请勿添加 `public` 路径，因为打包后 `public` 下的资源会被复制到打包后的脚本目录下，所以使用时请参考下面示例：
>
> ```typescript
> // 读取 public/assets/data.txt 文件内容，注意不要添加 public 路径。
> const data = file.readPathSync('assets/data.txt')
> ```

```
project
 ├── package.json
 ├── public             // 公共资源目录
 ├── ├── assets         // 静态资源存放目录（推荐存放图片、文本文件、采集路线 JSON 文件等）
 │   ├── manifest.json  // 脚本信息配置文件
 │   ├── README.md      // 脚本使用说明文件
 │   └── settings.json  // 脚本设置配置文件
 ├── README.md          // 项目说明文件
 ├── settings.d.ts      // 脚本变量类型定义文件
 ├── src                // 脚本源码目录
 │   └── index.ts       // 脚本入口文件
 ├── tsconfig.json
 ├── tsup.config.ts     // 打包配置
 └── .gitignore
```

## 分享脚本

1. 打包构建脚本。
2. 阅读 BetterGI [脚本提交规范](https://github.com/babalae/bettergi-scripts-list?tab=readme-ov-file#%E8%84%9A%E6%9C%AC%E6%8F%90%E4%BA%A4%E8%A7%84%E8%8C%83)，了解分享流程。
3. PR 打包好的脚本到 BetterGI 脚本分享平台，等待审核通过。