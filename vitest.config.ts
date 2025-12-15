import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { playwright } from '@vitest/browser-playwright'
import { defineConfig } from 'vitest/config'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

// Get browser from environment variable, default to chromium
const browser = (process.env.VITEST_BROWSER || 'chromium') as 'chromium' | 'firefox' | 'webkit'

export default defineConfig({
  plugins: [
    tailwindcss(),
    vue(),
    vueJsx(),
  ],
  test: {
    browser: {
      provider: playwright(),
      enabled: true,
      instances: [
        { browser },
      ],
    },
    environment: 'jsdom',
    testTimeout: 3000,
  },
  resolve: {
    alias: {
      lib: resolve(__dirname, 'src/lib'),
      sandbox: resolve(__dirname, 'src/sandbox'),
    },
  },
})
