<template>
  <div class="sale">
    <div class="left">
      <a href="#">
        <h3>
          <img :src="img1" />限时秒杀
        </h3>
        <p class="des">每天零点场 好货秒不停</p>
        <p class="time">
          <span>19</span>:
          <span>30</span>:
          <span>29</span>
          <i>秒杀</i>
        </p>
        <img class="pic" :src="img2" alt />
        <div class="price">
          ￥
          <span>14.8</span>
        </div>
      </a>
    </div>
    <div class="right">
      <a href="#" class="top">
        <div class="top-des">
          <p class="des">
            品牌上新
            <span class="bg-color">折</span>
          </p>
          <p class="purchase">每日9点 抢大牌</p>
          <img :src="img3" alt />
        </div>
        <div class="top-img">
          <img :src="img4" alt />
        </div>
      </a>
      <div class="bottom">
        <a href="#" class="bot-left">
          <p class="des1">每日十件</p>
          <p class="des2">只为你选好货</p>
          <img :src="img5" alt />
        </a>
        <a href="#" class="bot-right">
          <p class="des1">拼啊</p>
          <p class="des2">超级好价拼团</p>
          <img :src="img6" alt />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img1: require("../../../assets/images/index_images/timer.jpg"),
      img2: require("../../../assets/images/index_images/shop_5.jpg"),
      img3: require("../../../assets/images/index_images/brand.jpg"),
      img4: require("../../../assets/images/index_images/shop_1.jpg"),
      img5: require("../../../assets/images/index_images/shop_1.jpg"),
      img6: require("../../../assets/images/index_images/shop_3.jpg"),
      timer: 30 * 60 * 60 * 1000,
      start: 0,
      end: 0,
    };
  },
  mounted() {
    //组件一加载调取秒杀接口
    this.getSeckill();
  },
  methods: {
    //封装秒杀接口
    getSeckill() {
      this.$http.get("/api/api/getseckill").then((res) => {
        if (res.data.code == 200) {
          let seckList = res.data.list;
          console.log(seckList, "秒杀列表");
          this.start = seckList.begintime;
          this.end = seckList.endtime;
          let timer = this.end - new Date().getTime();
        }
      });
    },
  },
};
</script>
<style scoped>
.sale {
  height: 3.8rem;
  background-color: #fff;
  margin-top: 0.3rem;
  display: flex;
  justify-content: space-between;
}
.sale .left {
  position: relative;
  width: 3.77rem;
  height: 3.8rem;
  padding-left: 0.16rem;
  box-sizing: border-box;
}
.sale .left h3 {
  font-size: 0.3rem;
  color: #ff064f;
  letter-spacing: 0.04rem;
  margin-top: 0.16rem;
}
.sale .left h3 img {
  width: 0.33rem;
  height: 0.31rem;
  margin-right: 0.1rem;
  vertical-align: -0.06rem;
}
.sale .left .des {
  font-size: 0.22rem;
  color: #999;
  margin: 0.07rem 0;
}
.sale .left .time {
  font-size: 0.26rem;
}
.sale .left .time span {
  display: inline-block;
  background-color: #333;
  color: #fff;
  line-height: 0.42rem;
  padding: 0 0.09rem;
  border-radius: 0.05rem;
  margin: 0 0.04rem;
}
.sale .left .time i {
  color: #333;
  display: inline-block;
  line-height: 0.41rem;
  padding: 0 0.25rem 0 0.21rem;
  background: url("../../../assets/images/index_images/bg.jpg") no-repeat;
  background-size: 100% 100%;
}
.sale .left .pic {
  display: block;
  width: 2.36rem;
  height: 2rem;
  margin: 0.18rem auto 0;
}
.sale .left .price {
  position: absolute;
  right: 0.3rem;
  bottom: 0.3rem;
  width: 0.88rem;
  height: 0.88rem;
  border-radius: 50%;
  background-color: #ff064f;
  color: #fff;
  font-size: 0.16rem;
  line-height: 0.88rem;
  text-align: center;
}
.sale .left .price span {
  font-size: 0.24rem;
}
.sale .right {
  width: 3.72rem;
  height: 3.8rem;
  padding-left: 0.16rem;
}
.sale .right .top {
  display: flex;
  height: 1.88rem;
}
.sale .right .top .top-des {
  width: 2rem;
}
.sale .right .top .top-des .des {
  font-size: 0.3rem;
  color: #ff064f;
  letter-spacing: 0.04rem;
  margin-top: 0.16rem;
}
.sale .right .top .top-des .des .bg-color {
  background-color: #ff064f;
  color: #fff;
  display: inline-block;
  font-size: 0.22rem;
  line-height: 0.32rem;
  vertical-align: 0.04rem;
  width: 0.42rem;
  height: 0.32rem;
  text-align: center;
}
.sale .right .top .top-des .purchase {
  font-size: 0.22rem;
  color: #999;
  margin: 0.07rem 0;
}
.sale .right .top .top-des img {
  width: 1.22rem;
  height: 0.4rem;
  margin: 0.2rem 0;
}
.sale .right .top .top-img {
  margin-left: 0.02rem;
}
.sale .right .top .top-img img {
  width: 1.6rem;
  height: 1.88rem;
  margin-top: 0.05rem;
}
.sale .right .bottom {
  display: flex;
  justify-content: space-between;
  height: 1.88rem;
}
.sale .right .bottom .des1 {
  font-size: 0.3rem;
  color: #ff064f;
  letter-spacing: 0.04rem;
  margin-top: 0.16rem;
}
.sale .right .bottom .des2 {
  font-size: 0.22rem;
  color: #999;
  margin: 0.07rem 0;
}
.sale .right .bottom img {
  width: 1.04rem;
  height: 1.04rem;
  margin: 0.05rem 0.4rem;
}
.sale .right .bottom .bot-left,
.sale .right .bottom .bot-right {
  width: 1.88rem;
  height: 1.88rem;
}
</style>

