# Antigravity Web 全端開發工作空間

一個專為 **JavaScript/TypeScript 全端開發者**設計的輕量級 Google Antigravity 工作空間。

## ✨ 特色

- 🌏 **繁體中文優先**：所有文檔、註解使用繁體中文
- ⚡ **現代技術棧**：Next.js 15 + React 19 + TypeScript
- 🎯 **輕量設計**：只包含必要文件，快速上手
- 🤖 **AI 增強**：內建 Antigravity AI 助手規則
- 🛠️ **工具齊全**：前端、後端、資料庫工具

## 🚀 快速開始

### 1. 複製此範本
```bash
git clone <this-repo>
cd antigravity-web-fullstack
```

### 2. 安裝依賴
```bash
npm install
# 或
pnpm install
```

### 3. 開啟 Antigravity IDE
```bash
antigravity .
```

### 4. 開始開發
直接在 Antigravity 中提示：
> "幫我建立一個使用者登入頁面，使用 Next.js App Router 和 shadcn/ui"

AI 助手會：
1. 先在 `artifacts/plans/` 生成計劃
2. 使用 `tools/` 中的工具生成代碼
3. 記錄過程到 `artifacts/logs/`

## 📁 專案結構

```
antigravity-web-fullstack/
├── .antigravity/
│   └── rules.md              # AI 助手行為規則
├── .context/
│   ├── web-dev-style.md      # 開發風格指南
│   └── tech-stack.md         # 技術棧參考
├── mission.md                # 專案任務定義
├── artifacts/                # AI 產出物
├── tools/                    # 開發工具（JS/TS）
└── package.json
```

## 🛠️ 技術棧

### 前端
- Next.js 15 (App Router)
- React 19
- TypeScript 5.7
- TailwindCSS + shadcn/ui

### 後端
- Node.js + Fastify
- Drizzle ORM
- PostgreSQL

### 部署
- Vercel (前端)
- Railway (後端)

## 📖 使用方式

### 範例 1：生成 React 元件
在 Antigravity 中提示：
> "使用 frontend-tools 生成一個 UserProfile 元件，包含 name、email、avatarUrl props"

### 範例 2：建立 API 端點
> "建立一個 GET /api/users 端點，從資料庫查詢所有使用者"

### 範例 3：資料庫 Schema
> "設計一個 posts 資料表，包含 title、content、authorId、createdAt"

## 🎯 工作流程

1. **提出需求** → AI 理解任務
2. **生成計劃** → `artifacts/plans/` 中的詳細計劃
3. **執行開發** → 使用 `tools/` 生成代碼
4. **記錄反思** → `artifacts/logs/` 中的學習日誌

## 📝 自訂設定

### 修改技術棧
編輯 `.context/tech-stack.md` 和 `mission.md`

### 調整 AI 行為
編輯 `.antigravity/rules.md`

### 新增工具
在 `tools/` 目錄新增 `.js` 或 `.ts` 檔案

## 🤝 貢獻

歡迎提交 Issue 或 Pull Request！

## 📄 授權

MIT License

---

**由 Antigravity AI 助手協助開發** 🚀
