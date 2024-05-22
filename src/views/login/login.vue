<template>
    <div class="login">
        <div class="login-main">
            <h3>用户登录</h3>
            <p>青牛前端后台管理系统</p>
            <el-form ref="ruleFormRef" style="max-width: 600px" :model="ruleForm" :rules="rules" label-width="auto"
                class="demo-ruleForm" status-icon>
                <el-form-item  prop="username">
                    <el-input placeholder="请输入用户名" v-model="ruleForm.username" />
                </el-form-item>
                <el-form-item  prop="password">
                    <el-input placeholder="请输入用户密码" v-model="ruleForm.password" type="password" show-password />
                </el-form-item>
                <el-form-item>
                    <el-button style="width: 100%;" type="primary" @click="submitForm">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import {loginApi} from '@/api/login/login'
import { useRouter } from 'vue-router'
const router = useRouter();

const ruleFormRef = ref<FormInstance>()
const ruleForm = ref({
    username: '',
    password: '',
})
const rules = ref<FormRules>({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入用户密码', trigger: 'blur' },
    ],
})
const submitForm = () => {
    ruleFormRef.value?.validate(async(valid: boolean) => {
        if (!valid) return
        try {
            const res= await loginApi(ruleForm.value)
        console.log(res)
        if (res.code ==200) {
            ElMessage.success('登陆成功！')
            localStorage.setItem('token',res.data)
            router.push({path:'/'})
        }else{
            ElMessage.error(res.msg)
            return
        }
        } catch (error) {
            console.log(error);
            
        }
    })
}


</script>
<style lang='scss' scoped>
.login {
    width: 100%;
    height: 100vh;
    overflow: hidden;

    .login-main {
        width: 400px;
        text-align: center;
        background: #fff;
        border-radius: 10px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 30px;
        box-sizing: border-box;

       
    }
}
</style>