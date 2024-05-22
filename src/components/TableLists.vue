<template>
    <el-table :data="tableData" style="width: 100%" stripe border>
        <template v-for="(item, index) in colums" :key="index">
            <el-table-column v-if="!item.type" :prop="item.prop" :label="item.label" :width="item.width || ''"
                :align="item.align || 'center'" :sortable ="item.sortable  || false" />
            <el-table-column v-if="item.type"  :label="item.label" :width="item.width || ''"
                :align="item.align || 'center'" :fixed="item.fixed || false">
                <template #default="scope">
                    <slot :name="item.type" :scope="scope"></slot>
                </template>
            </el-table-column>

        </template>

    </el-table>
</template>
<script setup lang='ts'>
defineProps(['tableData', 'colums'])

</script>
<style lang='scss' scoped></style>