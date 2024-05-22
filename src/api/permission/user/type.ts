// 获取用户列表 /user/list
export interface getUserList {
    pageNum?: string|number;
    pageSize?: string|number;
    total?: string|number;
    username?: string;
}
// 用户列表返回参数
export interface UserListDataType {
    list: ListType[];
    total: number;
    [property: string]: any;
}

export interface ListType {
    age?: number;
    createdAt?: string;
    deviceid?: string;
    firm?: Firm;
    gender?: number;
    grade?: string;
    id?: number;
    num?: number;
    phone?: string;
    province?: string;
    role?: Role;
    school?: string;
    status?: number;
    type?: number;
    updatedAt?: string;
    username?: string;
    [property: string]: any;
}

export interface Firm {
    addr: string;
    createdAt: string;
    id: number;
    name: string;
    updatedAt: string;
    [property: string]: any;
}

export interface Role {
    createdAt: string;
    id: number;
    remark: string;
    rolename: string;
    updatedAt: string;
    [property: string]: any;
}