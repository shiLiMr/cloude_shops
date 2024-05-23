<template>
    <div class="role">
        <el-card class="role-top">
            <el-form :model="SearchForm" label-width="auto" style="max-width: 600px" :inline="true">
                <el-form-item label="菜单名称:">
                    <el-input v-model="SearchForm.rolename" placeholder="请输入菜单名称" clearable />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" icon="Search" @click="SearchFormListData">查询</el-button>
                    <el-button style="margin-left: 60px;" type="primary" icon="Plus" @click="addRole">创建角色</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <!-- table 表格 -->
        <el-card>
            <tablelists :tableData="tableData" :colums="colums">
                <!-- 创建时间 -->
                <template #createtime="{ scope }">
                    {{ new Date(scope.row.createdAt).toLocaleString() }}
                </template>
                <!-- 操作 -->
                <template #option="{ scope }">
                    <el-button type="primary" link>授权</el-button>
                    <el-button type="danger" link @click="delRole(scope.row.id)">删除</el-button>
                </template>
            </tablelists>
        </el-card>
        <!-- 抽屉 -->
        <roledialog ref="Roledialogs" @getRoleList="SearchFormListData()"></roledialog>
    </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue'
import { getRoleListApi, deleteRoleApi } from '@/api/permission/role/role'
import type { RoleListType, getRoleListI } from '@/api/permission/role/type'
import { defineAsyncComponent } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
const tablelists = defineAsyncComponent(() => import('@/components/TableLists.vue'))

const roledialog = defineAsyncComponent(() => import('./components/roledialog.vue'))

const SearchForm = ref<getRoleListI>({ // 请求列表参数
    rolename: '',
    pageNum: 1,
    pageSize: 10
})
const colums = [
    {
        label: '角色id',
        prop: 'id',
    },
    {
        label: '角色名称',
        prop: 'rolename',
    },
    {
        label: '角色说明',
        prop: 'remark',
    },
    {
        label: '创建时间',
        prop: 'createdAt',
        type: 'createtime',
        width: '200px'
    },
    {
        label: '操作',
        type: 'option',
        width: '150px'

    }

]
const tableData = ref<RoleListType[]>() //角色列表数据
const total = ref<number>(0)//总条数
const SearchFormListData = async () => {
    tableData.value = []
    //获取角色列表数据
    const res = await getRoleListApi(SearchForm.value)
    console.log(res);
    tableData.value = res.data.list
    total.value = res.data.total
}
SearchFormListData()

const Roledialogs = ref<InstanceType<typeof roledialog>>()
const addRole = () => { // 打开抽屉
    Roledialogs.value?.openDialog()
}
const delRole = (id: number) => {
    ElMessageBox.confirm(
        '确定要删除吗?',
        '提示',
        {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
        }
    )
        .then(async () => {
            const res = await deleteRoleApi(id)
            SearchFormListData()
            console.log(res);
            ElMessage({
                type: 'success',
                message: '删除成功',
            })
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: '取消删除',
            })
        })


}


</script>
<style lang='scss' scoped>
.role-top {
    margin-bottom: 20px;
}
</style>