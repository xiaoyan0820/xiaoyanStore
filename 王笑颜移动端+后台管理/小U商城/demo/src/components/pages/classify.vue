<template>
    <div class="container clearfix">
         <div class="header">
        <div class="wrap">
            <div class="cart">
                <img src="../../assets/images/classify/images/cart_03.jpg" alt="">
            </div>
            <p>
                商品分类
            </p>
            <div class="points">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
    <div class="left-nav">
        <ul>
             <li v-for='(item) in leftNavlist' :key='item.id'>
                <a href="#" class="active">
                    {{item.name}}
                </a>
            </li>
        </ul>
    </div>
    <div class="pro-list ">
        <div class="center">
             <div class="head">
                <p>洗发类</p>
                <a href="#">
                    更多
                        </a>
            </div>
            <ul>
                 <li v-for='(item) in proList1' :key='item.id'>
                    <a href="#">
                        <img :src="item.img" alt="">
                        <p>{{item.name}}</p>
                    </a>

                </li>
            </ul>
            
            <div class="head">
                <p>染发类</p>
                <a href="#">更多</a>
            </div>
            <ul>
                 <li v-for='(item) in proList2' :key='item.id'>
                    <a href="#">
                        <img :src="item.img" alt="">
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
      leftNavlist: [
        {
          id: 1,
          name: " 施华蔻"
        },
        {
          id: 2,
          name: " 沙宣"
        },
        {
          id: 3,
          name: " 欧莱雅"
        },
        {
          id: 4,
          name: "  潘婷"
        },
        {
          id: 5,
          name: " 资生堂"
        },
        {
          id: 6,
          name: "  阿道夫"
        },
        {
          id: 7,
          name: " 卡特"
        },
        {
          id: 8,
          name: " 海飞丝"
        },
        {
          id: 9,
          name: "  施华蔻"
        }
      ],
      proList1: [
        {
          id: 1,
          img: require("../../assets/images/classify/shop_1.jpg"),
          name: "护发亮泽洗发水"
        },
        {
          id: 2,
          img: require("../../assets/images/classify/shop_2.jpg"),
          name: "护发亮泽洗发水"
        },
        {
          id: 3,
          img: require("../../assets/images/classify/shop_1.jpg"),
          name: "护发亮泽洗发水"
        },
        {
          id: 4,
          img: require("../../assets/images/classify/shop_1.jpg"),
          name: "护发亮泽洗发水"
        },
        {
          id: 5,
          img: require("../../assets/images/classify/shop_2.jpg"),
          name: "护发亮泽洗发水"
        },
        {
          id: 6,
          img: require("../../assets/images/classify/shop_1.jpg"),
          name: "护发亮泽洗发水"
        }
      ],
      proList2: [
        {
          id: 1,
          img: require("../../assets/images/classify/shop_1.jpg"),
          name: "护发亮泽洗发水"
        },
        {
          id: 2,
          img: require("../../assets/images/classify/shop_2.jpg"),
          name: "护发亮泽洗发水"
        },
        {
          id: 3,
          img: require("../../assets/images/classify/shop_1.jpg"),
          name: "护发亮泽洗发水"
        }
      ]
    };
  }
};
</script>
<style scoped>
@import "../../assets/css/classify.css";
</style>

