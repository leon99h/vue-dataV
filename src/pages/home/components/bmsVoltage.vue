<template>
  <div id="bms-voltage">
    <div class="ss1-tit">
      <p class="text">储能概括</p>
    </div>
    <dv-scroll-board :config="config" style="width:446px;height:300px;" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        header: ['<span class="asfa">数据点名</span>', "数值", "位置编码"],
        data: [
          ["行1列1", "行1列2", "行1列3"],
          ["行2列1", "行2列2", "行2列3"],
          ["行3列1", "行3列2", "行3列3"],
          ["行4列1", "行4列2", "行4列3"],
          ["行5列1", "行5列2", "行5列3"],
          ["行6列1", "行6列2", "行6列3"]
        ],
        rowNum: 10,
        headerBGC: "rgba(36, 65, 120,1)",
        oddRowBGC: "transparent",
        evenRowBGC: "transparent",
        headerHeight: 44,
        columnWidth: [150, 80, 100]
      }
    };
  }
};
</script>
<style lang="less">
#bms-voltage {
  width: 250px;
  height: 268px;
  background: rgba(9, 23, 62, 0.8);
  box-shadow: 0 0 8px 4px rgba(96, 189, 247, 0.5) inset;
  //   transform: scale(0.5);
  position: absolute;
  top: 0;
  left: 300px;
  .text {
    font-size: 29px;
    font-family: Microsoft YaHei;
    font-weight: 500;
    color: #ffffff;
    background: linear-gradient(180deg, #ffffff 28.9306640625%, #56b3ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .ss1-tit {
    width: 100%;
    height: 58px;
    background: url("./img/11.png") 0 28px no-repeat;
    background-size: 100%;
    text-align: center;
    line-height: 58px;
    margin: 20px 0 8px;
  }
  //   .dv-scroll-board >>> .rows .ceil{
  //     font-size: 100px;
  //   }
  .asfa {
    font-size: 16px;
  }
}
</style>
