<template>
  <div class="pro-list">
    <ul>
      <li class="wrap" v-for="(item) in proList" :key="item.id" @click="getGoodsInfo(item.id)">
        <router-link to="/proDetail">
          <img :src="'http://localhost:3000/'+item.img" alt />
          <div class="des">
            <p class="name">{{item.goodsname}}</p>
            <p class="price">
              <span>¥</span>
              {{item.market_price}}
            </p>
           
            <p class="saled">市场价：¥{{item.price}}</p>
            <p class="shop">立即抢购</p>
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
      goodsInfo: {
        id: "",
      },
      proList: [],
    };
  },
  mounted() {
    this.getproList();
  },
  methods: {
    //封装一个获取商品列表事件
    getproList() {
      this.$http.get("/api/api/getindexgoods").then((res) => {
        if (res.data.code == 200) {
          let proListBig = res.data.list;
          for (var key in proListBig) {
            console.log(proListBig[key], "111");
          }
          console.log(proListBig[0].content, "22");
          this.proList = proListBig[0].content;
        }

        console.log(this.proList, "商品详情列表");
      });
    },
    //封装一个获取商品详情id事件

    //封装一个获取商品详情事件
    getGoodsInfo(id) {
      console.log(id)
      // this.$http.get("'http://localhost:3000/api/getgoodsinfo?id='+id").then(res=>{
      //   console.log(res)
      // })
      this.$http.get("/api/api/getgoodsinfo",
       { id}
      ).then((res) => {
        console.log(res)
        if (res.data.code == 200) {
          console.log(res, "4455");
          let proList11 = res.data.list;
          console.log(proList11, "2233");
        }
      }
      );
    },
  },
};
</script>
<style scoped>
.pro-list {
  background-color: #fff;
}
.pro-list ul {
  padding-bottom: 1.5rem;
}
.pro-list ul li {
  width: 6.9rem;
  padding: 0.5rem 0;
  margin-bottom: 0.5rem;
  box-shadow: 0 0 0.1rem #dcdcdc;
}
.pro-list ul li.last {
  margin-bottom: 0;
}
.pro-list ul li a {
  display: flex;
  justify-content: space-between;
  width: 6.4rem;
  margin: 0 auto;
}
.pro-list ul li a img {
  width: 2.18rem;
  height: 2.46rem;
}
.pro-list ul li a .des {
  display: inline-block;
  width: 3.8rem;
}
.pro-list ul li a .des p {
  margin: 0.1rem 0;
}
.pro-list ul li a .des .name,
.pro-list ul li a .des .price {
  font-size: 0.3rem;
}
.pro-list ul li a .des .price {
  color: #f26b11;
}
.pro-list ul li a .des .price span {
  font-size: 0.16rem;
}
.pro-list ul li a .des .saled,
.pro-list ul li a .des .shop {
  font-size: 0.2rem;
}
.pro-list ul li a .des .saled {
  color: #999;
  text-decoration: line-through;
}
.pro-list ul li a .des .shop {
  color: #fff;
  background-color: #f26b11;
  display: inline-block;
  width: 1.66rem;
  height: 0.55rem;
  line-height: 0.55rem;
  border-radius: 0.05rem;
  text-align: center;
}
</style>

