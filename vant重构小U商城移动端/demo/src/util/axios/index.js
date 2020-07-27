//引入重新创建的实例
import http from './axios'

//封装接口
//获取分类信息(首页)
export function getcate() {
  return http.get('/getcate')
}

//获取轮播图信息(首页)
export function getbanner() {
  return http.get('/getbanner')
}
//获取限时秒杀信息(首页)
//秒杀 必须是当天：00：00 到23：59
export function getseckill() {
  return http.get('/getseckill')
}

//获取商品信息(首页)
export function getindexgoods() {
    return http.get('/getindexgoods')
  }

//获取分类树形结构
export function getcatetree() {
  return http.get('/getcatetree')
}
//获取分类商品
export function getgoods(params) {
  return http.get('/getgoods', {
    params
  })
}
//获取一个商品信息
export function getgoodsinfo(params) {
  return http.get('/getgoodsinfo', {
    params
  })
}
//会员注册
export function register(data) {
  return http.post('/register', data)
}
//会员登录
export function login(data) {
  return http.post('/login', data)
}
//购物车列表
export function cartlist(params) {
  return http.get('/cartlist', {
    params
  })
}

//购物车添加
export function cartadd(data) {
  return http.post('/cartadd', data)
}
//购物车删除
export function cartdelete(data) {
  return http.post('/cartdelete', data)
}
