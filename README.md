# Antigravity Web 全端開發工作空間

一個專為 **JavaScript/TypeScript 全端開發者**設計的輕量級 Google Antigravity 工作空間。

> **English Version**: [Click to Expand](#english-version)

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

---

<details>
<summary id="english-version"><strong>English Version</strong></summary>

# Antigravity Web Full-Stack Workspace

A lightweight Google Antigravity workspace designed for **JavaScript/TypeScript full-stack developers**.

## ✨ Features

- 🌏 **Traditional Chinese First**: All documentation and comments are in Traditional Chinese.
- ⚡ **Modern Tech Stack**: Next.js 15 + React 19 + TypeScript.
- 🎯 **Lightweight Design**: Contains only essential files for a quick start.
- 🤖 **AI-Enhanced**: Built-in rules for the Antigravity AI assistant.
- 🛠️ **Fully Tooled**: Includes tools for frontend, backend, and database development.

## 🚀 Quick Start

### 1. Clone This Template
```bash
git clone <this-repo>
cd antigravity-web-fullstack
```

### 2. Install Dependencies
```bash
npm install
# or
pnpm install
```

### 3. Open Antigravity IDE
```bash
antigravity .
```

### 4. Start Developing
Prompt directly in Antigravity:
> "Help me create a user login page using Next.js App Router and shadcn/ui"

The AI assistant will:
1. Generate a plan in `artifacts/plans/`.
2. Generate code using the tools in `tools/`.
3. Log the process in `artifacts/logs/`.

## 📁 Project Structure

```
antigravity-web-fullstack/
├── .antigravity/
│   └── rules.md              # AI assistant behavior rules
├── .context/
│   ├── web-dev-style.md      # Development style guide
│   └── tech-stack.md         # Tech stack reference
├── mission.md                # Project mission definition
├── artifacts/                # AI-generated outputs
├── tools/                    # Development tools (JS/TS)
└── package.json
```

## 🛠️ Tech Stack

### Frontend
- Next.js 15 (App Router)
- React 19
- TypeScript 5.7
- TailwindCSS + shadcn/ui

### Backend
- Node.js + Fastify
- Drizzle ORM
- PostgreSQL

### Deployment
- Vercel (Frontend)
- Railway (Backend)

## 📖 Usage

### Example 1: Generate a React Component
Prompt in Antigravity:
> "Use frontend-tools to generate a UserProfile component with name, email, and avatarUrl props"

### Example 2: Create an API Endpoint
> "Create a GET /api/users endpoint that queries all users from the database"

### Example 3: Database Schema
> "Design a posts table with title, content, authorId, and createdAt fields"

## 🎯 Workflow

1. **Define Requirement** → AI understands the task.
2. **Generate Plan** → A detailed plan in `artifacts/plans/`.
3. **Execute Development** → Generate code using `tools/`.
4. **Log & Reflect** → Learning log in `artifacts/logs/`.

## 📝 Customization

### Modify Tech Stack
Edit `.context/tech-stack.md` and `mission.md`.

### Adjust AI Behavior
Edit `.antigravity/rules.md`.

### Add New Tools
Add `.js` or `.ts` files to the `tools/` directory.

## 🤝 Contributing

Issues and Pull Requests are welcome!

## 📄 License

MIT License

---

**Developed with the assistance of the Antigravity AI assistant** 🚀

</details>