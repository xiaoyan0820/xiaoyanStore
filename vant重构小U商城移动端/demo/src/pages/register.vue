<template>
    <div>
        <!-- 顶部导航 -->
        <van-nav-bar
            @click-left="$router.back()"
            :title="$route.meta.title"
            left-text="返回"
            left-arrow
        >
            <template #right>登录</template>
        </van-nav-bar>
        <!-- 登录表单 -->
        <van-form @submit="register">
            <van-field
                v-model="userInfo.phone"
                name="用户名"
                label="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                v-model="userInfo.nickname"
                name="昵称"
                label="昵称"
                placeholder="昵称"
                :rules="[{ required: true, message: '请填写昵称' }]"
            />
            <van-field
                v-model="userInfo.password"
                type="password"
                name="密码"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">注册</van-button>
            </div>
        </van-form>
        <div class="loginInfo">
            <van-button plain hairline type="info" to="login">已有账号？快去登录吧</van-button>
        </div>
    </div>
</template>

<script>
// 引入轻提示框
import { Toast } from 'vant'
import { register } from '../util/axios'
export default {
    data() {
        return {
            userInfo: {
                phone: '',
                password: '',
                nickname: '',
            },
        }
    },
    methods: {
        //登录事件
        register() {
            register(this.userInfo).then((res) => {
                if (res.code == 200) {
                    Toast.success(res.msg)
                    //清空输入框 并 跳转到登录界面
                    this.userInfo = {
                        phone: '',
                        password: '',
                        nickname: '',
                    }
                    this.$router.push('/login')
                } else if (res.code == 500) {
                    Toast.fail(res.msg)
                } else {
                    Toast.fail(res.msg)
                }
            })
        },
    },
}
</script>

<style  lang="" scoped>
.loginInfo {
    text-align: center;
}
</style>
