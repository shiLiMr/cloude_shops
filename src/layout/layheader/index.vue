<template>
    <div>
        <el-header style="background-color: bisque;">
            <div class="header-left">
                <svg-icon class="svgicons" @click="store.isCollapse = !store.isCollapse" size="20px"
                    :icon="store.isCollapse ? 'Expand' : 'Fold'"></svg-icon>
                <!-- 面包屑 -->
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item v-for="(item, index) in isList" :key="index">{{ item.meta.title
                        }}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="header-right">
                <!-- 下拉菜单 -->
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        admin
                        <el-icon class="el-icon--right">
                            <arrow-down />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="Tui">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </el-header>
        <div class="m">
            <el-tabs v-model="$route.path" type="card" class="demo-tabs" editable @tab-remove="handleTabsEdit"
                @tab-change="once">
                <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>

</template>
<script setup lang='ts'>
import { ref, watch, watchEffect, } from 'vue'
import { useUserInforStore } from '@/stores/userinfor'
const store = useUserInforStore()
import { useRoute, onBeforeRouteUpdate ,useRouter} from 'vue-router';
const route = useRoute()
const router = useRouter()
console.log(route);


const isList = ref<any>([]) // 面包屑数据
watch(route, (newValue, oldValue) => {
    isList.value = newValue.matched.filter(item => item.meta.title)
}, {
    deep: true,
    immediate: true,
}
)

// 监听路由变化
const editableTabs = ref<any>([])
watchEffect(()=>{
    let flag = editableTabs.value.some((item: any) => item.name == route.path)
    if (!flag) {
        editableTabs.value.push({
            title: route.meta.title,
            name: route.path,
        })
    }
})
// onBeforeRouteUpdate((to, from) => { // 路由切换触发函数
//     console.log(to);
// })
const once = (name:string) => {// 点击
    console.log(name);
    router.push({path:name})
}
const handleTabsEdit = (val:any) => {// 删除事件
    console.log(val);
    let res= editableTabs.value.filter((item:any)=>item.name!=val)
    console.log(res);
    editableTabs.value = res
}

const Tui = () => { // 退出登录
    localStorage.clear()
    location.reload()
}

</script>
<style lang='scss' scoped>
.m {
    :deep(.el-tabs__new-tab) {
        visibility: hidden;
    }

    :deep(.el-tabs__item.is-active){
        background-color: #409eff;
        color: #fff;
    }
}

.el-header {
    display: flex;
    box-sizing: border-box;
    padding: 0 15px;
    justify-content: space-between;
    align-items: center;

    .header-left {
        .svgicons {
            margin-right: 15px;
        }

        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>