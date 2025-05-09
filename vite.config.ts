import path from 'node:path'

import react from '@vitejs/plugin-react'
import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'
/* Importing features to configure vitest inside vite config.
 * This is a workaround to avoid having to create a separate vitest.config.ts file */
import type { InlineConfig } from 'vitest/node'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    setupFiles: ['./test/setup.ts'],
    environment: 'happy-dom',
  },
} as UserConfig & {
  test: InlineConfig
})
