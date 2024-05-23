export interface getRoleListDataType {
    list: RoleListType[];
    total: number;
    [property: string]: any;
}
export interface RoleListType {
    createdAt: string;
    id: number;
    remark: string;
    rolename: string;
    updatedAt: string;
    [property: string]: any;
}
export interface getRoleListI {
    pageNum: string|number;
    pageSize: string|number;
    rolename?: string;
}
// 添加 角色 参数类型
export  interface createRoleI {
    rolename: string,
    remark: string,
}