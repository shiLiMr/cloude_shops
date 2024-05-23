import request from "@/utils/request"
import type { createRoleI, getRoleListDataType, getRoleListI,PerDatumType } from "./type"
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

// 权限列表数据  /menu/list
export const getMenuListApi = () => {
    return request<PerDatumType>('/menu/list', 'GET')
}
// 选中权限ids数据  /role/menuChecked
export interface Requestts {
    code: number;
    data: number[];
    msg: string;
}
export const getCheckeIdsdApi = (id: number) => {
    return request<Requestts>('/role/menuChecked', 'GET', { id })
}
// 修改权限 /role/addMenu
export const updateRoleApi = (data: any) => {
    return request('/role/addMenu', 'POST', data)
}