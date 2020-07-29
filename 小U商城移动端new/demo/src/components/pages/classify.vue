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
      <!-- <ul>
        <li v-for="(item) in leftNavlist" :key="item.id">
          <a href="#" class="active">{{item.catename}}</a>
        </li>
      </ul> -->
       <!-- 侧边栏导航 -->
            <van-sidebar v-model="activeKey" @change="onChange">
                <van-sidebar-item v-for="item in leftNavlist" :key="item.id" :title="item.catename" />
            </van-sidebar>
    </div>
    <div class="pro-list">
      <div class="center">
        <!-- <div class="head">
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
        </ul> -->

        <!-- <div class="head">
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
        </ul> -->
          <!-- 分类商品展示 -->
           <ul>
          <!-- <li :to='"/list?id="+secondItem.id' v-for="secondItem in secondList" :key="secondItem.id">
            <a href="#">
              <img :src="'http://localhost:3000/'+secondItem.img" alt />
              <p>{{secondItem.catename}}</p>
            </a>
          </li> -->
          <!-- <router-link :to='"/list?id="+secondItem.id' v-for="secondItem in secondList" :key="secondItem.id" tag="li" >
           <a href="#">
              <img :src="'http://localhost:3000/'+secondItem.img" alt />
              <p>{{secondItem.catename}}</p>
            </a>
          </router-link> -->
           <van-grid :column-num="3" :gutter="5">
                <van-grid-item :to='"/list?id="+secondItem.id' v-for="secondItem in secondList" :key="secondItem.id">
                    <van-image :src="'http://localhost:3000/'+secondItem.img" />
                    {{secondItem.catename}}
                </van-grid-item>
                <van-grid-item v-if='secondList==undefined'>暂无数据</van-grid-item>
            </van-grid>
          <li v-if='secondList==undefined'>暂无数据</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
       activeKey: 0,
       secondList:[],
       leftNavlist: [],
    };
  },
  mounted() {
    //组件一加载就获取列表
    this.getCateTree();
  },
  methods: {
    //封装change方法
    onChange(index){
        this.secondList = this.leftNavlist[this.activeKey].children
        console.log(this.leftNavlist[this.activeKey])
        console.log(this.secondList)
    },
    //封装树型结构
    getCateTree() {
      this.$http.get("/api/api/getcatetree").then((res) => {
        if (res.data.code == 200) {
           this.leftNavlist = res.data.list;
            //默认选中的数据
            this.secondList = this.leftNavlist[this.activeKey].children
        }
      });
    },
    
   },
};
</script>
<style scoped>
@import "../../assets/css/classify.css";
</style>

