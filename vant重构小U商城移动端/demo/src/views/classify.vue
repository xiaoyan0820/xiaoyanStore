<template>
    <div>
        <!-- 顶部导航 -->
        <van-nav-bar :title="$route.meta.title" left-text="返回" left-arrow>
            <template #right>
                <van-icon name="search" size="18" />
            </template>
        </van-nav-bar>
        <div class="classifyBox">
            <!-- 侧边栏导航 -->
            <van-sidebar v-model="activeKey" @change="onChange">
                <van-sidebar-item v-for="item in cateList" :key="item.id" :title="item.catename" />
            </van-sidebar>
            <!-- 分类商品展示 -->
            <van-grid :column-num="3" :gutter="5">
                <van-grid-item :to='"/goodsList?id="+secondItem.id' v-for="secondItem in secondList" :key="secondItem.id">
                    <van-image :src="$imgUrl+secondItem.img" />
                    {{secondItem.catename}}
                </van-grid-item>
                <van-grid-item v-if='secondList==undefined'>暂无数据</van-grid-item>
            </van-grid>
        </div>
    </div>
</template>

<script>
import { getcatetree } from '../util/axios'
export default {
    data() {
        return {
            activeKey: 0,
            cateList: [],
            secondList: [],
        }
    },
    mounted() {
        //组件一加载 调取接口
        this.getCateTree()
    },
    methods: {
        //封装一个分类结构树
        getCateTree() {
            getcatetree().then((res) => {
                if (res.code == 200) {
                    this.cateList = res.list
                    //默认选中的数据
                    this.secondList = this.cateList[this.activeKey].children
                }
            })
        },
        onChange(index) {
            this.secondList = this.cateList[this.activeKey].children
        },
    },
}
</script>

<style  lang="" scoped>
.classifyBox {
    display: flex;
}
.van-grid {
    flex: 1;
}
</style>
