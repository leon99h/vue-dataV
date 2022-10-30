<template>
  <div id="failure-detection">
    <div class="ss1-tit">
      <p class="text">故障监视</p>
    </div>
    <div class="f-detection-box1">
      <div class="s">
        <p>{{ info["当前告警"] }}</p>
        <span>当前告警</span>
      </div>
      <div class="s s1">
        <p>{{ info["今日告警"] }}</p>
        <span>今日告警</span>
      </div>
    </div>
    <dv-scroll-board :config="config" class="scroll-board-box" />
  </div>
</template>

<script>
import { failureDetection } from "../api/home";
const C_STATUS = {
  4: "断开",
  1: "告警",
  2: "欠压",
  3: "正常"
};
export default {
  data() {
    return {
      config: {
        header: [
          `<span class="s-board-box-text">设备</span>`,
          `<span class="s-board-box-text">状态</span>`,
          `<span class="s-board-box-text">位置</span>`,
          `<span class="s-board-box-text">警告时间</span>`
        ],
        data: [],
        rowNum: 10,
        headerBGC: "rgba(36, 65, 120,1)",
        oddRowBGC: "transparent",
        evenRowBGC: "transparent",
        headerHeight: 44,
        columnWidth: [180, 87, 98, 129],
        align: ["left", "center", "left", "center"]
      },
      info: {},
      timer: null
    };
  },
  created() {
    this.getData();
    // this.timer = setInterval(this.getData, 10000);
  },
  methods: {
    async getData() {
      failureDetection().then(({ data }) => {
        if (data) {
          data_handle(data);
          this.info = data;
        }
      });
    },
    data_handle(arr) {
      let arr1 = [];
      arr.forEach((v, i) => {
        if (v.pointName || v.value || v.locationCode || v.alarmTime) {
          arr1.push([
            `<span class="s-board-box-text">${v.pointName}</span>`,
            `<span class="s-board-box-text success ${
              v.status == 2 || v.status == 1 ? "warning" : ""
            }  ${v.status == 4 ? "error" : ""}">${C_STATUS[v.status]}</span>`,
            `<span class="s-board-box-text">${v.locationCode}</span>`,
            `<span class="s-board-box-text">${v.alarmTime}</span>`
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
#failure-detection {
  width: 500px;
  height: 756px;
  background: rgba(9, 23, 62, 0.8);
  box-shadow: 0 0 8px 4px rgba(96, 189, 247, 0.5) inset;
  transform: scale(0.5);
  position: absolute;
  top: -200px;
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
  .f-detection-box1 {
    width: 472px;
    height: 104px;
    display: flex;
    justify-content: space-evenly;
    margin: 16px 0;
    .s {
      width: 169px;
      height: 103px;
      background: url("./img/21.png") no-repeat;
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 23px;
      font-weight: 400;
      color: #ffc000;
      p {
        font-size: 47px;
        font-weight: bold;
        color: #ffffff;
      }
    }
    .s1 {
      background: url("./img/22.png") no-repeat;
      background-size: 100% 100%;
      color: #ff0000;
    }
  }
  .scroll-board-box {
    margin: 0 auto;
    width: 472px;
    height: 510px;
    border: 1px solid red;
  }
  .s-board-box-text {
    font-size: 19px;
    &.success {
      color: #009944;
    }
    &.warning {
      color: #fff100;
    }
    &.error {
      color: #e60012;
    }
  }
}
</style>
