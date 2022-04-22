<template>
  <div class="my">
    <van-nav-bar
      title="签约详情"
      left-text="返回"
      right-text="查看协议"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-notice-bar color="#fff" background="#119468" left-icon="info-o">
     签约成功，签约生效中
    </van-notice-bar>
    <h3>居民信息</h3>
    <div class="con">
      <ul>
        <li><span>姓名</span>王安然</li>
        <li><span>身份证号</span>78955422354569512</li>
        <li><span>性别</span>女</li>
        <li><span>年龄</span>26</li>
        <li><span>联系电话</span>78954123654</li>
        <li><span>现居地</span>古风歌被动句不可兼得VB接口VB</li>
      </ul>
    </div>
    <h3>签约信息</h3>
    <div class="con">
      <ul>
        <li><span>签约状态</span>已生效</li>
        <li><span>签约机构</span>罗西社区卫生服务站</li>
        <li><span>签约团队</span>李明明团队</li>
        <li><span>签约医生</span>李明明</li>
        <li><span>签约医生</span>1年</li>
        <li><span>服务包</span>老年服务包</li>
        <li><span>生效日期</span>2020/10/09</li>
        <li><span>费用</span>$120</li>
        <li><span>申请时间</span>2020/10/09 10:09:09</li>
        <li><span>签约备注</span></li>
      </ul>
    </div>
    <div class="ff"></div>
    <div class="fto">
      <button @click="tong">续约</button>
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
      this.$router.push({ path: "/qian" });
    },
    onClickRight() {
      this.$router.push({ path: "/About" });
    },
    bo() {
      // this.$router.push({ path: "/" });
    },
    tong() {
      // this.$router.push({ path: "/" });
    },
  },
  components: {},
  computed: {},
  watch: {},
  created() {},
};
</script>
<style lang="scss" scoped>
.ff {
  height: 100px;
}
.fto {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  button {
    margin: 10px;
    width: 90%;
    height: 40px;
    border: none;
    background-color: rgb(17, 148, 104);
    border-radius: 10px;
    color: white;
  }
  .as {
    border: 1px solid #f00;
    background: #fff;
    color: #f00;
  }
}
.my {
  background-color: aliceblue;
}
.con {
  li {
    background-color: #fff;
    width: 90%;
    margin: 0 auto;
    height: 40px;
    text-align: left;
    box-sizing: border-box;
    padding: 15px;
    span {
      display: inline-block;
      width: 100px;
    }
  }
}
</style>