import {
  getBanner,
  getCate,
  getSeckInfo,
  getIndexGoods,
  getCateTree,
  getGoods,
  getGoodsInfo,
  getCartList,
} from '../util/axios'

export default {
  //封装一个获取轮播图列表
  getActionBannerList({
    commit
  }) {
    getBanner({
      })
      .then(res => {
        if (res.data.code == 200) {
          commit('reqBannerList', res.data.list)
        }
      })
  },
  //封装一个获取分类信息列表
  getActionCateList({
    commit
  }) {
    getCate()
      .then(res => {
        if (res.data.code == 200) {
          commit('reqCateList', res.data.list)
        }
      })
  },
  //封装一个获取限时秒杀信息列表
  getActionSeckList({
    commit
  }, ) {
    getSeckInfo()
      .then(res => {
        if (res.data.code == 200) {
          commit('reqSeckList',res.data.list)
        }
      })
  },
  //封装一个获取商品信息列表
  getActionIndexGoodsList({
    commit
  }) {
    getIndexGoods({
      })
      .then(res => {
        if (res.data.code == 200) {
          commit('reqIndexGoodsList', res.data.list)
        }
      })
  },
  //封装一个获取分类树形结构列表
  getActionCateTreeList({
    commit
  }) {
    getCateTree()
      .then(res => {
        if (res.data.code == 200) {
          commit('reqCateTreeList',res.data.list)
        }
      })
  },
  //封装一个获取分类商品列表
  getActionGoodsList({
    commit
  }) {
    getGoods()
      .then(res => {
        if (res.data.code == 200) {
          // //针对返回的结果进行转化，目的就是转化null
          // let list = []
          // list = res.data.list == null ? [] : res.data.list
          commit('reqGoodsList', res.data.list)
        }
      })
  },
  //封装一个获取商品信息列表
  getActionGoodsInfoList({
    commit
  }) {
    getGoodsInfo()
      .then(res => {
        if (res.data.code == 200) {
          commit('reqGoodsInfoList', res.data.list)
        }
      })
  },
  //封装一个会员注册列表
  getActionRegisterList({
    commit
  }) {
    getRegister()
      .then(res => {
        if (res.data.code == 200) {
          commit('reqRegisterList', res.data.list)
        }
      })
  },
  //封装一个会员登录列表
  getActionLoginList({
    commit
  }) {
    getLogin()
      .then(res => {
        if (res.data.code == 200) {
          commit('reqLoginList',res.data.list)
        }
      })
  },
   //封装一个购物车列表
   getActionCartList({
    commit
  }) {
    getCartList()
      .then(res => {
        if (res.data.code == 200) {
          commit('reqCartList',res.data.list)
        }
      })
  },
}
