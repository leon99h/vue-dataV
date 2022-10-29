<template>
  <div id="storage-summary">
    <div class="ss1-tit">
      <p class="text">储能概括</p>
    </div>
    <ul class="ss1-box">
      <li>
        <p>累计充电量(mWh)</p>
        <p>sadfas123123</p>
      </li>
      <li>累计放电量(mWh)</li>
      <li>今日充电量(mWh)</li>
      <li>今日放电量(mWh)</li>
    </ul>
    <div class="ss2-box">
      <div class="round">
        <p>30</p>
        <span>系统soc</span>
      </div>
      <div class="round round2">
        <p class="text">30%</p>
        <span>系统soc</span>
      </div>
    </div>
    <div class="ss3-box">
      <div class="pcs">
        <div class="img"></div>
        pcs <br />运行状态
      </div>
      <div class="pcs0">
        <span class="mr">运行</span>
        <span>112台</span>
      </div>
      <div class="pcs0 pcs1">
        <span class="mr">待机</span>
        <span>1台</span>
      </div>
      <div class="pcs0 pcs2">
        <span class="mr">停机</span>
        <span>1台</span>
      </div>
    </div>
    <div class="ss4-box">
      <div><span>集装箱数量</span> 32个</div>
      <div><span>PCS数量</span> 32台</div>
      <div><span>BMS数量</span> 32个</div>
      <div><span>电池簇数量</span> 98簇</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less">
#storage-summary {
  width: 500px;
  height: 700px;
  background: rgba(9, 23, 62, 0.8);
  box-shadow: 0 0 8px 4px rgba(96, 189, 247, 0.5) inset;
  transform: scale(0.5);
  position: absolute;
  top: -178px;
  left: -50%;
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
    background: url("./img/d/11.png") 0 28px no-repeat;
    background-size: 100%;
    text-align: center;
    line-height: 58px;
    margin: 20px 0 8px;
  }
  .ss1-box {
    display: grid;
    grid-template-columns: 208px 208px;
    grid-template-rows: 96px 96px;
    grid-column-gap: 28px;
    grid-row-gap: 28px;
    justify-content: center;
    color: #ffffff;
    li {
      border: 2px solid #000;
      background: url("./img/d/12.png");
      background-size: 100% 100%;
      overflow: hidden;
      text-align: center;
      font-size: 19px;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      p {
      }
    }
  }
  .ss2-box {
    display: flex;
    justify-content: center;
    margin-top: 12px;
    .round {
      width: 156px;
      height: 156px;
      background: url("./img/d/13.png") no-repeat;
      background-size: 100%;
      margin: 0 10px;
      position: relative;
      color: #ffffff;
      font-size: 18px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        background-image: linear-gradient(0deg, #7461ff 0%, #c6d0ff 100%);
        -webkit-background-clip: text;
        color: transparent;
        font-size: 32px;
        font-weight: bold;
      }
    }
    .round2 {
      background: url("./img/d/14.png") no-repeat;
      background-size: 100%;
      .text {
        background-image: linear-gradient(0deg, #b352d3 0%, #fbb9d4 100%);
      }
    }
  }
  .ss3-box {
    width: 500px;
    height: 74px;
    display: flex;
    justify-content: center;
    margin-top: 16px;
    .pcs {
      width: 160px;
      display: flex;
      align-items: center;
      font-size: 22px;
      color: #ffffff;
      font-weight: 600;
      .img {
        width: 30px;
        height: 30px;
        background: url("./img/d/14_1.png") no-repeat;
        background-size: 100%;
        margin-right: 12px;
      }
    }
    .pcs0 {
      width: 84px;
      height: 100%;
      margin: 0 6px;
      background: url("./img/d/15.png") no-repeat;
      background-size: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      .mr {
        margin: 0 0 4px 18px;
      }
    }
    .pcs1 {
      background: url("./img/d/16.png") no-repeat;
      background-size: 100%;
    }
    .pcs2 {
      background: url("./img/d/17.png") no-repeat;
      background-size: 100%;
    }
  }
  .ss4-box {
    display: grid;
    grid-template-columns: 220px 220px;
    grid-template-rows: 44px 44px;
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    justify-content: center;
    margin-top: 10px;
    div {
      background: url("./img/d/18.png") 4px no-repeat;
      background-size: 100%;
      padding-left: 34px;
      font-size: 20px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
}
</style>
