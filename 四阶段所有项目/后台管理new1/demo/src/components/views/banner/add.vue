<template>
  <div>
    <!-- 弹框内容 -->
    <el-dialog
      :title="addInfo.isAdd ? '添加轮播图':'编辑轮播图'"
      :visible.sync="addInfo.dialogIsShow"
      center
      :before-close="cancel"
    >
      <el-form :model="bannerInfo" :rules="rules" ref="bannerInfo">
        <el-form-item label="轮播图名称：" :label-width="formLabelWidth" prop="title">
          <el-input v-model="bannerInfo.title"></el-input>
        </el-form-item>
        <el-form-item label="图片：" :label-width="formLabelWidth">
          <!-- 
                        上传图片
                        auto-upload	是否在选取文件后立即进行上传
                        action	必选参数，上传的地址
          -->
          <el-upload
            action="#"
            list-type="picture-card"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            :auto-upload="false"
            :on-change="changeInfo"
            :limit="1"
            :on-exceed="handleExceed"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </el-form-item>
        <el-form-item label="状态：" :label-width="formLabelWidth">
          <el-radio v-model="bannerInfo.status" label="1">启用</el-radio>
          <el-radio v-model="bannerInfo.status" label="2">禁用</el-radio>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button v-if="addInfo.isAdd" type="primary" @click="subInfo('bannerInfo')">新 增</el-button>
        <el-button v-else type="primary" @click="subInfo('bannerInfo')">更 新</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
console.log(1111);
//引入菜单接口
import {
  getBannerAdd,
  getBannerEdit,
  getBannerInfo,
  getBannerList,
  getBannerDelete,
} from "../../../util/axios";
//调取辅助性函数
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["addInfo"],
  data() {
    return {
      fileList: [], //文件上传列表
      dialogImageUrl: "", //显示图片
      dialogVisible: false, //开启图片的弹框
      imgUrl: "", //上传之后的图片地址
      isAdd: true, //添加
      formLabelWidth: "100px", //label宽度
      bannerInfo: {
        title: "", //轮播图名称
        id: "", //轮播图编号
        status: "1",
        img: "", //图片
      },
      editId: 0, //修改id
      dialogIsShow: false, //是否出现弹框
      rules: {
        title: [
          {
            required: true,
            message: "请输入菜单名称",
            trigger: "blur",
          },
          {
            min: 2,
            max: 6,
            message: "长度在 2 到 6 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {
    //计算属性
    ...mapGetters(["getStateBannerList"]),
  },
  methods: {
    //封装一个获取轮播图列表事件
    ...mapActions(["getActionBannerList"]),
    //当文件个数被限制时触发的函数
    handleExceed(file, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
       
      );
       console.log(file,'file内容')
    },
    //移除图片
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    //放大图片
    handlePreview(file) {
      this.dialogImageUrl = file.url;
      console.log(file.url, "图片的地址。。。");
      this.dialogVisible = true;

      console.log(file, "文件地址");
    },
    changeInfo(file) {
      console.log(file, "修改文件");
      this.imgUrl = file.raw;
    },
    //关闭弹框事件
    cancel() {
      this.reset();
      this.$emit("cancel", false);
    },
    //重置输入内容
    reset() {
      this.fileList = []; //上传文件列表
      this.bannerInfo = {
        title: "", //轮播图名称
        id: "", //轮播图编号
        status: "1",
        img: "", //图片
      };
    },
    //点击编辑按钮出现弹框并携带数据
    update(id) {
      //给编辑id赋值
      this.editId = id;
      //调取菜单查询一条数据
      getBannerInfo({ id }).then((res) => {
        if (res.data.code == 200) {
          console.log(res);
          this.bannerInfo = res.data.list;
          //this.bannerInfo.type = this.bannerInfo.type.toString();
          //对获取的图片进行格式转化
          this.fileList = this.bannerInfo.img
            ? [{ url: `http://localhost:3000${this.bannerInfo.img}` }]
            : [];
          this.bannerInfo.status = this.bannerInfo.status.toString();
        }
      });
    },
    //确定添加或者更新事件
    subInfo(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let data = this.bannerInfo;
          console.log(data,'data数据')//没有id和img
          //如果有上传文件 那我们不能直接传值 需要利用FormData转化
          let file = new FormData();
          for (let i in data) {
            file.append(i, data[i]);
          }
          //单独对图片地址进行操作
          file.append('img', this.imgUrl);
          console.log(this.imgUrl)//也有
          //console.log()
          //根据isAdd状态去判断执行接口
          if (this.addInfo.isAdd) {
            //调取添加接口
            getBannerAdd(file).then((res) => {
              if (res.data.code == 200) {
                  console.log(res,'轮播图添加')
                //关闭弹框 清空输入框
                //this.dialogIsShow = false;
                console.log(file,'file内容111')
                //清空输入框
                //this.reset();
                this.cancel();
                //添加成功重新查询列表
                this.getActionBannerList();
                this.$message.success(res.data.msg);
              } else if (res.data.code == 500) {
                this.$message.warning(res.data.msg);
              } else {
                this.$message.error(res.data.msg);
              }
            });
          } else {
            file.append("id", this.editId);
            let data = this.bannerInfo;
            data.id = this.editId;
            //调取更新接口
            getBannerEdit(file).then((res) => {
              if (res.data.code == 200) {
                //关闭弹框 清空输入框
                //关闭弹框
                this.dialogIsShow = false;
                //清空输入框
                this.reset();
                this.cancel();
                //添加成功重新查询列表
                this.getActionBannerList();
                this.$message.success(res.data.msg);
              } else if (res.data.code == 500) {
                this.$message.warning(res.data.msg);
              } else {
                this.$message.error(res.data.msg);
              }
            });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style  lang="" scoped>
.el-button {
  margin-bottom: 10px;
}

.el-input {
  width: 85%;
}

.imgInfo {
  width: 150px;
}
</style>
