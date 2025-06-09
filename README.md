# BetterGI JS

BetterGI JS 脚本辅助库。

## 功能

+ [bettergi-js-types](./packages/bettergi-js-types/README.md) - JS 脚本类型定义。
+ [manifest.schema.json](./schema/manifest.schema.json) - `manifest.json` 描述文件校验。
+ [settings.schema.json](./schema/settings.schema.json) - `settings.json` 配置文件校验。

## 示例

+ [PrintTime](./examples/print-time/README.md) - 打印当前时间。

## 校验

在 `.vscode/settings.json` 中添加以下内容，以便在编辑器中校验、提示 `settings.json` 和 `manifest.json` 文件。

```json
{
  "json.schemas": [
    {
      "fileMatch": [
        "/your-project-path/**/settings.json"
      ],
      "url": "https://raw.githubusercontent.com/ftnfurina/bettergi-js/refs/heads/main/schema/settings.schema.json"
    },
    {
      "fileMatch": [
        "/your-project-path/**/manifest.json"
      ],
      "url": "https://raw.githubusercontent.com/ftnfurina/bettergi-js/refs/heads/main/schema/manifest.schema.json"
    }
  ]
}
```
