import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path'
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@const': path.resolve(__dirname, 'src/const'),
    },
  },
  build: {
    target: "esnext", //browsers can handle the latest ES features
  },
})
