<template>
  <div id="bms-voltage">
    <div class="ss1-tit">
      <p class="text">BMS温度电压</p>
    </div>
    <dv-scroll-board
      :config="config"
      class="scroll-board-box"
      ref="scrollBoard1"
    />
  </div>
</template>

<script>
import { bmsTemperatureVoltage } from "../api/home";
export default {
  data() {
    return {
      config: {
        header: [
          `<span class="s-board-box-text">数据点名</span>`,
          `<span class="s-board-box-text">数值</span>`,
          `<span class="s-board-box-text">位置编码</span>`
        ],
        data: [],
        rowNum: 10,
        headerBGC: "rgba(36, 65, 120,1)",
        oddRowBGC: "transparent",
        evenRowBGC: "transparent",
        headerHeight: 44,
        columnWidth: [200, 120, 160]
      },
      timer: null
    };
  },
  created() {
    this.getData();
    this.timer = setInterval(this.getData, 5000);
  },
  methods: {
    async getData() {
      bmsTemperatureVoltage().then(({ data }) => {
        if (data) {
          this.data_handle(data);
        }
      });
    },
    data_handle(arr) {
      let arr1 = [];
      arr.map((v, i) => {
        if (v.pointName || v.value || v.locationCode) {
          arr1.push([
            `<span class="s-board-box-text">${v.pointName}</span>`,
            `<span class="s-board-box-text">${v.value}°c</span>`,
            `<span class="s-board-box-text">${v.locationCode}</span>`
          ]);
        }
      });
      this.$refs["scrollBoard1"].updateRows(arr1, null);
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  }
};
</script>
<style lang="less">
#bms-voltage {
  width: 500px;
  height: 720px;
  background: rgba(9, 23, 62, 0.8);
  box-shadow: 0 0 8px 4px rgba(96, 189, 247, 0.5) inset;
  transform: scale(0.5);
  position: absolute;
  top: 182px;
  left: -122px;
  .ss1-tit {
    width: 100%;
    height: 60px;
    background: url("./img/11.png") 0 28px no-repeat;
    background-size: 100%;
    text-align: center;
    line-height: 60px;
    margin: 20px 0 8px;
    .text {
      font-size: 26px;
      font-family: Microsoft YaHei;
      font-weight: 500;
      color: #ffffff;
      background: linear-gradient(180deg, #ffffff 28.9306640625%, #56b3ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .scroll-board-box {
    margin: 0 auto;
    width: 460px;
    height: 600px;
  }
  .s-board-box-text {
    font-size: 18px;
  }
}
</style>
