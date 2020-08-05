<template>
  <div>
    <div class="container">
      <div class="header">
        <div class="wrap">
          <!-- <div class="cart">
                <img src="../../assets/images/classify/images/cart_03.jpg" alt="">
          </div>-->
          <go-back></go-back>
          <p>确认订单</p>
          <div class="points">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div class="contact">
        <div class="txt">
          <p class="user">
            收货人：{{userInfo.nickname}}
            <span>{{userInfo.phone}}</span>
          </p>
          <p class="address">
            收货地址：
            <span>北京市海淀区银泉路清林苑6号楼中公优就业总部3层</span>
          </p>
        </div>
        <a href="#" class="edit">
          <img src="../../assets/images/order/arrow.jpg" />
        </a>
      </div>
    </div>
    <div class="pro container">
      <div class="wrap" v-for="item in proList" :key="item.id">
        <div class="top">
          <!-- <div class="name">
                <img src="../../assets/images/order/shop.jpg" alt="">
                <div class="size">
                    <p class="p1">雅诗兰黛护肤霜</p>
                    <p class="p2">规格：50g</p>
                </div>
          </div>-->
          <div class="name">
            <img :src="'http://localhost:3000'+item.img" alt />
            <div class="size">
              <p class="p1">{{item.goodsname}}</p>
              <p class="p2">规格：50g</p>
            </div>
          </div>
          <div class="price">
            <p>
              <span>¥</span>
              {{item.price.toFixed(2)}}
            </p>
          </div>
        </div>
        <div class="bottom">
          <p>购买数量</p>

          <div class="count-group">
            <input type="button" value="-" />
            <input type="text" :value="item.num" />
            <input type="button" value="+" />
          </div>
        </div>
        <div class="express clearfix">
          <p class="left">配送方式</p>
          <p class="right">xx快递</p>
        </div>
      </div>
      <div class="pro container">
        <div class="wrap">
          <div class="express clearfix">
            <p class="left">优惠券</p>
            <p class="right">无可用</p>
          </div>
          <div class="integral clearfix">
            <p class="left">使用积分</p>
            <p class="right">
              <input type="text" placeholder="输入积分" class="text" />
              <input type="button" value="使用" class="button" /> 可用
              <span>50</span> 积分
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="price container">
      <div class="wrap clearfix">
        <ul>
          <li class="clearfix">
            <p class="left">商品金额</p>
            <p class="right">￥{{price.toFixed(2)}}</p>
          </li>
          <li class="clearfix" v-for="(item) in priceList" :key="item.id">
            <p class="left">{{item.name}}</p>
            <p class="right">{{item.price}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="submit container">
      <div class="wrap">
        <p class="money">
          实付金额：
          <span>￥{{price.toFixed(2)}}</span>
        </p>
        <input type="submit" value="提交订单" @click="submit" />
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      price: 0,
      userInfo: {},
      proList: [],
      priceList: [
        // {
        //     id:1,
        //     name:'商品金额',
        //     price:'¥68.00'
        // },
        {
          id: 2,
          name: "运费",
          price: "+¥0.00",
        },
        {
          id: 3,
          name: "优惠券",
          price: "¥68.00",
        },
        {
          id: 4,
          name: "会员优惠",
          price: "-¥0.00",
        },
        {
          id: 5,
          name: "积分抵扣",
          price: "-¥0.00",
        },
      ],
    };
  },
  mounted() {
    this.userInfo = JSON.parse(sessionStorage.getItem("userInfo"))
      ? JSON.parse(sessionStorage.getItem("userInfo"))
      : {};
    console.log(this.userInfo);
    //this.price = JSON.parse(sessionStorage.getItem('priceAll'))/100;

    this.proList = JSON.parse(sessionStorage.getItem("checkPro"));
    console.log(this.proList);
  },
  methods: {
    submit() {
      Toast("您的订单已提交，继续购物吧！");
      this.$router.push("/index");
    },
  },
};
</script>
<style scoped>
@import "../../assets/css/order.css";
</style>

