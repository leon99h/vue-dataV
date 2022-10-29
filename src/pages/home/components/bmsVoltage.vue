<template>
  <div id="bms-voltage">
    <div class="ss1-tit">
      <p class="text">BMS温度电压</p>
    </div>
    <dv-scroll-board :config="config" class="scroll-board-box" />
  </div>
</template>

<script>
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
        headerHeight: 22,
        columnWidth: [100, 60, 80]
      },
      timer: null
    };
  },
  created() {
    // this.getData();
    // this.timer = setInterval(this.getData, 10000);
  },
  methods: {
    async getData() {
      fetch("http://123.60.84.33:8099/device/data/bms-temperature-voltage")
        .then(response => response.json())
        .then(({ data }) => {
          if (data) {
            data_handle(data);
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
      this.config.data = arr1;
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  }
};
</script>
<style lang="less">
#bms-voltage {
  width: 250px;
  height: 360px;
  background: rgba(9, 23, 62, 0.8);
  box-shadow: 0 0 4px 2px rgba(96, 189, 247, 0.5) inset;
  //   transform: scale(0.5);
  position: absolute;
  top: 356px;
  left: 0;
  .ss1-tit {
    width: 100%;
    height: 29px;
    background: url("./img/11.png") 0 14px no-repeat;
    background-size: 100%;
    text-align: center;
    line-height: 29px;
    margin: 10px 0 4px;
    .text {
      font-size: 15px;
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
    width: 230px;
    height: 300px;
  }
  .s-board-box-text {
    font-size: 10px;
  }
}
</style>
