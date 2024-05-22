// 全局路由守卫
import router from './router'


router.beforeEach((to, from, next) => {

    // 判断用户是否登录
    const token = localStorage.getItem('token')
    const widthList=['/login']

    if ( token){
        if(to.path==='/login'){
            return next({path:from.path})
        }
        next()
    }else{
        if(widthList.includes(to.path)){
           return next()
        }else{
            next('/login')
        }
    }
})