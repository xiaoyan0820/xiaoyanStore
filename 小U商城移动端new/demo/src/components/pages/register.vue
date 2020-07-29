<template>
  <div class="container clearfix">
    <div class="header">
      <div class="wrap">
        <go-back></go-back>
        <p class="title">会员注册</p>
        <div class="points">
          <router-link to="/login" class="login">登录</router-link>
        </div>
      </div>
    </div>
    <div class="center">
      <ul>
        <li>
          <label for="nickName">昵称：</label>
          <input type="text" id="nickName" v-model="registerInfo.nickname" />
        </li>
        <li>
          <label for="phone">手机号：</label>
          <input type="text" id="phone" v-model="registerInfo.phone" />
        </li>
        <li>
          <label for="password">密码：</label>
          <input type="text" id="password" v-model="registerInfo.password" />
        </li>
        <li>
          <label for="code">验证码：</label>
          <input type="text" id="code" />
        </li>
        <li>
          <button type="submit" @click="register">会员注册</button>
        </li>
        <p>
          <input type="checkbox" name id />我已阅读并同意使用条款和隐私政策
        </p>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      registerInfo: {
        phone: "", //手机号
        nickname: "", //昵称
        password: "", //密码
      },
    };
  },
  methods: {
    //封装一个会员添加方法
    register() {
      this.$http.post("/api/api/register", this.registerInfo).then((res) => {
        if (res.data.code == 200) {
          console.log(res, "1111");
          alert("会员注册成功");
          this.$router.push("/login");
        }
      });
    },
  },
};
</script>
<style lang="" scoped>
@import "../../assets/css/register.css";
</style>