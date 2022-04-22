<template>
  <div>
    <van-nav-bar
      title="结果"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="con">
        <h3>提交成功，等待居民支付</h3>
        <h6>签约信息已提交，居民支付后可完成签约</h6>
    </div>
    
    <div class="fot">
        <button class="i_1">查看签约进度</button>
        <button @click="add">返回首页</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/" });
    },
    
    add() {
      this.$router.push({ path: "./" });
    },
  },
  components: {},
  computed: {},
  watch: {},
  created() {},
};
</script>
<style lang="scss" scoped>
.con{
    height: 180px;
    text-align: center;
    margin-top: 50px;
    padding-top: 20px;
}
.fot{
    button{
        width: 90%;
        height: 40px;
        line-height: 40px;
        margin: 10px;
        background-color: #fff;
        // border: none;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    .i_1{
        background-color: #4ed6bc;
        color: white;
    }
}
</style>