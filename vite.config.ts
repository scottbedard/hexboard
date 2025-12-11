import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/index.ts'),
      fileName: 'index',
      formats: ['es'],
      name: '@bedard/hexboard',
    },
    rollupOptions: {
      external: ['@bedard/hexchess', 'vue']
    }
  },
  plugins: [
    dts({
      include: ['src/**/*'],
      outDir: 'dist',
      rollupTypes: true
    }),
    tailwindcss(),
    vue(),
  ],
  resolve: {
    alias: {
      'lib': resolve(__dirname, 'src/lib'),
      'sandbox': resolve(__dirname, 'src/sandbox'),
    },
  },
  server: {
    open: true,
    port: 3000,
  }
})
