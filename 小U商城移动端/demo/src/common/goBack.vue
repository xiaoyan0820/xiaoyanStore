<template>
    <div class="container">
       <div class="header">
           <div class="wrap">
                 <div class="cart">
            <img src="../assets/images/classify/images/cart_03.jpg" alt="" @click='$router.go(-1)'>
         </div>
         <!-- <button class="iconfont icon-fanhui-xianxing" @click='$router.go(-1)'>返回</button> -->
           </div>
       </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="" scoped>
.container {
  width: 7.5rem;
  margin: 0 auto;
  background-color: #ffffff;
}
.wrap {
  width: 7.1rem;
  margin: 0 auto;
}
.header {
  width: 7.5rem;
  position: fixed;
  top: 0;
  left: 50%;
  margin-left: -3.75rem;
  z-index: 999;
  height: 0.88rem;
  background-color: #f26b11;
}
.header .wrap {
  height: 0.88rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header .cart img {
  width: 0.36rem;
  height: 0.36rem;
}
</style>