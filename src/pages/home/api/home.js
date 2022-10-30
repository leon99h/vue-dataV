const HOST = "http://123.60.84.33:8099";

//储能概括
export const storageSummary =()=>{
    return fetch(`${HOST}/device/data/storage-summary`).then(response => response.json())
}
//中心集装箱图
export const storageMainInfo =()=>{
    return fetch(`${HOST}/device/data/storage-main-info`).then(response => response.json())
}
//SOC曲线
export const socCurve =()=>{
    return fetch(`${HOST}/device/data/soc-curve`).then(response => response.json())
}
//实时信息
export const realinfo =()=>{
    return fetch(`${HOST}/device/data/realinfo`).then(response => response.json())
}
//故障监测
export const failureDetection =()=>{
    return fetch(`${HOST}/device/data/failure-detection`).then(response => response.json())
}
//配置信息
export const confinfo =()=>{
    return fetch(`${HOST}/device/data/confinfo`).then(response => response.json())
}

//BMS温度电压
export const bmsTemperatureVoltage =()=>{
    return fetch(`${HOST}/device/data/bms-temperature-voltage`).then(response => response.json())
}
//一周充放电
export const weekMcd =()=>{
    return fetch(`${HOST}/device/data/Week-mcd`).then(response => response.json())
}