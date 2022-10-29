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
          `<span class="asfa">数据点名</span>`,
          `<span class="asfa">数值</span>`,
          `<span class="asfa">位置编码</span>`
        ],
        data: [
          ["行1列1", "行1列2", "行1列3"],
          ["行2列1", `<span class="asfa">36.9 0c</span>`, "行2列3"],
          ["行3列1", "36.9 0c", "行3列3"],
          ["行4列1", "36.9 0c", "行4列3"],
          ["行5列1", "36.9 0c", "行5列3"],
          ["行6列1", "行6列2", "行6列3"],
          ["行6列1", "行6列2", "行6列3"],
          ["行6列1", "行6列2", "行6列3"],
          ["行6列1", "行6列2", "行6列3"],
          ["行6列1", "行6列2", "行6列3"],
          ["行6列1", "行6列2", "行6列3"],
          ["行6列1", "行6列2", "行6列3"],
          ["行6列1", "行6列2", "行6列3"]
        ],
        rowNum: 10,
        headerBGC: "rgba(36, 65, 120,1)",
        oddRowBGC: "transparent",
        evenRowBGC: "transparent",
        headerHeight: 22,
        columnWidth: [100, 60, 80]
      }
    };
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
#bms-voltage {
  width: 250px;
  height: 360px;
  background: rgba(9, 23, 62, 0.8);
  box-shadow: 0 0 8px 4px rgba(96, 189, 247, 0.5) inset;
  //   transform: scale(0.5);
  position: absolute;
  top: 0;
  left: 300px;
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
    width: 220px;
    height: 300px;
  }
  .asfa {
    font-size: 10px;
  }
}
</style>
