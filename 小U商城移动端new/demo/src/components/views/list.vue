<template>
  <div>
     <div class="header">
      <div class="wrap">
        <!-- <div class="cart">
                    <img src="../../assets/images/classify/images/cart_03.jpg" alt="">
        </div>-->
        <go-back></go-back>
        <p>商品列表</p>
        <div class="points">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <!-- 顶部导航 -->
    <!-- <van-nav-bar @click-left="$router.back()" :title="$route.meta.title" left-text="返回" left-arrow></van-nav-bar> -->
    <van-list>
      <van-card
        v-for="item in goodsList"
        :key="item.id"
        class="card"
        :price="item.price"
        desc="描述信息"
        :title="item.goodsname"
        :thumb="'http://localhost:3000/'+item.img"
        @click="goDetail(item.id)"
      />
      <van-empty v-if="goodsList==null" description="当前没有商品数据" />
    </van-list>
  </div>
</template>
<script>
import {getgoods} from '../../util/axios'
export default {
  data() {
    return {
      goodsList: [],
    };
  },
  mounted() {
    //组件加载获取商品列表接口
    this.getGoods();
    console.log(this.$route);
  },
  methods: {
    //封装获取商品列表方法
    // getGoods() {
    //   this.$http
    //     .get("/api/api/getgoods", {
    //       fid: this.$route.query.id,
    //     })
    //     .then((res) => {
    //       if (res.data.code == 200) {
    //         console.log(res,'返回的数据')
    //         this.goodsList = res.data.list;
    //         console.log( this.goodsList)
    //         console.log(this.$route.query.id,'this.$route.query.id')
    //       }
    //     });
    // },
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
    //封装一个跳转详情方法
    goDetail(id) {
      this.$router.push({
        path: "proDetail",
        query: {
          id,
        },
      });
    },
  },
};
</script>
<style scoped>
@import "../../assets/css/list.css";
</style>

