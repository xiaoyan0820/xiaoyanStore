<template>
  <div>
    <!-- 二级路由出口 -->
    <router-view></router-view>
    <div class="fixed-menu">
      <div class="con">
        <nav class="nav">
          <router-link activeClass="active" to="/home">
            <i class="iconfont icon-1"></i>
            <span>首页</span>
          </router-link>
          <router-link activeClass="active" to="/car">
            <i class="iconfont icon-icozhuanhuan"></i>
            <span>购物车</span>
          </router-link>
          <router-link activeClass="active" to="/mine">
            <i class="iconfont icon-dibudaohanglan-"></i>
            <span>我的</span>
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>
<style scoped>
.fixed-menu {
  position: fixed;
  left: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3.75rem;
  width: 100%;
  height: 1.2rem;
 
}
.fixed-menu .con {
  width: 7.5rem;
  height: 1.2rem;
  /* margin: 0 auto; */
  background-color: #fff;
 
}
.fixed-menu .nav {
  font-size: 0.22rem;
  width: 6.3rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-top: 0.22rem;
  box-sizing: border-box;
  line-height: 1.8;
   padding-bottom: .5rem;
}
.fixed-menu .nav a {
  color: #999;
  text-align: center;
  display: inline-block;
 
}
.fixed-menu .nav a span {
  display: inline-block;
  margin-top: 0.2rem;
  padding-bottom: 0.2rem;
}
.fixed-menu .nav a.active {
  color: #f26b11;
}
.fixed-menu .nav a i {
  display: block;
  width: 0.58rem;
  height: 0.58rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center bottom;
}
.icon-1 {
  display: inline-block;
  width: 0.58rem;
  height: 0.58rem;
}
</style>

