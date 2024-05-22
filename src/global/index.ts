
import type { App } from "vue";
import setElementPlus from "./setElementPlus";
import setElementSvgIcon from "./setElementSvgIcon";


export default {
    
    install(app: App) {
        // 设置element-plus
        app.use(setElementPlus);
        app.use(setElementSvgIcon);
    }
}