import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  build: {
    outDir: 'dist-sandbox',
  },
  plugins: [
    tailwindcss(),
    vue(),
  ],
  resolve: {
    alias: {
      lib: resolve(__dirname, 'src/lib'),
      sandbox: resolve(__dirname, 'src/sandbox'),
    },
  },
})
