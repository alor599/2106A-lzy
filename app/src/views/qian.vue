<template>
  <div class="home">
    <van-nav-bar
      title="签约申请"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-tabs v-model="active">
      <van-tab title="全部">
        <div class="cin">
          <div class="sign_contract_item" @click="my">
            <!-- 名字 -->
            <div class="name_box">
              <div class="name_box_left">
                <big class="name">王小明</big>
                <p class="age">58岁</p>
                <div class="jigou">机构门诊</div>
              </div>
              <div class="daishnehe">待审核</div>
            </div>

            <!-- 服务包 -->
            <div class="identity_card">
              <p class="name">服务包</p>
              <p>老年人服务包</p>
            </div>
            <!-- 服务项目 -->
            <div class="identity_card">
              <p class="name">服务项目</p>
              <p>高血压健康随访</p>
            </div>

            <!-- 申请时间 -->
            <div class="identity_card">
              <p class="name">申请时间</p>
              <p>2020/09/09 10:09:09</p>
            </div>
          </div>
          <div class="sign_contract_item" @click="fu">
            <!-- 名字 -->
            <div class="name_box">
              <div class="name_box_left">
                <big class="name">王小明</big>
                <p class="age">58岁</p>
                <div class="jigou">机构门诊</div>
              </div>
              <div class="daishnehe">待支付</div>
            </div>

            <!-- 服务包 -->
            <div class="identity_card">
              <p class="name">服务包</p>
              <p>老年人服务包</p>
            </div>
            <!-- 服务项目 -->
            <div class="identity_card">
              <p class="name">服务项目</p>
              <p>高血压健康随访</p>
            </div>

            <!-- 申请时间 -->
            <div class="identity_card">
              <p class="name">申请时间</p>
              <p>2020/09/09 10:09:09</p>
            </div>
          </div>
          <div class="sign_contract_item" @click="bo">
            <!-- 名字 -->
            <div class="name_box">
              <div class="name_box_left">
                <big class="name">王小明</big>
                <p class="age">58岁</p>
                <div class="jigou">机构门诊</div>
              </div>
              <div class="daishnehe">已驳回</div>
            </div>

            <!-- 服务包 -->
            <div class="identity_card">
              <p class="name">服务包</p>
              <p>老年人服务包</p>
            </div>
            <!-- 服务项目 -->
            <div class="identity_card">
              <p class="name">服务项目</p>
              <p>高血压健康随访</p>
            </div>

            <!-- 申请时间 -->
            <div class="identity_card">
              <p class="name">申请时间</p>
              <p>2020/09/09 10:09:09</p>
            </div>
          </div>
          <div class="sign_contract_item" @click="sheng">
            <!-- 名字 -->
            <div class="name_box">
              <div class="name_box_left">
                <big class="name">王小明</big>
                <p class="age">58岁</p>
                <div class="jigou">机构门诊</div>
              </div>
              <div class="daishnehe">生效中</div>
            </div>

            <!-- 服务包 -->
            <div class="identity_card">
              <p class="name">服务包</p>
              <p>老年人服务包</p>
            </div>
            <!-- 服务项目 -->
            <div class="identity_card">
              <p class="name">服务项目</p>
              <p>高血压健康随访</p>
            </div>

            <!-- 申请时间 -->
            <div class="identity_card">
              <p class="name">申请时间</p>
              <p>2020/09/09 10:09:09</p>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待审核">
        <div class="cin">
          <div class="sign_contract_item" @click="my">
            <!-- 名字 -->
            <div class="name_box">
              <div class="name_box_left">
                <big class="name">王小明</big>
                <p class="age">58岁</p>
                <div class="jigou">机构门诊</div>
              </div>
              <div class="daishnehe">待审核</div>
            </div>

            <!-- 服务包 -->
            <div class="identity_card">
              <p class="name">服务包</p>
              <p>老年人服务包</p>
            </div>
            <!-- 服务项目 -->
            <div class="identity_card">
              <p class="name">服务项目</p>
              <p>高血压健康随访</p>
            </div>

            <!-- 申请时间 -->
            <div class="identity_card">
              <p class="name">申请时间</p>
              <p>2020/09/09 10:09:09</p>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待支付">
        <div class="sign_contract_item" @click="fu">
          <!-- 名字 -->
          <div class="name_box">
            <div class="name_box_left">
              <big class="name">王小明</big>
              <p class="age">58岁</p>
              <div class="jigou">机构门诊</div>
            </div>
            <div class="daishnehe">待支付</div>
          </div>

          <!-- 服务包 -->
          <div class="identity_card">
            <p class="name">服务包</p>
            <p>老年人服务包</p>
          </div>
          <!-- 服务项目 -->
          <div class="identity_card">
            <p class="name">服务项目</p>
            <p>高血压健康随访</p>
          </div>

          <!-- 申请时间 -->
          <div class="identity_card">
            <p class="name">申请时间</p>
            <p>2020/09/09 10:09:09</p>
          </div>
        </div>
      </van-tab>
      <van-tab title="生效中">
        <div class="sign_contract_item" @click="sheng">
          <!-- 名字 -->
          <div class="name_box">
            <div class="name_box_left">
              <big class="name">王小明</big>
              <p class="age">58岁</p>
              <div class="jigou">机构门诊</div>
            </div>
            <div class="daishnehe">生效中</div>
          </div>

          <!-- 服务包 -->
          <div class="identity_card">
            <p class="name">服务包</p>
            <p>老年人服务包</p>
          </div>
          <!-- 服务项目 -->
          <div class="identity_card">
            <p class="name">服务项目</p>
            <p>高血压健康随访</p>
          </div>

          <!-- 申请时间 -->
          <div class="identity_card">
            <p class="name">申请时间</p>
            <p>2020/09/09 10:09:09</p>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: "./" });
    },
    my() {
      this.$router.push({ path: "./my" });
    },
    sheng() {
      this.$router.push({ path: "./sheng" });
    },
    fu() {
      this.$router.push({ path: "./fu" });
    },
    bo() {
      this.$router.push({ path: "./bo" });
    },
  },
  components: {},
  computed: {},
  watch: {},
  created() {},
};
</script>
<style lang="scss" scoped>
.home {
  box-sizing: border-box;
  height: 100%;
  padding: 0 20px;
}
.sign_contract_item {
  border: 0.1px solid #e9e9e9;
  padding: 30px 20px;
  border-radius: 10px;
  margin-bottom: 10px;
  // 名字
  .name_box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .name_box_left {
      display: flex;
      align-items: center;
      .name {
        width: 80px;
        font-size: 20px;
      }
      .age {
        // margin-left: 15px;
        color: rgb(83, 83, 83);
      }
      img {
        width: 20px;
        margin-left: 15px;
      }
      .jigou {
        padding: 2px 4px;
        border-radius: 5px;
        background-color: #e2e4fd;
        color: #7a83f5;
        margin-left: 15px;
      }
    }

    .daishnehe {
      color: #fa746b;
      font-size: 14px;
      float: right;
    }
  }

  // 身份证号
  .identity_card {
    display: flex;
    margin-top: 20px;
    align-items: center;
    font-size: 15px;
    .name {
      width: 80px;
    }
  }
}
</style>