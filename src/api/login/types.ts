
export interface LoginParams{
    username: string;
    password: string;
    // ...其他参数
}
// 用户数据类型
export interface userinforData {
    age: number;
    createdAt: string;
    deviceid: string;
    gender: number;
    grade: string;
    id: number;
    num: number;
    phone: string;
    province: string;
    role: Role;
    school: string;
    status: number;
    type: number;
    updatedAt: string;
    username: string;
}
export interface Role {
    createdAt: string;
    id: number;
    remark: string;
    rolename: string;
    updatedAt: string;
}

// menus 数据类型
export interface MenuListDatum {
    children: Child[];
    component: string;
    icon: string;
    id: number;
    isParent: boolean;
    link: string;
    menuname: string;
    parentid: number;
    [property: string]: any;
}

export interface Child {
    component: string;
    icon: string;
    id: number;
    isParent: boolean;
    link: string;
    menuname: string;
    parentid: number;
    [property: string]: any;
}
