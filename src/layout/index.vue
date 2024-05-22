<template>
 <div class="common-layout">
    <el-container>
      <!-- aside -->
      <layaside></layaside>
      <el-container direction="vertical">
        <!-- header -->
        <layoutheader></layoutheader>
        <!-- main -->
        <layoutmain>
          
        </layoutmain>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang='ts'>
import { useUserInforStore } from '@/stores/userinfor'
const store = useUserInforStore()
store.getUserInfo()
import { defineAsyncComponent } from 'vue';
const layaside = defineAsyncComponent(() => import('../layout/layaside/index.vue'))
const layoutheader = defineAsyncComponent(() => import('../layout/layheader/index.vue'))
const layoutmain = defineAsyncComponent(() => import('../layout/laymain/index.vue'))


</script>
<style lang='scss' scoped>




</style>