<template>
    <hand></hand>
</template>
<script setup lang='ts'>
import { h, resolveComponent } from 'vue'

const props = withDefaults(
    defineProps < { icon: string, size?: string | number, color?: string }>(), {
    size: "16px"
}
)
const hand = h(
    resolveComponent('el-icon'),
    {
        size: props.size,
        color: props.color
    },
    () => (h(resolveComponent(props.icon)))
)


</script>
<style lang='scss' scoped></style>