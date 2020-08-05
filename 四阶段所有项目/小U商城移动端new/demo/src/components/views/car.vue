<template>
  <div class="container">
    <div class="header">
      <div class="wrap">
        <go-back></go-back>
        <p>购物车</p>
        <div class="points">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <!-- <ul class="shopCar-list">
      <li v-for="(item) in carList" :key="item.id">
        <div class="pro">
          <i></i>
          <img :src="'http://localhost:3000/'+item.img" alt />
          <div class="des">
            <p class="name">{{item.goodsname}}</p>
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
    </ul>-->
    <van-checkbox-group v-model="result" ref="checkboxGroup" class="shopCar-list">
      <van-checkbox :name="index" v-for="(item,index) in carList" :key="item.id" @click="check" class="pro">
        <van-swipe-cell  class="pro">
          <van-card
            class="card"
            :price="item.price"
            :title="item.goodsname"
            :thumb="'http://localhost:3000/'+item.img"
          >
            <template #footer class="count-group">
              <van-stepper :value="item.num" async-change />
            </template>
          </van-card>
          <template #right>
            <van-button square text="删除" type="danger" class="delete-button" @click="del(item.id)" />
          </template>
        </van-swipe-cell>
      </van-checkbox>
      <van-empty v-if="carList==null" description="购物车空空如也，快去买买买...." />
    </van-checkbox-group>

    <!-- 结算 -->
    <van-submit-bar :price="priceAll" button-text="去结算" @submit="onSubmit">
      <van-checkbox v-model="checkall" @click="checkAll">全选</van-checkbox>
    </van-submit-bar>
    <!-- <div class="payfor container">
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
    <!-- 二级路由出口-->
    <!-- <router-view></router-view>
          <router-link to="/order">去结算（2件）</router-link>
        </div>
      </div>
    </div>-->
  </div>
</template>
<script>
import { Toast } from "vant";
import { cartlist, cartdelete } from "../../util/axios";
export default {
  data() {
    return {
      result: [], //选了多少个商品 选中的商品数组
      carList: [],
      checkall: false, //全选按钮
      flag: true, //删除按钮
    };
  },
  mounted() {
    this.getCarList();
  },
  computed: {
    //计算总价
     //计算总价
    priceAll() {
      let all = 0;
      let onePriceList = this.result.map(item => {
        return (
          Number(this.carList[item].price) * Number(this.carList[item].num)
        );
      });
      console.log( onePriceList, '选中商品的价格 每多选中一个商品数组多添一项 每一项为每一类商品的总价格 数组')
      onePriceList.forEach(item => {
        console.log(item)
        all = all + item;
        console.log(all)
      });

      return all * 100;
    }
  },
  methods: {
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
    del(id) {
      cartdelete({ id }).then((res) => {
        console.log(id);
        console.log(res, "删除");
        if (res.code == 200) {
          alert("删除成功");
          //重新获取购物车列表
          this.getCarList();
        }
      });
    },
     //单选事件
    check() {
      if (this.result.length == this.carList.length) {
        this.checkall = true;
      } else {
        this.checkall = false;
      }
    },
    //全选事件
    checkAll() {
      if (this.checkall == true) {
        this.$refs.checkboxGroup.toggleAll(true);
      } else {
        this.$refs.checkboxGroup.toggleAll(false);
      }
    },
     //去结算
    onSubmit() {
      if (this.priceAll != 0) {
        // sessionStorage.setItem("priceAll", JSON.stringify(this.priceAll));
        console.log(this)
        this.$store.commit('allPrice',this.priceAll)
        let checkPro = this.result.map(item => {
          return this.carList[item];
          console.log(checkPro)
        });
        sessionStorage.setItem("checkPro", JSON.stringify(checkPro));
        this.$router.push("/order");
      } else {
        Toast("您还未选择商品");
      }
    },
  },
  beforeRouteEnter(to, from, next) {
    if (sessionStorage.getItem("userInfo")) {
      next();
    } else {
      // Toast("请先登录,才能查看购物车");
      //直接给用户跳转到购物车
      next("/login");
    }
  },
};
</script>
<style scoped>
@import "../../assets/css/shopCar.css";
</style>

