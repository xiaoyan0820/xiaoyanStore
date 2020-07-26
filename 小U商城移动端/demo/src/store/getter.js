export default {
    //轮播图
    getStateBannerList(state){
        return state.bannerList
    },
    //分类
    getStateCateList(state){
        return state.cateList
    },
    //秒杀
    getStateSeckList(state){
        return state.seckList
    },
    //商品信息
    getStateIndexGoodsList(state){
        return state.indexgoodsList
    },
    //树型结构
    getStateCateTreeList(state){
        return state.catetreeList
    },
    //分类商品
    getStateGoodsList(state){
        return state.goodsList
    },
    //商品信息
    getStateGoodsInfoList(state){
        return state.goodsinfoList
    },
    //购物车
    getStateCatrList(state){
        return state.cartList
    }
}