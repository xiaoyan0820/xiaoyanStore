export default {
    //菜单
    getStateMenuList(state){
        return state.menuList
    },
    //角色
    getStateRoleList(state){
        return state.roleList
    },
    //管理员
    getStateUserList(state){
        return state.userList
    },
    //商品分类
    getStateCateList(state){
        return state.cateList
    },
    //商品规格
    getStateSpecsList(state){
        return state.specsList
    },
    //轮播图
    getStateBannerList(state){
        return state.bannerList
    }
}