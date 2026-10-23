import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettierConfig from 'eslint-config-prettier/flat';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // eslint-plugin-react cannot auto-detect the React version under ESLint 10
  // (detectReactVersion throws). Pin it explicitly.
  {
    settings: {
      react: {
        version: '19.2',
      },
    },
  },
  // Must be last: disables ESLint rules that conflict with Prettier formatting.
  prettierConfig,
  globalIgnores([
    '.next/**',
    '.agents/**',
    '.claude/**',
    '.continue/**',
    'AppWeb-React/**',
    'doc/**',
    'docs/AppWeb-React/**',
    'node_modules/**',
    'out/**',
    'build/**',
    'public/**',
    'next-env.d.ts',
    'drizzle/**',
  ]),
]);

export default eslintConfig;
