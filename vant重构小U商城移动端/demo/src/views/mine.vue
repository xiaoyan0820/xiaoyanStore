<template>
    <div>
        <!-- 顶部导航 -->
        <van-nav-bar :title="$route.meta.title" left-text="返回" left-arrow>
            <template #right>
                <van-icon name="search" size="18" />
            </template>
        </van-nav-bar>
        <div class="userInfo">
            <van-image
                width="100"
                height="100"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
                round
                fit="cover"
            />
            <div class="name">{{userInfo.nickname}}</div>
            <van-button v-if="userInfo.nickname" type="primary" @click="quit">退出登录</van-button>
            <van-button v-else type="primary" @click="$router.push('/login')">未登录</van-button>
        </div>

        <br />
        <br />
        <van-cell title="地址管理" to='/address' icon="location-o" is-link />
        <van-cell title="我的钱包" icon="balance-list-o" is-link />
        <van-cell title="我的二维码" icon="refund-o" is-link />
        <van-cell title="我的小伙伴" icon="smile-o" is-link />
    </div>
</template>

<script>
export default {
    data() {
        return {
            userInfo:{}
        }
    },
    mounted() {
        //组件一加载 就获取登录信息
        this.userInfo = sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) :{}
    },
    methods: {
        //退出登录时间
        quit(){
            //清除登录信息
            sessionStorage.removeItem('userInfo')
            this.userInfo = {}
        }
    },
}
</script>

<style  lang="" scoped>
.userInfo {
    text-align: center;
    padding: 25px;
}
.userInfo .name {
    line-height: 40px;
}
</style>
