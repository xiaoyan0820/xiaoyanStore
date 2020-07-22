<template>
    <div class="container">
        <div class="header">
            <div class="wrap">
                <h1>
                    <a href="#">
                        <img :src="img1" alt="">
                    </a>
                </h1>
                <router-link to="/list">
                 <input type="text" placeholder="寻找商品">
                </router-link>
                
                <div class="points">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
        <div class="nav">
            <ul>
                <li v-for='(item) in navList' :key='item.id'>
                    <a href="#" >
                        {{item.navInfo}}
                    </a>
                </li>
            </ul>
             <span class="arrow">
                    <img :src="img2">
                </span>
        </div>
         <div class="banner">
            <a href="#">
                <img :src="img3" alt="">
            </a>
            <a href="#">
                <img :src="img4" alt="">
            </a>
        </div>
        <div  class="icon-nav">
             <div class="item" v-for='(item1) in iconNavList' :key='item1.id'>
                <item :d='item1'></item>
            </div>
        </div>
        <home-sale></home-sale>
        <div class="adver">
            <img :src="img5" alt="">
        </div>
        <home-pro></home-pro>
        <home-proList></home-proList>
        
    </div>
</template>
<script>
import item from "./item";
import homeSale from "./homeSale";
import homePro from "./homePro";
import homeProList from "./homeProList";
export default {
  data() {
    return {
      img1: require("../../../assets/images/index_images/logo.jpg"),
      img2: require("../../../assets/images/index_images/arrow.jpg"),
      img3: require("../../../assets/images/index_images/banner.jpg"),
      img4: require("../../../assets/images/index_images/banner.jpg"),
      img5: require("../../../assets/images/index_images/bar.jpg"),
      // info1:'寻找商品'
      navList: [
        {
          id: 1,
          navInfo: "推荐"
        },
        {
          id: 2,
          navInfo: "女装"
        },
        {
          id: 3,
          navInfo: "鞋包"
        },
        {
          id: 4,
          navInfo: "居家"
        },
        {
          id: 5,
          navInfo: "推荐"
        },
        {
          id: 6,
          navInfo: "母婴童装"
        },
        {
          id: 7,
          navInfo: "鞋包"
        },
        {
          id: 8,
          navInfo: "居家"
        },
        {
          id: 9,
          navInfo: "鞋包"
        }
      ],
      iconNavList: [
        {
          id: 1,
          img: require("../../../assets/images/index_images/icon_1.jpg"),
          name: "限时抢购"
        },
        {
          id: 2,
          img: require("../../../assets/images/index_images/icon_2.jpg"),
          name: " 积分商城"
        },
        {
          id: 3,
          img: require("../../../assets/images/index_images/icon_3.jpg"),
          name: " 联系我们"
        },
        {
          id: 4,
          img: require("../../../assets/images/index_images/icon_4.jpg"),
          name: " 商品分类"
        }
      ]
    };
  },
  components: {
    item,
    homeSale,
    homePro,
    homeProList
  }
};
</script>
<style scoped>
.container {
  width: 7.5rem;
  margin: 0 auto;
  background-color: #f1f1f1;
}
.wrap {
  width: 7.1rem;
  margin: 0 auto;
}
.header {
  width: 7.5rem;
  position: fixed;
  top: 0;
  /* left: 50%;
  margin-left: -3.75rem; */
  z-index: 999;
  height: 0.88rem;
  background-color: #fff;
}
.header .wrap {
  height: 0.88rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header h1 img {
  width: 1.47rem;
  height: 0.33rem;
}
.header input {
  width: 3rem;
  height: 0.4rem;
  background-color: #eee;
  border-radius: 0.04rem;
  text-align: center;
  font-size: 0.18rem;
}
.header .points span {
  float: left;
  margin-left: 0.1rem;
  width: 0.13rem;
  height: 0.13rem;
  background-color: #000;
  border-radius: 50%;
}
.nav {
  position: relative;
  background-color: #fff;
  height: 0.8rem;
  line-height: 0.8rem;
  margin-top: 0.88rem;
}
.nav .wrap {
  position: relative;
  overflow: hidden;
}
.nav ul {
  width: 7.5rem;
}
.nav ul li {
  float: left;
  font-size: 0.28rem;
}
.nav ul li a {
  color: #202020;
  padding: 0 0.19rem;
}
/* .nav ul li:nth-child(1) {
  position: relative;
}
.nav ul li:nth-child(1) a {
  color: #e40033;
  border-right: 1px solid #f1f1f1;
}
.nav ul li:nth-child(1)::after {
  position: absolute;
  left: 0.19rem;
  bottom: 0;
  content: '';
  width: calc(100% - 0.38rem);
  height: 0.04rem;
  background-color: #e40033;
} */
.nav .arrow {
  position: absolute;
  top: 0;
  right: 0;
  padding-left: 0.2rem;
  background-color: #fff;
}
.nav .arrow img {
  width: 0.35rem;
  height: 0.21rem;
}
.banner {
  position: relative;
  height: 2.91rem;
}
.banner a {
  position: absolute;
  top: 0;
  left: 0;
}
.banner a img {
  width: 7.5rem;
  height: 2.91rem;
}
.icon-nav {
  background-color: #fff;
  height: 1.8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.icon-nav .item {
  font-size: 0.24rem;
  text-align: center;
}
.icon-nav .item a {
  color: #595959;
}
.icon-nav .item img {
  width: 0.64rem;
  height: 0.62rem;
  margin-bottom: 0.28rem;
}
.adver {
  margin: 0.28rem 0;
}
.adver img {
  width: 7.5rem;
  height: 1.9rem;
}


</style>

