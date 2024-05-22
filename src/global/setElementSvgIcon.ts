
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { install } from 'element-plus'
import type { App } from 'vue'
import SvgIcon from '@/components/svgicon.vue'

export default{
    install(app:App){
        // 注册element-plus图标
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
        app.component('SvgIcon', SvgIcon)

    }
}