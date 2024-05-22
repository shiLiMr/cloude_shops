<template>
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
                <template #dropdown >
                    <el-dropdown-menu>
                        <el-dropdown-item @click="Tui">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </el-header>
</template>
<script setup lang='ts'>
import { ref, watch } from 'vue'
import { useUserInforStore } from '@/stores/userinfor'
const store = useUserInforStore()
import { useRoute } from 'vue-router';
const route = useRoute()
console.log(route);


const isList = ref<any>([])
watch(route, (newValue, oldValue) => {
    isList.value = newValue.matched.filter(item => item.meta.title)
}, {
    deep: true,
    immediate: true,
}
)
const Tui = () => {
    localStorage.clear()
    location.reload()
}

</script>
<style lang='scss' scoped>
.el-header{
    display: flex;
    box-sizing: border-box;
    padding: 0 15px;
    justify-content: space-between;
    align-items: center;
    .header-left{
       .svgicons{
        margin-right: 15px;
       }
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>