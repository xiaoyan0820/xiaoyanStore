<template>
    <div>
        <!-- 顶部导航 -->
        <van-nav-bar @click-left='$router.back()' :title="$route.meta.title" left-text="返回" left-arrow></van-nav-bar>
        <van-list>
            <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
            <van-card
            v-for="item in goodsList"
            :key = 'item.id'
                class="card"
                :price="item.price"
                desc="描述信息"
                :title="item.goodsname"
                :thumb="$imgUrl+item.img"
                @click='goDetail(item.id)'
            />
            <van-empty v-if="goodsList==null" description="当前没有商品数据" />
        </van-list>
    </div>
</template>

<script>
import {getgoods} from '../util/axios'
export default {
    data() {
        return {
            goodsList:[]
        }
    },
    mounted() {
        console.log(this.$route)
        //组件加载调取接口
        this.getGoods()
    },
    methods:{
        //封装获取商品列表的方法
        getGoods(){
            getgoods({
                fid:this.$route.query.id
            })
            .then(res=>{
                console.log(res)
                if(res.code==200){
                    this.goodsList = res.list
                }
            })
        },
        //封装一个跳转商品详情
        goDetail(id){
            this.$router.push({
                path:'/detail',
                query:{
                    id
                }
            })
        }
    }
}
</script>

<style  lang="" scoped>
.card {
    background: #fff !important;
    margin-bottom: 10px !important;
}
</style>
