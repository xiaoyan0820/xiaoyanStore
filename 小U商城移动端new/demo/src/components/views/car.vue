<template>
  <div class="container">
    <div class="header">
      <div class="wrap">
        <!-- <div class="cart">
                    <img src="../../assets/images/classify/images/cart_03.jpg" alt="">
        </div>-->
        <go-back></go-back>
        <p>购物车</p>
        <div class="points">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <ul class="shopCar-list">
      <li v-for="(item) in carList" :key="item.id">
        <div class="pro">
          <i></i>
          <img :src="'http://localhost:3000/'+item.img" alt />
          <div class="des">
            <p class="name">{{item.goodsname}</p>
            <p class="price">
              <span>¥</span>
              {{item.price}}
            </p>
          </div>
        </div>
        <div class="count-group">
          <input type="button" value="-" />
          <input type="text" value="1" />
          <input type="button" value="+" />
        </div>
        <div class="del" @click="del(item.id)">删除</div>
      </li>
    </ul>
    <div class="payfor container">
      <div class="wrap">
        <div class="order">
          <i></i>
          <span>全选</span>
        </div>
        <div class="count">
          <p class="count1">
            总计：
            <span>163.00</span>
          </p>
          <p class="count2">不含运费，已优惠¥0.00</p>
        </div>
        <div class="pay">
          <!-- 二级路由出口 -->
          <router-view></router-view>
          <router-link to="/order">去结算（2件）</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {cartlist} from "../../util/axios";
export default {
  data() {
    return {
       carList: [],
    };
  },
   mounted() {
        this.getCarList()
    },
  methods: {
    //获取购物车列表
    getCarList() {
      cartlist({
        uid: JSON.parse(sessionStorage.getItem("userInfo")).uid,
      }).then((res) => {
         console.log(res, "返回值");
        if (res.code == 200) {
          console.log(res, "返回值");
          this.carList = res.list;
          this.carList.map((item) => {
            item.status = item.status == 1 ? true : false;
          });
        } else {
          
        }
      });
    },
    //购物车删除
    del() {
      this.$http.post("/api/api/cartdelete", { id }).then((res) => {
        if (res.data.code == 200) {
          alert("删除成功");
          //重新获取购物车列表
        }
      });
    },
  },
  beforeRouteEnter(to, from, next) {
    if (sessionStorage.getItem("userInfo")) {
      next();
    } else {
      alert("请先登录,才能查看购物车");
      //直接给用户跳转到购物车
      next("/login");
    }
  },
};
</script>
<style scoped>
@import "../../assets/css/shopCar.css";
</style>

