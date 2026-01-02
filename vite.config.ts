import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

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
      external: ['@bedard/hexchess', 'vue'],
    },
  },
  plugins: [
    dts({
      include: ['src/**/*'],
      outDir: 'dist',
      rollupTypes: true,
    }),
    tailwindcss(),
    vue({
      template: {
        compilerOptions: {
          nodeTransforms: [
            (node) => {
              // remove data-testid attributes from production build
              if (node.type === 1 && node.props) {
                node.props = node.props
                  .filter(prop =>
                    !(prop.type === 6 && prop.name === 'data-testid')
                    && !(prop.type === 7 && prop.name === 'bind' && prop.arg?.type === 4 && prop.arg.content === 'data-testid'),
                  )
              }
            },
          ],
        },
      },
    }),
  ],
  resolve: {
    alias: {
      lib: resolve(__dirname, 'src/lib'),
      sandbox: resolve(__dirname, 'src/sandbox'),
    },
  },
  server: {
    open: true,
    port: 3000,
  },
})
