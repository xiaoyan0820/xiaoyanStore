<template>
    <div class="pro-list">
        <ul>
           <router-link to="/proDetail">
            <li class="wrap" v-for='(item) in proList' :key='item.id'>
                    <a href="#">
                        <img :src="item.img" alt="">
                        <div class="des">
                            <p class="name">{{item.name}}l</p>
                            <p class="price">
                                <span>¥</span> {{item.price}}
                            </p>
                            <p class="saled">
                                {{item.saled}}
                            </p>
                            <p class="shop">{{item.shop}}</p>
                        </div>
                    </a>
                </li> 
           </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            proList:[
                {
                    id:1,
                    img:require("../../../assets/images/index_images/shop_4.jpg"),
                    name:'雅诗兰黛染发膏60ml',
                    price:'123.00',
                    saled:' 已售800件',
                    shop:'立即抢购'
                },
                  {
                    id:1,
                     img:require("../../../assets/images/index_images/shop_4.jpg"),
                    name:'雅诗兰黛染发膏60ml',
                    price:'123.00',
                    saled:' 已售800件',
                    shop:'立即抢购'
                },
                  {
                    id:1,
                     img:require("../../../assets/images/index_images/shop_4.jpg"),
                    name:'雅诗兰黛染发膏60ml',
                    price:'123.00',
                    saled:' 已售800件',
                    shop:'立即抢购'
                },
                  {
                    id:1,
                     img:require("../../../assets/images/index_images/shop_4.jpg"),
                    name:'雅诗兰黛染发膏60ml',
                    price:'123.00',
                    saled:' 已售800件',
                    shop:'立即抢购'
                },
            ]
        }
    }
}
</script><style scoped>
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

