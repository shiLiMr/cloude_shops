<template>
    <el-dialog v-model="dialogFormVisible" title="分配权限" width="500">
        <el-tree ref="treeRef" style="max-width: 600px" :data="datas" show-checkbox node-key="id"
            :default-expanded-keys="[2, 3]" :default-checked-keys="checkedids" :props="defaultProps"
            default-expand-all />
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取消</el-button>
                <el-button type="primary" @click="submitPersition">
                    确定
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>
<script setup lang='ts'>
import { getMenuListApi, getCheckeIdsdApi, updateRoleApi } from '@/api/permission/role/role';
import type { ChildType, PerDatumType } from '@/api/permission/role/type';
import { ElMessage, type ElTree } from 'element-plus';
import { ref } from 'vue'

const dialogFormVisible = ref(false)// 弹窗状态
const datas = ref<PerDatumType|any>()
const defaultProps = ref({
    children: 'children',
    label: 'menuname',
    value: 'id',
})
const getpersition = async () => {// 获取权限 列表
    const res = await getMenuListApi()
    // console.log(res);
    datas.value = res.data
}
const id = ref<number>(0)// 请求选中ids 所需参数
const checkedids = ref<number[] | any>([])
const getCheckedids = async () => { // 获取选中ids
    const res = await getCheckeIdsdApi(id.value)
    // console.log(res);
    checkedids.value = res.data
}
const treeRef = ref<InstanceType<typeof ElTree>>()// 获取tree 实例
const submitPersition = async () => {// 提交权限
    // 选中子id
    const childids = treeRef.value?.getCheckedKeys()
    console.log(childids);
    //选中夫id
    const fatherids = treeRef.value?.getHalfCheckedKeys()
    console.log(fatherids);
    const resids = [...childids!, ...fatherids!]
    console.log(resids);
    const res = await updateRoleApi({ roleid: id.value, menuIds: childids })
    console.log(res);
    dialogFormVisible.value = false
    if (res.code === 200) {
        ElMessage.success('授权成功！')
    }
}
// 开启弹出框
const opendia = (ids: number) => {
    dialogFormVisible.value = true
    id.value = ids
    getpersition()
    getCheckedids()
}
// 暴露子组件方法
defineExpose({
    opendia,
})


</script>
<style lang='scss' scoped></style>