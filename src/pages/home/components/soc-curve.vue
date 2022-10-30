<template>
  <div id="soc-curve">
    <div id="v-echarts-soc" style="width:941px;height:337px;"></div>
    <div class="tit1">SOC曲线</div>
    <div class="tit2">单位：%</div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { socCurve } from "../api/home";

export default {
  data() {
    return {
      data1: [],
      data2: [],
      timer: null,
      myChart: null
    };
  },
  mounted() {
    this.myChart = echarts.init(document.getElementById("v-echarts-soc"));
    this.getData();
    this.timer = setInterval(this.getData, 5000);
  },
  methods: {
    getData() {
      socCurve().then(({ data }) => {
        let { socList } = data;
        let data1 = [];
        let data2 = [];
        if (Array.isArray(socList)) {
          socList.map(v => {
            data1.push(v.time);
            data2.push(v.value);
          });
          this.data1 = data1;
          this.data2 = data2;
          this.drawLine();
        }
      });
    },
    drawLine() {
      let option = {
        xAxis: {
          boundaryGap: false,
          nameTextStyle: {
            color: "#9E9E9E",
            fontSize: 10
          },
          axisLine: {
            lineStyle: {
              color: "rgb(112, 213, 250)",
              width: 2
            }
          },
          axisTick: {
            show: false
          },
          data: this.data1
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
            name: "Line 2",
            lineStyle: {
              //折线颜色
              normal: {
                color: "rgb(112, 213, 250)",
                width: 2
              }
            },
            type: "line",
            stack: "Total",
            smooth: true,
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(112, 213, 251,0.8)"
                },
                {
                  offset: 1,
                  color: "rgb(77, 119, 255,0)"
                }
              ])
            },
            emphasis: {
              focus: "series"
            },
            data: this.data2
          }
        ]
      };
      this.myChart.setOption(option);
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer);
    // echarts.dispose();
  }
};
</script>
<style lang="less">
#soc-curve {
  background: rgba(9, 23, 62, 0.8);
  width: 941px;
  height: 337px;
  position: absolute;
  top: -50%;
  left: 190px;
  transform: scale(0.5);
  #v-echarts-soc {
    position: absolute;
    top: 30px;
    left: -10px;
  }
  .tit1 {
    position: absolute;
    top: 16px;
    left: 34px;
    font-size: 23px;
    font-weight: 400;
    background: linear-gradient(180deg, #ffffff 28.9306640625%, #56b3ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .tit2 {
    color: #0186c8;
    position: absolute;
    top: 20px;
    right: 24px;
    font-size: 16px;
    font-weight: 400;
  }
}
</style>
