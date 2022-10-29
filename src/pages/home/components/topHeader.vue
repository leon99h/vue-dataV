<template>
  <div id="top-header">
    <div class="times-box">
      {{ nowDate }}
      <img :src="img4" alt="" />
    </div>
    <div class="c-t">
      <img class="" :src="img2" alt="" />
      <span class="text">系统总览</span>
    </div>
    <div class="center-title">
      <p class="center-title-text">
        储能系统监控平台
      </p>
    </div>
    <div class="esc" @click="onscreenfull"></div>
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
    width: 196px;
    height: 48px;
    border: 1px solid yellow;
    color: #a3cade;
    font-size: 16px;
    font-weight: 600;
    line-height: 48px;
    text-align: center;
    margin: 20px 0 0 14px;
    position: relative;
    img {
      width: 220px;
      height: 48px;
      border: 1px solid yellow;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  // 文字
  .c-t {
    width: 200px;
    height: 50px;
    border: 1px solid #000;
    position: absolute;
    top: 20px;
    left: 30px;
    img {
      position: absolute;
      width: 100%;
      z-index: 1;
      &.f {
        transform: rotateY(180deg);
      }
    }
    .text {
      position: absolute;
      z-index: 2;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: red;
    }
  }
  // 文字end
  .center-title {
    width: 388px;
    height: 52px;
    border: 1px solid #000;
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
      color: #eff0f1;
      background: linear-gradient(0deg, #e0f2f6 0%, #8db8dc 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .esc {
    width: 196px;
    height: 48px;
    background: url("./img/6.png");
    background-size: 100% 100%;
    position: absolute;
    top: 20px;
    right: 504px;
    background: red;
    z-index: 999;
  }
}
</style>
