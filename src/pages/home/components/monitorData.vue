<template>
  <div id="monitor-data">
    <div class="ss1-tit">
      <p class="text">数据监视</p>
    </div>

    <div class="ss2-box">
      <div class="ss2">
        <p class="text">功率容量</p>
        <ul class="con border-box">
          <li class="text-b" v-for="v in capacityList" :key="v.title">
            <i class="icon-round"></i>
            <div class="con-b">
              <span class="text-left">{{ v.title }}</span
              ><span>{{ v.value }}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="ss2">
        <p class="text">单体信息</p>
        <ul class="con">
          <li class="text-b" v-for="v in simpleList" :key="v.title">
            <i class="icon-round"></i>
            <div class="con-b">
              <span class="text-left">{{ v.title }}</span
              ><span>{{ v.value }}</span>
            </div>
          </li>
          <div class="border-box2">
            <span class="border-box"></span>
            <span class="border-box"></span>
          </div>
        </ul>
      </div>
      <div class="ss2">
        <p class="text">单体信息</p>
        <ul class="con border-box">
          <li v-for="(v, i) in otherList" :key="v.title">
            <div v-if="i == 1 || i == 0" class="tit">
              <span class="y">{{ v.title }}</span>
              <span>{{ v.value }}</span>
            </div>
            <div v-else class="text-b">
              <i class="icon-round"></i>
              <div class="con-b">
                <span class="text-left">{{ v.title }}</span
                ><span>{{ v.value }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { dataMonitor } from "../api/home";
export default {
  data() {
    return {
      timer: null,
      capacityList: [],
      otherList: [],
      simpleList: [],
      info: {}
    };
  },
  created() {
    this.getData();
    this.timer = setInterval(this.getData, 10000);
  },
  methods: {
    getData() {
      dataMonitor().then(({ data }) => {
        if (data) {
          this.capacityList = data.capacityList;
          this.otherList = data.otherList;
          this.simpleList = data.simpleList;
        }
      });
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  }
};
</script>
<style lang="less">
#monitor-data {
  width: 500px;
  height: 681px;
  background: rgba(9, 23, 62, 0.8);
  box-shadow: 0 0 8px 4px rgba(96, 189, 247, 0.5) inset;
  transform: scale(0.5);
  position: absolute;
  top: 206px;
  right: -50%;
  .ss1-tit {
    width: 100%;
    height: 60px;
    background: url("./img/11.png") 0 24px no-repeat;
    background-size: 100%;
    text-align: center;
    line-height: 60px;
    margin: 20px 0 8px;
    .text {
      font-size: 30px;
      font-family: Microsoft YaHei;
      font-weight: 500;
      color: #ffffff;
      background: linear-gradient(180deg, #ffffff 28.9306640625%, #56b3ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .ss2-box {
    width: 454px;
    margin: 10px auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 20px;
    .ss2 {
      position: relative;
    }
    .text {
      height: 31px;
      font-size: 27px;
      font-weight: 400;
      color: #00a0e9;
      background: url("./img/31.png") 0 8px no-repeat;
      background-size: 17px 19px;
      padding-left: 30px;
    }
    .con {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-column-gap: 12px;
      grid-row-gap: 10px;
      margin-top: 18px;
      // height: 100px;
      padding: 8px 4px;
      position: relative;
    }
    .border-box {
      box-shadow: 0 0 4px 2px rgba(0, 160, 233, 0.8) inset;
      border-radius: 10px;
    }
    .text-b {
      font-size: 18px;
      font-weight: 400;
      color: #ffffff;
      display: flex;
      align-items: center;
      margin-top: 4px;
      .con-b {
        flex: 1;
        display: flex;
        margin: 0;
        .text-left {
          width: 120px;
        }
      }
      .icon-round {
        width: 6px;
        height: 6px;
        border: 1px solid rgba(255, 195, 120, 1);
        display: inline-block;
        border-radius: 50%;
        margin: 5px;
      }
    }
    .tit {
      display: flex;
      justify-content: space-evenly;
      font-size: 19px;
      color: #ffffff;
      .y {
        color: rgba(255, 203, 78, 1);
      }
    }
    .border-box2 {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 10px;
    }
  }
}
</style>
