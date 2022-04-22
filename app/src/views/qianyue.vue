<template>
  <div>
    <van-nav-bar
      title="填写签约信息"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <h3>签约信息</h3>
    <div class="con">
      <div>
        <span> 签约机构:</span
        ><input type="span" placeholder="罗喜色区卫生服务" v-model="name" />
      </div>
      <div>
        <span> 签约团队:</span
        ><input type="span" placeholder="李明明团队" v-model="name" />
      </div>
      <div>
        <span> 签约医生:</span
        ><input type="span" placeholder="卢明明" v-model="name" />
      </div>
      <div>
        <span> 服务包:</span
        ><input type="span" placeholder="老人" v-model="name" />
      </div>
      <div>
        <span> 签约周期:</span
        ><input type="span" placeholder="1年" v-model="name" />
      </div>
      <div>
        <span> 生效日期:</span
        ><input type="span" placeholder="2020/09/01" v-model="name" />
      </div>
      <div>
        <span> 费用:</span>
        <span style="color: red">￥120</span>
      </div>
      <div class="i_1">
          <span>备注：</span>
          <div class="i12">请填写备注</div>
      </div>
    </div>
    <button class="bn" @click="add">提交</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      checked: true,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: "./About" });
    },
    add() {
      this.$router.push({ path: "./jieguo" });
    },
  },
  components: {},
  computed: {},
  watch: {},
  created() {},
};
</script>
<style lang="scss" scoped>

h3 {
  height: 50px;
  line-height: 50px;
  margin-left: 15px;
}
.bn {
  width: 80%;
  margin: 10px 10%;
  height: 50px;
  border: none;
  background-color: rgb(7, 156, 107);
  color: white;
  line-height: 50px;
}
.con > div {
  background-color: pink;
  margin: 5px;
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 15px;
  border-bottom: 1px solid #ccc;
  span {
    // margin-right: 10px;
    margin: 0 10px;
    display: inline-block;
    width: 100px;
  }
}
.fol {
  display: flex;
  justify-content: space-between;
  background-color: pink;
  // line-height: 50px;
  align-items: center;
  box-sizing: border-box;
  padding: 0 10px;
  height: 50px;
  border-bottom: 1px solid #ccc;
}
.do {
  display: flex;
  justify-content: space-between;
  text-align: center;
}
ul {
  display: flex;
  flex-wrap: wrap;
  li {
    width: 100px;
    text-align: center;
    height: 30px;
    margin: 5px;
    line-height: 30px;
    border: 1px solid #ccc;
  }
}
.con > div > input {
  width: 500rpx;
  border: none;
  background-color: pink;
}
</style>