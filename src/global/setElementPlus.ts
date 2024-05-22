
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import type { App } from 'vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'


// 全局引入
export default {
    install: (app: App) => {
        app.use(ElementPlus, {
            locale: zhCn,
          })
    }
}