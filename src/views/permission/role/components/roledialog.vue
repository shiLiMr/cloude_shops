<template>
    <el-drawer v-model="drawer" title="创建角色" direction="rtl" :before-close="handleClose" :close-on-click-modal="false">
        <el-form ref="ruleFormRef" style="max-width: 600px" :model="ruleForm" :rules="rules" label-width="auto"
            class="demo-ruleForm" status-icon>
            <el-form-item label="角色名称" prop="rolename">
                <el-input v-model="ruleForm.rolename" placeholder="请输入账户名称" />
            </el-form-item>
            <el-form-item label="角色说明" prop="remark">
                <el-input v-model="ruleForm.remark" placeholder="如: 超级管理员" />
            </el-form-item>
        </el-form>
        <template #footer>
            <el-button @click="drawer = false">取消</el-button>
            <el-button type="primary" @click="submitForm">确定</el-button>
        </template>
    </el-drawer>
</template>
<script setup lang='ts'>
import type { createRoleI } from '@/api/permission/role/type';
import { ref } from 'vue'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import { createRoleApi } from '@/api/permission/role/role';

const drawer = ref(false)//抽屉开关
const ruleFormRef = ref<FormInstance>()
const ruleForm = ref<createRoleI>({
    rolename: '',
    remark: ''
})
const rules = ref<FormRules<createRoleI>>({
    rolename: [
        { required: true, message: '请输入角色名称', trigger: 'blur' },
    ],
    remark: [
        { required: true, message: '请输入角色描述', trigger: 'blur' },]
})

const handleClose = () => {
    drawer.value = false
}
const  emits=defineEmits(['getRoleList'])
const submitForm = () => {
    ruleFormRef.value?.validate(async (valid: boolean) => {
        if (!valid) return
        const res = await createRoleApi(ruleForm.value)
        console.log(res);
        if (res.code == 200) {
            ElMessage.success('创建成功')
            drawer.value = false
            ruleFormRef.value?.resetFields()
            emits('getRoleList')
        } else {
            ElMessage.error('创建失败')
        }
    })
}
const openDialog = () => {
    drawer.value = true
}
// 暴露子组件方法
defineExpose({
    openDialog
})

</script>
<style lang='scss' scoped></style>