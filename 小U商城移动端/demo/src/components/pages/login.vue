<template>
  <div class="container clearfix">
    <div class="header">
      <div class="wrap">
        <go-back></go-back>
        <p class="title" >会员登录</p>
        <div class="points">
          <router-link to="/register" class="login">注册</router-link>
        </div>
      </div>
    </div>
    <div class="center">
      <ul>
        <li>
          <label for="phone">手机号：</label>
          <input type="text" id="phone" v-model="userInfo.phone" />
        </li>
        <li>
          <label for="password">密码：</label>
          <input type="text" id="password" v-model="userInfo.password" />
        </li>

        <li>
          <button type="submit" @click="getLogin" >会员登录</button>
        </li>
      </ul>
      <p>忘记密码</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: {
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    //调取登录接口
    getLogin() {
      this.$http.post("/api/api/login", this.userInfo).then((res) => {
        if (res.data.code == 200) {
          //把登录信息存储到本地存储中
          sessionStorage.setItem("userInfo", JSON.stringify(res.data.list));
          //登录成功之后就要跳转到index
          alert('登录成功')
          this.$router.push("/home");
        }
      });
    },
  },
};
</script>
<style lang="" scoped>
@import "../../assets/css/login.css";
</style>