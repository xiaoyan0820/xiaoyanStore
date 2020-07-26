<template>
  <div class="container clearfix">
    <div class="header">
      <div class="wrap">
        <div class="cart">
          <img src="../../assets/images/classify/images/cart_03.jpg" alt />
        </div>
        <p>商品分类</p>
        <div class="points">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div class="left-nav">
      <ul>
        <li v-for="(item) in leftNavlist" :key="item.id">
          <a href="#" class="active">{{item.catename}}</a>
        </li>
      </ul>
    </div>
    <div class="pro-list">
      <div class="center">
        <div class="head">
          <p>洗发类</p>
          <a href="#">更多</a>
        </div>
        <ul>
          <li v-for="(item) in proList1" :key="item.id">
            <a href="#">
              <img :src="'http://localhost:3000/'+item.img" alt />
              <p>{{item.goodsname}}</p>
            </a>
          </li>
        </ul>

        <div class="head">
          <p>染发类</p>
          <a href="#" >更多</a>
        </div>
        <ul>
          <li v-for="(item) in proList2" :key="item.id">
            <a href="#">
              <img :src="item.img" alt />
              <p>{{item.name}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
     
      leftNavlist: [],
      proList1: [
        {
          id: 1,
          img: require("../../assets/images/classify/shop_1.jpg"),
          name: "护发亮泽洗发水",
        },
        {
          id: 2,
          img: require("../../assets/images/classify/shop_2.jpg"),
          name: "护发亮泽洗发水",
        },
        {
          id: 3,
          img: require("../../assets/images/classify/shop_1.jpg"),
          name: "护发亮泽洗发水",
        },
        {
          id: 4,
          img: require("../../assets/images/classify/shop_1.jpg"),
          name: "护发亮泽洗发水",
        },
        {
          id: 5,
          img: require("../../assets/images/classify/shop_2.jpg"),
          name: "护发亮泽洗发水",
        },
        {
          id: 6,
          img: require("../../assets/images/classify/shop_1.jpg"),
          name: "护发亮泽洗发水",
        },
      ],
      proList2: [
        {
          id: 1,
          img: require("../../assets/images/classify/shop_1.jpg"),
          name: "护发亮泽洗发水",
        },
        {
          id: 2,
          img: require("../../assets/images/classify/shop_2.jpg"),
          name: "护发亮泽洗发水",
        },
        {
          id: 3,
          img: require("../../assets/images/classify/shop_1.jpg"),
          name: "护发亮泽洗发水",
        },
      ],
    };
  },
  mounted() {
    //组件一加载就获取列表
    this.getCateTree();
    this.getGoods();
  },
  methods: {
    //封装树型结构
    getCateTree() {
      this.$http.get("/api/api/getcatetree").then((res) => {
        if (res.data.code == 200) {
           this.leftNavlist = res.data.list;
           console.log(this.leftNavlist)
        }
      });
    },
    //封装分类商品
    getGoods(){
      this.$http.get('/api/api/getgoods')
      .then(res=>{
        if(res.data.code == 200){
          this.proList1 = res.data.list
        }
      })
    },
   
   },
};
</script>
<style scoped>
@import "../../assets/css/classify.css";
</style>

