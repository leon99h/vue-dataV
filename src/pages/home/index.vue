<template>
  <div id="data-view">
    <dv-full-screen-container>
      <top-header />
      <div class="main-content">
        <div class="row-left">
          <storageSummary />
          <bmsVoltage />
        </div>
        <div class="row-center">123</div>
        <div class="row-right">1231</div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import topHeader from "./components/topHeader";
import storageSummary from "./components/storageSummary";
import bmsVoltage from "./components/bmsVoltage";

export default {
  name: "DataView",
  components: {
    topHeader,
    storageSummary,
    bmsVoltage
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less">
#data-view {
  width: 100%;
  height: 100%;
  background-color: rgb(9, 19, 47);
  color: #fff;

  #dv-full-screen-container {
    // background-image: url("./img/bg.png");
    // background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }
  .main-content {
    flex: 1;
    display: flex;
    .row-left {
      width: 250px;
      border: 1px solid #000;
      margin: 12px 10px 0 14px;
      position: relative;
    }
    .row-center {
      flex: 1;
      border: 1px solid #000;
    }
    .row-right {
      width: 250px;
      border: 1px solid #000;
      margin: 12px 10px 0 14px;
    }
  }
}
</style>
