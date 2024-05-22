import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name: 'home',
      component: () => import('@/layout/index.vue'),
      redirect:'/dashboard/home',
      children:[
        {
          path:'/dashboard',
          name: 'dashboard',
          meta:{
            title:'首页',
            hidden:false,//是否隐藏
            KeepAlive:true,//是否缓存
          },
          children:[
            {
              path:'/dashboard/home',
              name: 'dashboardhome',
              component: () => import('@/views/dashboard/home.vue'),
              meta:{
                title:'面板',
                hidden:false,//是否隐藏
                KeepAlive:true,//是否缓存
              }
            }
          ]
        },
        {
          path:'/permission',
          name: 'permission',
          meta:{
            title:'权限管理',
            hidden:false,//是否隐藏
            KeepAlive:true,//是否缓存
          },
          children:[
            {
              path:'/permission/user',
              name: 'permissionuser',
              component: () => import('@/views/permission/user/index.vue'),
              meta:{
                title:'用户管理',
                hidden:false,//是否隐藏
                KeepAlive:true,//是否缓存
              }
            },
            {
              path:'/permission/role',
              name: 'permissionrole',
              component: () => import('@/views/permission/role/index.vue'),
              meta:{
                title:'角色管理',
                hidden:false,//是否隐藏
                KeepAlive:true,//是否缓存
              }
            },
            {
              path:'/permission/menu',
              name: 'permissionmenu',
              component: () => import('@/views/permission/menu/index.vue'),
              meta:{
                title:'菜单管理',
                hidden:false,//是否隐藏
                KeepAlive:true,//是否缓存
              }
            }
          ]
        },
        {
          path:'/train',
          name: 'train',
          meta:{
            title:'培训管理',
            hidden:false,//是否隐藏
            KeepAlive:true,//是否缓存
          },
          children:[
            {
              path:'/train/classroom',
              name: 'trainclassroom',
              component: () => import('@/views/train/classroom/index.vue'),
              meta:{
                title:'课堂管理',
                hidden:false,//是否隐藏
                KeepAlive:true,//是否缓存
              }
            },
            {
              path:'/train/afterclass',
              name: 'trainafterclass',
              component: () => import('@/views/train/afterclass/index.vue'),
              meta:{
                title:'课后训练',
                hidden:false,//是否隐藏
                KeepAlive:true,//是否缓存
              }
            },
            {
              path:'/train/character',
              name: 'traincharacter',
              component: () => import('@/views/train/character/index.vue'),
              meta:{
                title:'品格教育',
                hidden:false,//是否隐藏
                KeepAlive:true,//是否缓存
              }
            }
          ]
        }
      ]
    },
    {
      path:'/login',
      name: 'login',
      component: () => import('@/views/login/login.vue')
    }
  ]
})

export default router
