<template>
    <div>
            <div class="container">
        <div class="header">
            <div class="wrap">
                <!-- <div class="cart">
                    <img src="../../assets/images/classify/images/cart_03.jpg" alt="">
                </div> -->
                 <go-back></go-back>
                <p>
                    我的订单
                </p>
                <div class="points">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>
        </div>
    </div>
     <div class="user-info container">
        <div class="wrap">

            <div class="user-name">
                <i></i>
                <div class="user">
                    <p class="name">悠溯</p><br>
                    <p class="class">V1</p>
                </div>
            </div>
            <div class="sign-in">
                <a href="#">  每日签到</a>
            </div>
        </div>
    </div>
    <div class="perform container">
        <div class="wrap">
            <div class="order" v-for="(item) in performList" :key='item.id'>
                <img src="item.img" alt="">
                <p>{{item.name}}</p>
            </div>
        </div>

    </div>
    <div  class="info-list container">
<ul>
       <li v-for='(item) in infoList' :key='item.id'>
                <div class="wrap">
                    <div class="info">
                        <img :src="item.img1" alt="" class="img1"> {{item.name}}
                    </div>
                    <img :src="item.img2" alt="" class="img2">
                </div>
            </li>
</ul>
    </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      performList: [
        {
          id: 1,
          img: require("../../assets/images/mine_images/icon_1.jpg"),
          name: "全部订单"
        },
        {
          id: 2,
          img: require("../../assets/images/mine_images/icon_2.jpg"),
          name: "待付款"
        },
        {
          id: 3,
          img: require("../../assets/images/mine_images/icon_3.jpg"),
          name: "待收货"
        }
      ],
      infoList:[
          {
              id:1,
              img1:require('../../assets/images/mine_images/icon_4.jpg'),
              img2:require('../../assets/images/public/right.jpg'),
              name:'地址管理'
          },
           {
              id:1,
              img1:require('../../assets/images/mine_images/icon_5.jpg'),
              img2:require('../../assets/images/public/right.jpg'),
              name:'我的钱包'
          },
           {
              id:1,
              img1:require('../../assets/images/mine_images/icon_6.jpg'),
              img2:require('../../assets/images/public/right.jpg'),
              name:'我的优惠券'
          },
           {
              id:1,
              img1:require('../../assets/images/mine_images/icon_7.jpg'),
              img2:require('../../assets/images/public/right.jpg'),
              name:'我的二维码'
          },
           {
              id:1,
              img1:require('../../assets/images/mine_images/icon_8.jpg'),
              img2:require('../../assets/images/public/right.jpg'),
              name:'我的小伙伴'
          },
      ]
    };
  }
};
</script>
<style scoped>
@import "../../assets/css/mine.css";
</style>

