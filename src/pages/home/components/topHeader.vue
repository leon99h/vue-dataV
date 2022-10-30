<template>
  <div id="top-header">
    <div class="times-box">
      <span>{{ nowDate }}</span>
    </div>
    <div class="c-t b1 t0">
      系统总览
    </div>
    <div class="c-t b2 t1">
      储能监视
    </div>
    <div class="c-t b2 t2">
      储能控制
    </div>
    <div class="center-title">
      <p class="center-title-text">
        储能系统监控平台
      </p>
    </div>
    <div class="c-t b2 fz" style="right:400px">
      <span>空调消防</span>
    </div>
    <div class="c-t b2 fz" style="right:274px">
      <span>报警信息</span>
    </div>
    <div class="c-t b2 fz" style="right:147px">
      <span>报表分析</span>
    </div>
    <div class="esc" @click="onscreenfull">
      <span>ESC</span>
    </div>
  </div>
</template>

<script>
import img1 from "./img/3.png";
import img2 from "./img/2.png";
import img4 from "./img/4.png";
import screenfull from "screenfull";
export default {
  name: "TopHeader",
  data() {
    return {
      nowDate: "",
      timer: "",
      img1,
      img2,
      img4
    };
  },
  created() {
    this.timer = setInterval(this.gettime, 1000);
  },
  methods: {
    gettime() {
      this.nowDate = new Date().toLocaleString();
    },

    onscreenfull() {
      screenfull.toggle();
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  }
};
</script>

<style lang="less">
#top-header {
  position: relative;
  width: 100%;
  height: 56px;
  box-shadow: 0px 0px 20px 6px rgba(67, 147, 170, 0.6) inset;
  .times-box {
    width: 294px;
    height: 72px;
    color: #a3cade;
    font-size: 24px;
    font-weight: 600;
    line-height: 72px;
    background: url("./img/4.png") -12px;
    background-size: 100% 100%;
    transform: scale(0.5);
    position: absolute;
    top: -8px;
    left: -56px;
    span {
      margin-left: 10px;
    }
  }
  // 文字
  .c-t {
    width: 138px;
    height: 36px;
    position: absolute;
    top: 10px;
    color: rgba(163, 202, 222, 1);
    font-size: 15px;
    line-height: 36px;
    text-align: center;
    z-index: 10;
    &.b1 {
      background: url("./img/2.png") no-repeat;
      background-size: 100% auto;
    }
    &.t0 {
      left: 147px;
    }
    &.t1 {
      left: 274px;
    }
    &.t2 {
      left: 402px;
    }
    &.b2 {
      background: url("./img/3.png") no-repeat;
      background-size: 100% 100%;
    }
    &.fz {
      transform: rotateY(180deg);
      span {
        position: absolute;
        transform: rotateY(180deg);
        width: 100%;
        top: 0;
        left: 0;
      }
    }
  }
  // 文字end
  .center-title {
    width: 388px;
    height: 52px;
    position: absolute;
    font-size: 24px;
    font-weight: bold;
    left: 50%;
    top: 6px;
    transform: translateX(-50%);
    background: url("./img/7.png");
    background-size: 100% 100%;
    text-align: center;
    line-height: 52px;
    .center-title-text {
      font-size: 24px;
      font-weight: 600;
      background: linear-gradient(0deg, #e0f2f6 0%, #8db8dc 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .esc {
    width: 146px;
    height: 36px;
    line-height: 36px;
    background: url("./img/6.png");
    background-size: 100% 100%;
    position: absolute;
    top: 10px;
    right: 10px;
    span {
      font-size: 15px;
      color: #a3cade;
      margin-left: 50px;
    }
  }
}
</style>
