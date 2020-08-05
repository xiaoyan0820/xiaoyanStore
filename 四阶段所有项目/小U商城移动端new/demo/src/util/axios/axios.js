//引入axios库
import axios from 'axios'
//引入路由模块
import router from '../../router'
//重新创建一个实例
let http = axios.create({
    baseURL:'/api'
})

//请求拦截
http.interceptors.request.use(config=>{
    //在请求头中设置token
    let userInfo = sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) :{}
    config.headers.authorization = userInfo.token
    return config
})
//响应拦截
http.interceptors.response.use((res)=>{
    console.log(res.data,'响应全局')
    //一般工作的时候 token 失效作为特殊的拦截，会暴露特殊的code值 3000
    //再响应拦截中 我们会拦截很多全局性错误代码
    if(res.data.code ==403){
        // Message.error(res.data.msg)
        alert('登录失效，请重新登录')
        //如果token失效就返回登录页面
        router.push('/login')
    }
    //全局拦截错误
    return res
})
//登录拦截
http.interceptors.response.use(res=>{
    //直接返回 res.data 确定到数据
    return res.data
})

//导出http
export default http