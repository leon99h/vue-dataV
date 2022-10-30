<template>
  <div id="soc-curve">
    <div id="v-echarts-soc" style="width:941px;height:337px;"></div>
    <div class="tit1">SOC曲线</div>
  </div>
</template>

<script>
// import echarts from "echarts";
import * as echarts from "echarts";

export default {
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      let option = {
        title: {
          text: "一周充放电统计1",
          textStyle: {
            color: "rgba(9, 23, 62,0.3)"
          }
        },
        legend: {
          textStyle: {
            color: "#9E9E9E"
          },
          data: ["充电", "放电"]
        },
        xAxis: {
          //   type: "category",
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
          data: [
            "09:00",
            "09:20",
            "09:40",
            "10:00",
            "10:20",
            "10:40",
            "11:00",
            "11:20",
            "11:40",
            "12:00",
            "12:20",
            "12:40",
            "13:00"
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
            data: [120, 282, 111, 234, 220, 340, 310]
          }
        ]
      };
      let myChart = echarts.init(document.getElementById("v-echarts-soc"));
      myChart.setOption(option);
    }
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
}
</style>
