import axios, { AxiosError, type AxiosInstance, type AxiosRequestConfig, type AxiosResponse, type InternalAxiosRequestConfig, type Method } from "axios";
import { ElLoading } from "element-plus";
const service: AxiosInstance = axios.create({
    // baseURL: "/dev-api", // url = base url + request url
    baseURL: import.meta.env.VITE_APP_API_URL ,
    timeout: 10000, // request timeout
})
// 拦截请求
service.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    // 请求头
    ElLoading.service({ fullscreen: true,text:'疯狂加载中……' })
    const token = localStorage.getItem("token")
    if(token){
        config.headers.Authorization = "Bearer " + token
    }
    return config
},(error:AxiosError)=>{
    return Promise.reject(error)
})
// 响应请求
service.interceptors.response.use((response: AxiosResponse) => {
    setTimeout(()=>{
        ElLoading.service({ fullscreen: true,text:'疯狂加载中……' }).close()
    },900)
        return response.data
    },(error:AxiosError)=>{
        return Promise.reject(error)
    }
)
// 返回数据类型
type dataType<T>={
    code:number,
    msg:string,
    data:T
}
const request =<T = any>(url:string,method:Method="GET",data?:Object,option?:AxiosRequestConfig)=>{
    return service.request<T,dataType <T>>({
        url,
        method,
        [method =="GET" ? "params" : "data"]:data,
        ...option
    })
}

export default request;