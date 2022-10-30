<template>
  <div id="monitor-data">
    <div class="ss1-tit">
      <p class="text">数据监视</p>
    </div>

    <div class="ss2-box">
      <div class="ss2">
        <p class="text">功率容量</p>
        <ul class="con border-box">
          <li class="text-b">
            <i class="icon-round"></i>
            <div class="con-b">
              <span class="text-left">额定功率</span><span>sdfa</span>
            </div>
          </li>
          <li class="text-b">
            <i class="icon-round"></i>
            <div class="con-b">
              <span class="text-left">实时功率</span><span>sdfa</span>
            </div>
          </li>
          <li class="text-b">
            <i class="icon-round"></i>
            <div class="con-b">
              <span class="text-left">剩余充电量</span><span>sdfa</span>
            </div>
          </li>
          <li class="text-b">
            <i class="icon-round"></i>
            <div class="con-b">
              <span class="text-left">剩余放电量</span><span>sdfa</span>
            </div>
          </li>
          <li class="text-b">
            <i class="icon-round"></i>
            <div class="con-b">
              <span class="text-left">额定容量</span><span>sdfa</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="ss2">
        <p class="text">单体信息</p>
        <div class="ss2-box1">
          <div class="border-box">
            <div class="text-b">
              <i class="icon-round"></i>
              <div class="con-b">
                <span class="text-left w-text">单体最大电压</span
                ><span>sdfa</span>
              </div>
            </div>
            <div class="text-b">
              <i class="icon-round"></i>
              <div class="con-b">
                <span class="text-left  w-text">单体最小电压</span
                ><span>sdfa</span>
              </div>
            </div>
            <div class="text-b">
              <i class="icon-round"></i>
              <div class="con-b">
                <span class="text-left  w-text">单体平均电压</span
                ><span>sdfa</span>
              </div>
            </div>
          </div>
          <div class="border-box">
            <div class="text-b">
              <i class="icon-round"></i>
              <div class="con-b">
                <span class="text-left w-text">单体最高温度</span
                ><span>sdfa</span>
              </div>
            </div>
            <div class="text-b">
              <i class="icon-round"></i>
              <div class="con-b">
                <span class="text-left w-text">单体最低温度</span
                ><span>sdfa</span>
              </div>
            </div>
            <div class="text-b">
              <i class="icon-round"></i>
              <div class="con-b">
                <span class="text-left w-text">单体平均温度</span
                ><span>sdfa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ss2">
        <p class="text">单体信息</p>
        <div class="ss2-box2 border-box">
          <div>
            <div class="tit">
              <span class="t1">电压</span>
              <span class="t2">12312</span>
            </div>
            <div class="text-b">
              <i class="icon-round"></i>
              <div class="con-b">
                <span class="text-left w180">高压线充电电压上限</span
                ><span>sdfa</span>
              </div>
            </div>
            <div class="text-b">
              <i class="icon-round"></i>
              <div class="con-b">
                <span class="text-left w180">单体平均电压</span
                ><span>sdfa</span>
              </div>
            </div>
          </div>
          <div>
            <div class="tit">
              <span class="t1">电压</span>
              <span class="t2">12312</span>
            </div>
            <div class="text-b">
              <i class="icon-round"></i>
              <div class="con-b">
                <span class="text-left w180">高压线充电电压上限</span
                ><span>sdfa</span>
              </div>
            </div>
            <div class="text-b">
              <i class="icon-round"></i>
              <div class="con-b">
                <span class="text-left w180">单体平均电压</span
                ><span>sdfa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null
    };
  },
  created() {
    // this.timer = setInterval(this.getData, 10000);
  },
  methods: {
    html_text(tit, d) {
      return (
        <template>
          <div class="text-b">
            <i class="icon-round" />
            <div class="con-b">
              <span class="text-left">tit</span>
              <span>d</span>
            </div>
          </div>
        </template>
      );
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
    grid-row-gap: 0px;
    .ss2 {
      width: 100%;
      margin-top: 30px;
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
    .border-box {
      width: 100%;
      box-shadow: 0 0 4px 2px rgba(0, 160, 233, 0.8) inset;
      padding: 6px 2px;
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
        .w-text {
          width: 140px;
        }
        .w180 {
          width: 160px;
          font-size: 16px;
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
    .con {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 2px;
      grid-row-gap: 4px;
      margin-top: 20px;
    }
    .ss2-box1 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 20px;
      margin-top: 20px;
    }
    .ss2-box2 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 20px;
      margin-top: 20px;
      .tit {
        display: flex;
        justify-content: center;
        font-size: 19px;
        color: #ffffff;
        span {
          margin: 4px;
        }
        .t1 {
          color: rgba(255, 203, 78, 1);
        }
      }
    }
  }
}
</style>
