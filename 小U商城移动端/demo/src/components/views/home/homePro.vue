<template>
     <div class="pro-nav ">
            <div class="wrap">
                <a href="#" class="active" v-for='(item) in proNavList' :key='item.id'>
                {{item.name}}
                 </a>
            </div>
        </div>
        
</template>
<script>
export default {
  data() {
    return {
      proNavList: [
        {
          id: 1,
          name: "热门推荐"
        },
        {
          id: 2,
          name: "发现好货"
        },
        {
          id: 3,
          name: " 只看专场"
        },
        {
          id: 4,
          name: " 只看商品"
        }
      ]
    };
  },
  mounted() {
    //组件一加载就调取接口
    this.gethomePro();
  },
  methods: {
    //封装一个获取列表事件
    gethomePro(){
      this.$http.get("/api/api/getbanner")
      .then(res=>{
          if (res.data.code == 200) {
            this.tableData = res.data.list;
          }
          console.log(this.tableData, "响应");
      })
    }
  },
};
</script>
<style scoped>
.pro-nav {
  background-color: #fff;
  display: flex;
  height: 1.1rem;
  padding-top: 0.6rem;
}
.pro-nav a {
  font-size: 0.3rem;
  color: #333;
  padding: 0.2rem 0.23rem;
  border: 1px solid #dcdcdc;
  border-left: none;
  margin-top: 0.2rem;
  font-weight: bold;
}
/* .pro-nav a.active {
  color: #fff;
  background-color: #f26b11;
  border-left: 1px solid #dcdcdc;
} */
</style>

