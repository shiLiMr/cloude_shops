import request from "@/utils/request";
import type { LoginParams,userinforData,MenuListDatum } from "./types";
// 登录  /user/lgoin
export const loginApi = (data: LoginParams) => {
    return request('/user/login',"POST",data)
}

// 获取用户信息  /user/info
export const getUserInfoApi = () => {
    return request<userinforData>('/user/info',"GET")
}
 // 获取menulist /user/menus
 export const getMenuListApi = () => {
     return request<MenuListDatum>('/user/menus',"GET")
 }