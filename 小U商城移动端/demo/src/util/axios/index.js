//这是一个接口集合模块
import http from './axios'

//封装一个获取轮播图列表接口
export function getBanner() {
  return http.get('/api/getbanner', {
  })
}
//封装一个分类信息接口
export function getCate() {
  return http.post('/api/getcate')
}
//封装一个获取限时秒杀信息接口
export function getSeckInfo() {
  return http.get('/api/getseckill', {
  
  })
}
//封装一个获取商品信息接口
export function getIndexGoods() {
  return http.get('/api/getindexgoods')
}
//封装一个获取分类树形结构接口
export function getCateTree() {
  return http.get('/api/getcatetree')
}


//封装一个获取分类商品接口
export function getGoods(params) {
  return http.get('/api/getgoods',{
    params
  })
}
//封装一个获取一个商品信息接口
export function getGoodsInfo(params) {
  return http.get('/api/getgoodsinfo', {
    params
  })
}

//封装一个会员注册接口
export function getRegister(data) {
  return http.post('/api/register', data)
}
//封装一个会员登录接口
export function getLogin(data) {
  return http.post('/api/login', data)
}


//封装一个购物车列表接口
export function getCartList(params) {
  return http.get('/api/cartlist', {
    params
  })
}
//封装一个购物车添加接口
export function getCartAdd(data) {
  return http.post('/api/cartadd', data)
}
//封装一个购物车删除接口
export function getCartDelete(data) {
  return http.post('/api/cartdelete', data)
}
