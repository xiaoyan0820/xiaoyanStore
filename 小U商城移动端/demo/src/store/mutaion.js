export default {
    //触发修改state
    reqBannerList(state,payload){
        state.bannerList = payload
    },
    reqCateList(state,payload){
        state.cateList = payload
    },
    reqSeckList(state,payload){
        state.seckList = payload
    },
    reqIndexGoodsList(state,payload){
        state.indexgoodsList = payload
    },
    reqCateTreeList(state,payload){
        state.catetreeList = payload
    },
    reqGoodsList(state,payload){
        state.goodsList = payload
    },
    reqGoodsInfoList(state,payload){
        state.goodsinfoList = payload
    },
    reqCartList(state,payload){
        state.cartList = payload
    }
}