import request from '@/utils/request';
import type { getUserList, UserListDataType } from './type';

// 获取用户列表
export const getUserListApi=(params: getUserList) =>{
    return request<UserListDataType>('/user/list',"GET",params)
}