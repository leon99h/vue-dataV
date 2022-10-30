<template>
  <div id="week-mcd">
    <div id="v-echarts-week" style="width:796px;height:337px;"></div>
    <div class="tit1">一周充放电统计</div>
    <div class="tit2">单位：mWh</div>
  </div>
</template>

<script>
// import echarts from "echarts";
import * as echarts from "echarts";
import { weekMcd } from "../api/home";

export default {
  data() {
    return {
      data1: [],
      data2: [],
      timer: null,
      myChart: null
    };
  },
  created() {},
  mounted() {
    this.myChart = echarts.init(document.getElementById("v-echarts-week"));
    this.getData();
    this.timer = setInterval(this.getData, 5000);
  },
  methods: {
    getData() {
      weekMcd().then(({ data }) => {
        if (data) {
          let data1 = [];
          let data2 = [];
          Object.values(data).forEach(v => {
            data1.push(v["充电电量"]);
            data2.push(v["放电电量"]);
          });
          this.data1 = data1;
          this.data2 = data2;
          this.drawLine();
        }
      });
    },
    drawLine() {
      let option = {
        // backgroundColor: "rgba(96, 189, 247 ,0.5)",
        legend: {
          textStyle: {
            color: "#9E9E9E"
          },
          data: ["充电", "放电"],
          right: 120,
          top: 4
        },
        xAxis: {
          // type:'category',
          nameTextStyle: {
            color: "#9E9E9E",
            fontSize: 10
          },
          axisLine: {
            lineStyle: {
              color: "#fffffe",
              width: 1
            }
          },
          axisTick: {
            show: false
          },
          data: [
            "星期一",
            "星期二",
            "星期三",
            "星期四",
            "星期五",
            "星期六",
            "星期日"
          ]
        },
        yAxis: {
          splitLine: {
            lineStyle: {
              color: "rgb(56, 62, 144)",
              type: "dashed"
            }
          }
        },
        series: [
          {
            name: "充电",
            type: "bar",
            data: this.data1,
            itemStyle: {
              barBorderRadius: [2, 2, 0, 0],
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0, //offset范围是0~1，用于表示位置，0是指0%处的颜色
                  color: "rgb(51, 108, 236)"
                },
                {
                  offset: 1, //指100%处的颜色
                  color: "rgb(77, 160, 228)"
                }
              ])
            }
          },
          {
            name: "放电",
            type: "bar",
            data: this.data2,
            itemStyle: {
              barBorderRadius: [2, 2, 0, 0],
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "rgb(236, 179, 114)"
                },
                {
                  offset: 0.5,
                  color: "#f8d897"
                },
                {
                  offset: 1,
                  color: "rgb(236, 179, 114)"
                }
              ])
            }
          }
        ]
      };
      this.myChart.setOption(option);
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer);
    echarts.dispose();
  }
};
</script>

<style lang="less">
#week-mcd {
  background: rgba(9, 23, 62, 0.8);
  width: 796px;
  height: 337px;
  position: absolute;
  top: -50%;
  left: -190px;
  transform: scale(0.5);
  #v-echarts-week {
    position: absolute;
    top: 20px;
  }
  .tit1 {
    position: absolute;
    top: 16px;
    left: 24px;
    font-size: 23px;
    font-weight: 400;
    background: linear-gradient(180deg, #ffffff 28.9306640625%, #56b3ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .tit2 {
    color: #0186c8;
    position: absolute;
    top: 24px;
    right: 24px;
    font-size: 16px;
    font-weight: 400;
  }
}
</style>
