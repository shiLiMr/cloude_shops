<template>
<el-main >

    <router-view v-slot="{Component}">
        <Transition name="fac" mode="out-in">
            <component :is="Component" />
        </Transition>
    </router-view>
</el-main>
</template>
<script setup lang='ts'>



</script>
<style lang='scss' scoped>
.el-main{
    padding: 15px !important;
}
.fac-enter-active,
.fac-leave-active {
  transition: all 0.5s ease;
}

.fac-enter-from,
.fac-leave-to {
  opacity: 0;
}
.fac-enter-from{
    transform: translateY(100%);
}
.fac-leave-to{
    transform: translateY(-100%);
}
</style>