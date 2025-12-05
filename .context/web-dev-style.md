# Web 開發風格指南

## 📁 專案結構

### Next.js App Router 結構
```
my-app/
├── app/
│   ├── (auth)/                 # 路由群組
│   │   ├── login/
│   │   └── register/
│   ├── dashboard/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   ├── api/                    # API 路由
│   │   └── users/
│   │       └── route.ts
│   ├── layout.tsx              # 根 Layout
│   └── page.tsx                # 首頁
│
├── components/                 # React 元件
│   ├── ui/                     # shadcn/ui 元件
│   ├── forms/                  # 表單元件
│   └── layouts/                # 版面元件
│
├── lib/                        # 工具函數
│   ├── db.ts                   # 資料庫連線
│   ├── auth.ts                 # 認證邏輯
│   └── utils.ts                # 通用工具
│
├── types/                      # TypeScript 型別定義
│   └── index.ts
│
└── public/                     # 靜態資源
    └── images/
```

## 🎨 命名規範

### 檔案命名
- React 元件：`PascalCase.tsx`（UserProfile.tsx）
- 工具函數：`camelCase.ts`（formatDate.ts）
- API 路由：`route.ts`（Next.js App Router）
- 樣式：`kebab-case.css`（user-profile.css）

### 變數命名
```typescript
// ✅ 推薦
const userName = 'Jimmy';
const isLoggedIn = true;
const fetchUserData = async () => {};
const UserProfileCard = () => {};

// ❌ 避免
const user_name = 'Jimmy';        // snake_case（非 JS 慣例）
const is_logged_in = true;
const x = async () => {};         // 無意義命名
```

## 🧩 React 元件風格

### 函數元件範本
```typescript
import { FC } from 'react';

interface UserCardProps {
  name: string;
  email: string;
  avatarUrl?: string;
}

/**
 * 使用者卡片元件
 * 顯示使用者的基本資訊，包括頭像、姓名和電子郵件
 */
export const UserCard: FC<UserCardProps> = ({ name, email, avatarUrl }) => {
  return (
    <div className="rounded-lg border p-4">
      {avatarUrl && (
        <img
          src={avatarUrl}
          alt={`${name} 的頭像`}
          className="h-12 w-12 rounded-full"
        />
      )}
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">{email}</p>
    </div>
  );
};
```

### 自訂 Hook 範本
```typescript
import { useState, useEffect } from 'react';

/**
 * 使用者資料 Hook
 * 從 API 獲取並管理使用者資料
 *
 * @param userId - 使用者 ID
 * @returns 使用者資料、載入狀態、錯誤資訊
 */
export function useUser(userId: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchUser(userId)
      .then(setUser)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [userId]);

  return { user, loading, error };
}
```

## 🔌 API 開發風格

### Fastify 路由範本
```typescript
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

// Zod Schema 驗證
const CreateUserSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  password: z.string().min(8),
});

type CreateUserDTO = z.infer<typeof CreateUserSchema>;

/**
 * 註冊使用者路由
 */
export async function userRoutes(fastify: FastifyInstance) {
  // POST /api/users - 建立使用者
  fastify.post<{ Body: CreateUserDTO }>(
    '/users',
    async (req: FastifyRequest<{ Body: CreateUserDTO }>, reply: FastifyReply) => {
      try {
        // 驗證輸入
        const data = CreateUserSchema.parse(req.body);

        // 商業邏輯
        const user = await createUser(data);

        // 返回結果（不含密碼）
        return reply.code(201).send({
          id: user.id,
          name: user.name,
          email: user.email,
        });
      } catch (error) {
        if (error instanceof z.ZodError) {
          return reply.code(400).send({ error: '輸入驗證失敗', details: error.errors });
        }

        fastify.log.error(error);
        return reply.code(500).send({ error: '伺服器錯誤' });
      }
    }
  );
}
```

## 🗄️ 資料庫風格

### Drizzle ORM Schema
```typescript
import { pgTable, serial, varchar, timestamp } from 'drizzle-orm/pg-core';

/**
 * 使用者資料表
 */
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  passwordHash: varchar('password_hash', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// TypeScript 型別推導
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
```

## 🎯 TypeScript 最佳實踐

### 型別定義
```typescript
// ✅ 推薦：使用 interface 定義物件結構
interface User {
  id: number;
  name: string;
  email: string;
}

// ✅ 推薦：使用 type 定義聯合型別或複雜型別
type UserRole = 'admin' | 'user' | 'guest';
type ApiResponse<T> = { data: T } | { error: string };

// ❌ 避免：使用 any
function processData(data: any) { }  // ❌

// ✅ 使用 unknown 或具體型別
function processData(data: unknown) {
  if (typeof data === 'string') {
    // TypeScript 知道這裡 data 是 string
  }
}
```

---

## 📦 套件版本建議（2025年12月）

```json
{
  "dependencies": {
    "next": "^15.1.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "fastify": "^5.2.0",
    "drizzle-orm": "^0.36.0",
    "zod": "^3.24.0",
    "@tanstack/react-query": "^5.62.0"
  },
  "devDependencies": {
    "typescript": "^5.7.0",
    "eslint": "^9.17.0",
    "prettier": "^3.4.2",
    "vitest": "^3.0.0"
  }
}
```
