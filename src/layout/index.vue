<template>
 <div class="common-layout">
    <el-container>
      <el-aside width="200px" style="background-color: aquamarine;">Aside</el-aside>
      <el-container>
        <el-header style="background-color: bisque;">Header</el-header>
        <el-main style="background-color: pink;">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang='ts'>
import {getMenuListApi} from '@/api/login/login'
import type {MenuListDatum} from "@/api/login/types"
import { ref } from 'vue';
import { useUserInforStore } from '@/stores/userinfor'
const store = useUserInforStore()
store.getUserInfo()

const menuListdata=ref<MenuListDatum>()
const getmenus=async()=>{
   const res= await getMenuListApi()
   console.log(res);
   menuListdata.value=res.data
}
getmenus()

</script>
<style lang='scss' scoped>




</style>