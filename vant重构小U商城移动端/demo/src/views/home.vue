<template>
    <div>
        <!-- 顶部 navBar -->
        <van-nav-bar :title="$route.meta.title">
            <template #right>
                <van-icon name="search" size="18" />
            </template>
        </van-nav-bar>
        <!-- 轮播图 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img :src="$imgUrl+image.img" />
            </van-swipe-item>
        </van-swipe>
        <!-- 活动模块 -->
        <van-grid :border="false" :column-num="4" :gutter="10">
            <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
                <p>限时抢购</p>
            </van-grid-item>
            <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
                <p>积分商城</p>
            </van-grid-item>
            <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
                <p>联系我们</p>
            </van-grid-item>
            <van-grid-item to='classify'>
                <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
                <p>商品分类</p>
            </van-grid-item>
        </van-grid>
        <!-- <van-count-down :time="timer" /> -->
        <!-- 商品切换 -->
        <van-tabs type="card">
            <van-tab title="热门推荐">
                <van-card
                    v-for="item in hotsList"
                    :key="item.id"
                    class="card"
                    :price="item.price"
                    desc="描述信息"
                    :title="item.goodsname"
                    :thumb="$imgUrl+item.img"
                />
            </van-tab>
            <van-tab title="发现新品">
                <van-card
                    v-for="item in newsList"
                    :key="item.id"
                    class="card"
                    :price="item.price"
                    desc="描述信息"
                    :title="item.goodsname"
                    :thumb="$imgUrl+item.img"
                />
            </van-tab>
            <van-tab title="全部商品">
                <van-card
                    v-for="item in goodsList"
                    :key="item.id"
                    class="card"
                    :price="item.price"
                    desc="描述信息"
                    :title="item.goodsname"
                    :thumb="$imgUrl+item.img"
                />
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import axios from 'axios'
import { getbanner, getseckill, getindexgoods } from '../util/axios'
export default {
    data() {
        return {
            images: [],
            hotsList: [],
            newsList: [],
            goodsList:[],
            timer:30 * 60 * 60 * 1000,
            start:0,
            end:0
        }
    },
    mounted() {
        //组件一加载 就调取并发处理
        axios.all([getbanner(), getindexgoods(),getseckill()]).then(
            axios.spread((banners, goods,seckList) => {
                this.images = banners.list
                this.hotsList = goods.list[0].content
                this.newsList = goods.list[1].content
                this.goodsList = goods.list[2].content
                console.log(seckList,'秒杀信息')
                this.start = seckList.begintime
                 this.end = seckList.endtime
                 let timer = this.end - new Date().getTime()
                 //倒计时思路： 获取结束时间与当前时间进行差值
                 //把得到的结果进行转化
            })
        )
    },
    methods: {},
}
</script>

<style  lang="" scoped>
.my-swipe .van-swipe-item img {
    height: 180px;
    width: 100%;
}
.card {
    background: #fff !important;
    margin-bottom: 10px !important;
}
</style>
