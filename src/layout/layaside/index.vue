<template>
    <el-aside :class="store.isCollapse ? 'aside-60' : 'aside-200'" >
        <div class="logo">
            <img src="http://qnadmin.9yuecloud.com/assets/eye-logo-04jUtJVT.png" alt="">
            <div v-if="!store.isCollapse" style="white-space: nowrap;">青牛前端</div>
        </div>
        <!-- menus -->
        <el-menu :default-openeds="['/permission']" active-text-color="#ffd04b" background-color="transparent" class="el-menu-vertical-demo"
         :default-active="$route.path" router text-color="#fff" :collapse="store.isCollapse">
            <el-menu-item index="/dashboard/home">
                <svg-icon icon="ChromeFilled"></svg-icon>
                <span>面版</span>
            </el-menu-item>
            <el-sub-menu :index="item.link" v-for="(item, index) in menuListdata" :key="item.id">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>{{ item.menuname }}</span>
                </template>

                <el-menu-item :index="it.link" v-for="(it, index) in item.children" :key="index">{{ it.menuname }}</el-menu-item>

            </el-sub-menu>

        </el-menu>
    </el-aside>
</template>
<script setup lang='ts'>
import { getMenuListApi } from '@/api/login/login'
import type { MenuListDatum } from "@/api/login/types"
import { ref } from 'vue';
import { useUserInforStore } from '@/stores/userinfor'
const store = useUserInforStore()

const menuListdata = ref<MenuListDatum>()
const getmenus = async () => {
    const res = await getMenuListApi()
    console.log(res);
    menuListdata.value = res.data
}
getmenus()


</script>
<style lang='scss' scoped>
.aside-60{
    width: 60px !important;
    transition: width 0.5s !important;
}
.aside-200{
    width: 200px !important;
    transition: width .5s !important;
}
.el-aside{
    background-color: #001529;
    color: #fff;
    .el-menu-item.is-active{
        background-color: #409eff !important;
        color: #fff;
    }
    .el-sub-menu__title,.el-menu-item{
        color: #fff;
        background-color: #001529 !important;
    }
    .el-menu-item:hover{
        background-color: #434343 !important;
    }
}
.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    font-weight: 700;
    font-size: 17px;

    img {
        width: 50px;
        margin-right: 6px;
    }
}
</style>