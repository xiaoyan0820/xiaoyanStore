<template>
  <div>
    <el-table
      :data="getStateBannerList"
      border
      style="width: 100%"
      row-key="id"
      :tree-props="{children: 'children'}"
    >
      <el-table-column prop="id" label="编号"></el-table-column>
      <el-table-column prop="title" label="轮播图标题"></el-table-column>
      <el-table-column prop="img" label="图片">
        <template slot-scope="item">
          <img class="imgInfo" :src="'http://localhost:3000/'+item.row.img" alt />
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态">
        <template slot-scope="item">
          <el-tag v-if="item.row.status==1" type="success">启动</el-tag>
          <el-tag v-if="item.row.status==2" type="danger">禁用</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="item">
          <el-button size="small" type="primary" @click="update(item.row.id)">编辑</el-button>
          <el-button size="small" type="danger" @click="del(item.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
//引入菜单接口
import { getBannerDelete } from "../../../util/axios";
//调取辅助性函数
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    //计算属性
    ...mapGetters(["getStateBannerList"])
  },
  mounted() {
    //组件一加载就调取菜单接口
    //触发才调取vuex中的菜单列表
    this.getActionBannerList();
  },
  methods: {
    //封装一个获取菜单列表事件
    ...mapActions(["getActionBannerList"]),
    //点击添加按钮修改父组件数据
    update(id) {
      this.$emit("edit", {
        isAdd: false,
        dialogIsShow: true,
        id
      });
    },
    //删除事件
    del(id) {
      this.$confirm("你确定要删除这条数据吗", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          //调取删除逻辑
          getBannerDelete({ id }).then(res => {
            if (res.data.code == 200) {
              //重新调取接口列表
              this.getActionBannerList();
              this.$message.success(res.data.msg);
            } else {
              this.$message.error(res.data.msg);
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>