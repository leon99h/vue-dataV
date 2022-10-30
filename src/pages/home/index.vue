<template>
  <div id="data-view">
    <dv-full-screen-container>
      <top-header />
      <div class="main-content">
        <div class="row-left">
          <storageSummary />
          <bmsVoltage />
        </div>
        <div class="row-center">
          <mainInfo />
          <div class="row-center-b">
            <weekMcd />
            <socCurve />
          </div>
        </div>
        <div class="row-left">
          <failureDetection />
          <monitorData />
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import topHeader from "./components/topHeader";
import storageSummary from "./components/storageSummary";
import bmsVoltage from "./components/bmsVoltage";
import failureDetection from "./components/failureDetection";
import monitorData from "./components/monitorData";
import mainInfo from "./components/main-info";
import socCurve from "./components/soc-curve";
import weekMcd from "./components/week-mcd";

export default {
  name: "DataView",
  components: {
    topHeader,
    storageSummary,
    bmsVoltage,
    failureDetection,
    monitorData,
    mainInfo,
    socCurve,
    weekMcd
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
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }
  .main-content {
    flex: 1;
    display: flex;
    .row-left {
      width: 250px;
      margin: 12px 10px 0 14px;
      position: relative;
    }
    .row-center {
      flex: 1;
      .row-center-b {
        height: 168px;
        width: 100%;
        display: grid;
        grid-template-columns: 398px 470px;
        justify-content: space-around;
        position: relative;
      }
    }
    .row-right {
      width: 250px;
      border: 1px solid #000;
      margin: 12px 10px 0 14px;
    }
  }
}
</style>
