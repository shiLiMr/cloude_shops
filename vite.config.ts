import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [
      vue(),
      vueJsx(),
    ],
    server: {
      //是否自动打开
      open: true,
      //端口号
      port: 8888,
      host: 'localhost',
      //代理 跨域
      proxy: {
        [env.VITE_APP_API_URL]: {
          target: 'http://qnadmin.9yuecloud.com/dev-api',
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/dev-api/, '')
          rewrite: (path) => path.replace(new RegExp('^' + env.VITE_APP_API_URL), '')
        }
      }
    },

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }

})
