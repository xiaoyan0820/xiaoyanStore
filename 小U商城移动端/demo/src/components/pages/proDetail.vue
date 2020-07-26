<template>
  <div>
    <div class="container">
      <div class="header">
        <div class="wrap">
          <!-- <div class="cart">
            <img src="./images/classify/images/cart_03.jpg" alt />
          </div>-->
          <go-back></go-back>
          <p>商品分类</p>
          <div class="points">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div class="banner">
        <img :src="img2" alt />
        <img :src="img3" alt class="img2" />
        <div class="wrap">
          <p>娅芝贵妇素颜霜 贵妇膏神仙膏补水保湿懒人霜遮瑕珍珠膏</p>
          <p class="price">
            ¥123.00
            <span>(此价格不与套装优惠同时享受)</span>
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="wrap">
        <div class="sale">
          <p>
            促销：
            <span class="discount">满减</span>
            <span>满2件9折；3件8折</span>
          </p>
          <a href="#">
            <img :src="img4" alt />
          </a>
        </div>
        <div class="number">
          <p>购买数量</p>
          <div class="count-group">
            <input type="button" value="-" />
            <input type="text" value="1" />
            <input type="button" value="+" />
          </div>
        </div>
        <div class="quality">
          <p class="name">商品属性</p>
          <p class="size">
            规格
            <span class="size1">30g</span>
            <span class="size2">50g</span>
          </p>
        </div>
      </div>
    </div>
    <div class="details container">
      <div class="wrap">
        <h2>商品详情</h2>
      </div>
      <img :src="img5" alt />
      <img :src="img6" alt class="img2" />
      <img :src="img7" alt class="img3" />
      <img :src="img8" alt class="img4" />
      <img :src="img9" alt class="img5" />
    </div>
    <div class="assess container">
      <div class="wrap">
        <h2>商品评价</h2>
        <div class="user-ass">
          <p class="username">1235668fg</p>
          <p>效果很好，物流到位，下次继续来！</p>
          <img :src="img10" alt />
          <img :src="img11" alt />
          <img :src="img12" alt />
          <p class="data">2020-01-13</p>
        </div>
        <div class="count">
          <p>共1000+评价</p>
          <a href="#">查看更多<</a>
        </div>
      </div>
      <div class="bot-nav">
        <div class="shopcar">
          <a href="#">
            <img :src="img13" alt />
            <p>购物车</p>
          </a>
          <span>2</span>
        </div>
        <div class="shopcar1">加入购物车</div>
        <div class="shop">立即购买</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img1: require("../../assets/images/classify/images/cart_03.jpg"),
      img2: require("../../assets/images/detail_images/pic_1.jpg"),
      img3: require("../../assets/images/detail_images/pic_2.jpg"),
      img4: require("../../assets/images/detail_images/arrow.jpg"),
      img5: require("../../assets/images/detail_images/pic_3.jpg"),
      img6: require("../../assets/images/detail_images/pic_4.jpg"),
      img7: require("../../assets/images/detail_images/pic_5.jpg"),
      img8: require("../../assets/images/detail_images/pic_6.jpg"),
      img9: require("../../assets/images/detail_images/pic_7.jpg"),
      img10: require("../../assets/images/detail_images/pic_8.jpg"),
      img11: require("../../assets/images/detail_images/pic_9.jpg"),
      img12: require("../../assets/images/detail_images/pic_10.jpg"),
      img13: require("../../assets/images/public/icon_7.jpg"),
    };
  }
};
</script>
<style lang="" scoped>
@import "../../assets/css/detail.css";
</style>