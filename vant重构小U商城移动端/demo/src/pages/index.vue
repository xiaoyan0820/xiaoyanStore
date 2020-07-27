<template>
    <div class="pb50">
        <!-- 二级路由出口 -->
        <router-view></router-view>
        <!-- 底部导航 -->
        <van-tabbar route v-model="active">
            <van-tabbar-item replace to="/home" icon="wap-home-o">首页</van-tabbar-item>
            <van-tabbar-item replace to="/classify" icon="qr">分类</van-tabbar-item>
            <van-tabbar-item replace to="/car" icon="cart-o">购物车</van-tabbar-item>
            <van-tabbar-item replace to="/mine" icon="user-o">个人中心</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active:0
        }
    },
}
</script>

<style  lang="" scoped>
.pb50{
    margin-bottom: 50px !important;
}
</style>
