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
      <li v-for="(item) in shopCarList" :key="item.id">
        <div class="pro">
          <i></i>
          <img :src="item.img" alt />
          <div class="des">
            <p class="name">{{item.name}}</p>
            <p class="size">{{item.size}}</p>
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
        <div class="del">删除</div>
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
          <router-link to="/order">
          去结算（2件）
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shopCarList: [
        {
          id: 1,
          img: require("../../assets/images/shoping_car_images/shop.jpg"),
          name: "欧莱雅面霜",
          size: "规格：50g",
          price: 123.0
        },
        {
          id: 2,
          img: require("../../assets/images/shoping_car_images/shop.jpg"),
          name: "欧莱雅面霜",
          size: "规格：50g",
          price: 123.0
        },
        {
          id: 3,
          img: require("../../assets/images/shoping_car_images/shop.jpg"),
          name: "欧莱雅面霜",
          size: "规格：50g",
          price: 123.0
        }
      ]
    };
  }
};
</script>
<style scoped>
@import "../../assets/css/shopCar.css";
</style>

