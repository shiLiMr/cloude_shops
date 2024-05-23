import request from "@/utils/request"
import type { createRoleI, getRoleListDataType, getRoleListI } from "./type"
// 角色管理 列表接口 /role/list

export const getRoleListApi = (params: getRoleListI) => {
    return request<getRoleListDataType>('/role/list', 'GET', params)
}

// 添加角色列表 /role/create
export const createRoleApi = (data: createRoleI) => {
    return request<any>('/role/create', 'POST', data)
}
// 删除角色 /role/delete 
export const deleteRoleApi = (id: number) => {
    return request<any>('/role/delete', 'GET', { id })
}