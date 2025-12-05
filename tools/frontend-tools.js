/**
 * 前端開發工具集
 * 提供 React 元件生成、樣式處理等功能
 */

/**
 * 生成 React 函數元件
 *
 * @param {string} componentName - 元件名稱（PascalCase）
 * @param {Array<{name: string, type: string}>} props - Props 定義
 * @returns {string} 生成的元件代碼
 *
 * @example
 * generateComponent('UserCard', [
 *   { name: 'name', type: 'string' },
 *   { name: 'age', type: 'number' }
 * ])
 */
export function generateComponent(componentName, props = []) {
  const propsInterface = props.length > 0
    ? `interface ${componentName}Props {
  ${props.map(p => `${p.name}: ${p.type};`).join('\n  ')}
}`
    : '';

  const propsDestructure = props.length > 0
    ? `{ ${props.map(p => p.name).join(', ')} }`
    : '';

  return `import { FC } from 'react';

${propsInterface}

/**
 * ${componentName} 元件
 * TODO: 添加元件說明
 */
export const ${componentName}: FC<${componentName}Props> = (${propsDestructure}) => {
  return (
    <div>
      {/* TODO: 實作元件內容 */}
      <h1>${componentName}</h1>
    </div>
  );
};
`;
}

/**
 * 生成 TailwindCSS 樣式類名
 *
 * @param {Object} styles - 樣式物件
 * @returns {string} Tailwind 類名字串
 *
 * @example
 * generateTailwindClass({ padding: 4, margin: 2, rounded: 'lg' })
 * // 返回: "p-4 m-2 rounded-lg"
 */
export function generateTailwindClass(styles) {
  const classMap = {
    padding: (v) => `p-${v}`,
    margin: (v) => `m-${v}`,
    rounded: (v) => `rounded-${v}`,
    bg: (v) => `bg-${v}`,
    text: (v) => `text-${v}`,
  };

  return Object.entries(styles)
    .map(([key, value]) => classMap[key]?.(value))
    .filter(Boolean)
    .join(' ');
}

/**
 * 生成 React Hook Form 表單
 *
 * @param {string} formName - 表單名稱
 * @param {Array<{name: string, type: string, validation: Object}>} fields - 表單欄位
 * @returns {string} 生成的表單元件代碼
 */
export function generateForm(formName, fields) {
  return `import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Zod Schema
const ${formName}Schema = z.object({
  ${fields.map(f => `${f.name}: z.${f.type}()`).join(',\n  ')}
});

type ${formName}Data = z.infer<typeof ${formName}Schema>;

/**
 * ${formName} 表單元件
 */
export function ${formName}() {
  const { register, handleSubmit, formState: { errors } } = useForm<${formName}Data>({
    resolver: zodResolver(${formName}Schema)
  });

  const onSubmit = (data: ${formName}Data) => {
    console.log(data);
    // TODO: 處理表單提交
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      ${fields.map(f => `
      <div>
        <label htmlFor="${f.name}">${f.name}</label>
        <input {...register('${f.name}')} id="${f.name}" />
        {errors.${f.name} && <span className="text-red-500">{errors.${f.name}.message}</span>}
      </div>
      `).join('\n')}

      <button type="submit">送出</button>
    </form>
  );
}
`;
}
