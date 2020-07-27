//引入axios库
import axios from 'axios'

//重新创建一个实例
let http = axios.create({
    baseURL:'/api'
})

//请求拦截
http.interceptors.request.use(config=>{
    //在请求头中设置token
    let userInfo = sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) :{}
    config.headers.token = userInfo.token
    return config
})

//登录拦截
http.interceptors.response.use(res=>{
    //直接返回 res.data 确定到数据
    return res.data
})

//导出http
export default http