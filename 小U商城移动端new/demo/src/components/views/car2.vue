<template>
    <div>
        <!-- 顶部导航 -->
        <van-nav-bar
            @click-left="$router.back()"
            :title="$route.meta.title"
            left-text="返回"
            left-arrow
        ></van-nav-bar>
        <van-list>
            <van-card
                v-for="item in carList"
                :key="item.id"
                class="card"
                :price="item.price"
                :desc="item.goodsname"
                :title="item.goodsname"
                :thumb="$imgUrl+item.img"
            >
                <template #footer>
                    <van-stepper  :value="item.num" async-change  />
                </template>
            </van-card>
            <van-empty v-if="carList==null" description="购物车空空如也，快去买买买。。。" />
        </van-list>
    </div>
</template>

<script>
import { Toast } from 'vant'
import { cartlist } from '../../util/axios'
export default {
    data() {
        return {
            carList: [],
        }
    },
    mounted() {
        this.getCarList()
    },
    methods: {
        getCarList() {
            cartlist({
                uid: JSON.parse(sessionStorage.getItem('userInfo')).uid,
            }).then((res) => {
                 console.log(res, '返回值')
                if (res.code == 200) {
                    console.log(res, '返回值')
                    this.carList = res.list
                    this.carList.map(item=>{
                        item.status = item.status==1 ? true :false
                    })
                } else {
                    Toast(res.msg)
                }
            })
        },
    },
    beforeRouteEnter(to, from, next) {
        if (sessionStorage.getItem('userInfo')) {
            next()
        } else {
            Toast('请先登录,才能查看购物车')
            //直接给用户跳转到购物车
            next('/login')
        }
    },
}
</script>

<style  lang="" scoped>
.card {
    background: #fff !important;
    margin-bottom: 10px !important;
}
</style>
