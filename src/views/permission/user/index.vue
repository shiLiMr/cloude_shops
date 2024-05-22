<template>
    <div class="user index-main">
        <el-card class="user-top">
            <el-form :model="SearchForm" label-width="auto" style="max-width: 600px" :inline="true">
                <el-form-item label="菜单名称:">
                    <el-input v-model="SearchForm.username" placeholder="请输入菜单名称" clearable />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" icon="Search" @click="SearchFormListData">查询</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <!-- 表格 -->
        <el-card>
            <tablelists :tableData="tableData" :colums="colums">
                <!-- 创建时间 -->
                <template #createtime="{ scope }">
                    {{ new Date(scope.row.createdAt).toLocaleString() }}
                </template>
                <!-- 账号类型 -->
                <template #type="{ scope }">
                    {{ scope.row.type == 2 ? '机构' : '学校' }}
                </template>
                <!-- 账号状态 -->
                <template #status="{ scope }">
                    {{ scope.row.status == 1 ? '禁用' : '启用' }}
                </template>
                <!-- 性别 -->
                <template #gender="{ scope }">
                    {{ scope.row.gender == 1 ? '男' : '女' }}
                </template>
                <!-- 操作 -->
                <template #option="scope">
                    <el-button type="primary" size="small">编辑</el-button>
                    <el-button type="danger" size="small">删除</el-button>
                    <el-button type="primary" size="small">重置密码</el-button>
                </template>
            </tablelists>

        </el-card>
        <!-- 分页 -->
        <el-row class="row-bg" justify="center" style="margin-top: 15px;">
            <el-pagination v-model:current-page="SearchForm.pageNum" v-model:page-size="SearchForm.pageSize"
                :page-sizes="[100, 200, 300, 400]" layout="total, sizes, prev, pager, next" :total="total"
                @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </el-row>
    </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue'
import { getUserListApi } from '@/api/permission/user/user'
import type { getUserList, ListType } from '@/api/permission/user/type'
import { defineAsyncComponent } from 'vue';
const tablelists = defineAsyncComponent(() => import('@/components/TableLists.vue'))

const colums = [
    {
        label: '序号',
        prop: 'num',
        sortable: true,
    },
    {
        label: '用户姓名',
        prop: 'username',
        width: '95px'
    },
    {
        label: '用户id',
        prop: 'id',
    },
    {
        label: '年龄',
        prop: 'age',
    },
    {
        label: '性别',
        prop: 'gender',
        type: 'gender'
    },
    {
        label: '手机号',
        prop: 'phone',
        width: "120px"
    },
    {
        label: '城市',
        prop: 'province',
        width: "110px"
    },
    {
        label: '学校',
        prop: 'school',
    },
    {
        label: '年级',
        prop: 'grade',
        type: 'grade',
        width: '90px'

    },
    {
        label: '账号类型',
        prop: 'type',
        type: 'type',
        width: '90px'
    },
    {
        label: '帐号状态',
        prop: 'status',
        type: 'status',
        width: '90px'
    },
    {
        label: '企业机构',
        prop: 'firm.name',
        width: '90px',
    },
    {
        label: '所属角色',
        prop: 'role.remark',
        width: '100px',
    },
    {
        label: '创建时间',
        prop: 'createdAt',
        width: '140px',
        type: 'createtime',
    },
    {
        label: '操作',
        type: 'option',
        align: "left",
        fixed: 'right',
        width: '150px'
    },
]

const SearchForm = ref<getUserList>({
    username: '',
    pageNum: 1,
    pageSize: 10,
    total: 0
})

const tableData = ref<ListType>([])
const total = ref<number>(0)
const getuserList = async () => {
    const res = await getUserListApi(SearchForm.value)

    tableData.value = res.data.list
    total.value = res.data.total
    console.log(res.data.list);
}
getuserList()
const SearchFormListData = () => { //查询
    tableData.value = []
    getuserList()
}
const handleSizeChange = (val: number) => { //每页条数
    SearchForm.value.pageSize = val
    getuserList()
}
const handleCurrentChange = (val: number) => { //当前页
    SearchForm.value.pageNum = val
    getuserList()
}



</script>
<style lang='scss' scoped></style>