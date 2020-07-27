<template>
    <div>
        <!-- 顶部导航 -->
        <van-nav-bar
            @click-left="$router.back()"
            :title="$route.meta.title"
            left-text="返回"
            left-arrow
        ></van-nav-bar>
        <h3>商品描述</h3>
        <div v-html="detailInfo.description"></div>
        <!-- 商品导航 -->
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
            <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
            <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
            <van-goods-action-button type="danger" text="加入购物车" @click="onClickButton" />
        </van-goods-action>
    </div>
</template>

<script>
import { Toast } from 'vant'
import { getgoodsinfo } from '../util/axios'
export default {
    data() {
        return {
            detailInfo: {},
        }
    },
    mounted() {
        this.getGoodsDetail()
    },
    methods: {
        //封装获取商品详情的方法
        getGoodsDetail() {
            getgoodsinfo({
                id: this.$route.query.id,
            }).then((res) => {
                console.log(res, '详情')
                if (res.code == 200) {
                    this.detailInfo = res.list[0]
                }
            })
        },
        onClickIcon() {
            Toast('点击图标')
        },
        onClickButton() {
            //调取加入购物车的方法
            let isLogin =JSON.parse(sessionStorage.getItem('userInfo')) ? true: false
            if(isLogin){
                //调取加入购物车方法
                console.log('加入购物车')
            }else{
                Toast('请先登录')
            }
        },
    },
}
</script>

<style  lang="" scoped>
</style>
