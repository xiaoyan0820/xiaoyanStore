<template>
  <div>
    <div class="container">
      <div class="header">
        <div class="wrap">
          <!-- <div class="cart">
                    <img src="../../assets/images/list_images/arrow.jpg" alt="">
          </div>-->
          <go-back></go-back>
          <img src="../../assets/images/list_images/logo.jpg" alt />
          <div class="points">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div class="search">
        <input type="text" placeholder="搜索商品" />
        <div class="countent">
          <img src="../../assets/images/list_images/search.jpg" alt />
          <!-- <p class="msg">搜索商品</p>-->
        </div>
      </div>
    </div>
    <ul>
      <li v-for="(item) in list" :key="item.id">
        <router-link to="/proDetail">
          <div class="wrap clearfix">
            <a href="#">
              <div class="left">
                <img :src="item.img" alt />
              </div>
              <div class="right">
                <p class="name">{{item.name}}</p>
                <p class="price">
                  <span>¥</span>
                  {{item.price}}
                </p>
                <p class="discuss">{{item.discuss}}</p>
              </div>
            </a>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          img: require("../../assets/images/list_images/pic.jpg"),
          name:
            " 阿道夫修护滋养洗发香乳 洗发水 持久留香 520ml*2瓶 旗舰店正品换新升级款",
          price: 123.0,
          discuss: "3625条评论"
        },
        {
          id: 2,
          img: require("../../assets/images/list_images/pic.jpg"),
          name:
            " 阿道夫修护滋养洗发香乳 洗发水 持久留香 520ml*2瓶 旗舰店正品换新升级款",
          price: 123.0,
          discuss: "3625条评论"
        },
        {
          id: 3,
          img: require("../../assets/images/list_images/pic.jpg"),
          name:
            " 阿道夫修护滋养洗发香乳 洗发水 持久留香 520ml*2瓶 旗舰店正品换新升级款",
          price: 123.0,
          discuss: "3625条评论"
        },
        {
          id: 4,
          img: require("../../assets/images/list_images/pic.jpg"),
          name:
            " 阿道夫修护滋养洗发香乳 洗发水 持久留香 520ml*2瓶 旗舰店正品换新升级款",
          price: 123.0,
          discuss: "3625条评论"
        }
      ]
    };
  }
};
</script>
<style scoped>
@import "../../assets/css/list.css";
</style>

