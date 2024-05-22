
import {defineStore} from 'pinia'
import {ref,reactive} from 'vue'
import {getUserInfoApi} from '@/api/login/login'


export const useUserInforStore = defineStore('userinfor',()=> {
    const userinfor = ref({
       
    })
    const username= ref<string>('')

    const getUserInfo = async () => {
        const res = await getUserInfoApi()
        console.log(res);
        
        userinfor.value = res.data
    }
    return {
        userinfor,getUserInfo,username,
    }
}, { persist: true })