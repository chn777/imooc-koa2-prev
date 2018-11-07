// await 关键字后的函数
var Delay_Time = function(ms) {
    console.log('Delay_Time');
    return new Promise(function(resolve) 
    {
        console.log('Delay_Time_Promise');
        setTimeout(resolve, ms);
    });
}
// async 函数
var Delay_Print = async function(ms) 
{
    console.log('Delay_Print');
    await Delay_Time(ms);
    return new Promise(function(resolve, reject) 
    {
        console.log('Delay_Print_Promise');
        resolve("End");
    });
}
// 执行async函数后
Delay_Print(3000).then(function(resolve) 
{
    console.log(resolve);
})

  