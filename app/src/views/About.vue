<template>
  <div>
    <van-nav-bar
      title="居民基本信息"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <h3>居民基本信息</h3>
    <div class="con">
      <div>
        <span> 真实姓名<b style="color: red">*</b>:</span
        ><input type="span" placeholder="请输入居民的真实姓名" v-model="name" />
      </div>
      <div>
        <span> 身份证号<b style="color: red">*</b>:</span
        ><input
          type="span"
          placeholder="请输入居民的身份证号码"
          v-model="name"
        />
      </div>
      <div>
        <span> 性别<b style="color: red">*</b>:</span
        ><input type="span" placeholder="请输入居民的性别" v-model="name" />
      </div>
      <div>
        <span> 出生日期<b style="color: red">*</b>:</span
        ><input type="span" placeholder="请输入居民的出生日期" v-model="name" />
      </div>
      <div>
        <span> 手机号码<b style="color: red">*</b>:</span
        ><input type="span" placeholder="请输入居民的手机号" v-model="name" />
      </div>
      <div>
        <span> 登录密码<b style="color: red">*</b>:</span
        ><input type="span" placeholder="请输入居民的登录密码" v-model="name" />
      </div>
      <div>
        <span> 现居地:</span
        ><input type="span" placeholder="请输入居民的现居地" v-model="name" />
      </div>
      <div>
        <span> 居民标签:</span
        ><input type="span" placeholder="请输入居民的居民标签" v-model="name" />
      </div>
      <ul>
        <li>高血压</li>
        <li>冠心病</li>
        <li>高血糖</li>
        <li>高血脂</li>
        <li>高血压</li>
        <li>冠心病</li>
        <li>高血糖</li>
        <li>高血脂</li>
      </ul>
      <div class="do">
        <span> 关联家人:</span>请核对该居民家人信息<span
          class="r_1" @click="app"
          >向右:</span
        >
      </div>
    </div>
    <div class="fol">
      <span>立即预约:</span>
      <van-switch v-model="checked" size="24px" />
    </div>
    <button class="bn" @click="add">下一步</button>
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
      this.$router.push({ path: "./" });
    },
    add() {
      this.$router.push({ path: "./qianyue" });
    },
    app() {
      this.$router.push({ path: "./jumin" });
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
  background-color: whitesmoke;
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
  background-color: whitesmoke;
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
  background-color: whitesmoke;
}
</style>