<template>
  <div id="main-info">
    <!-- <img src="./img/info.png" alt="" /> -->
    <dv-flyline-chart-enhanced
      :config="config"
      :dev="true"
      class="d-flyline-chart"
    />
    <div class="pabs end-text text1">风电</div>
    <div class="pabs start-text text1">电网</div>
    <div
      class="pabs end-text text1"
      v-for="v in info"
      :key="v.name"
      :style="{ left: v.left, top: v.top }"
    >
      <span>{{ v.name }}号箱</span>
      <span>{{ v.value }}%</span>
    </div>
  </div>
</template>

<script>
const BASEINFO = [
  {
    name: 1,
    value: 0,
    top: 438,
    left: 66
  }
];
import img from "./img/info.png";
export default {
  data() {
    return {
      config: {},
      info: BASEINFO
    };
  },
  created() {
    this.getConfig();
  },
  methods: {
    getData() {},
    getConfig() {
      this.config = {
        points: [
          {
            name: "131",
            coordinate: [0.48, 0.35]
          },
          {
            name: "新乡",
            coordinate: [0.52, 0.23]
          }
        ],
        bgImgSrc: img
      };
    }
  }
};
</script>

<style lang="less">
#main-info {
  width: 893px;
  height: 547px;
  border: 1px solid red;
  margin-top: 10px;
  position: relative;
  .d-flyline-chart {
    width: 100%;
    height: 100%;
  }
  .pabs {
    position: absolute;
  }
  .text1 {
    font-size: 12px;
    font-weight: 400;
    color: #eff0f1;
  }
  .end-text {
    top: 92px;
    left: 46px;
  }
  .start-text {
    top: 92px;
    right: 46px;
  }
}
</style>
