function runAsync1()
{
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务1执行完成');
            resolve('随便什么数据1');
        }, 1000);
    });
    return p;            
}

function runAsync2()
{
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务2执行完成');
            resolve('随便什么数据2');
            // reject('step2 blocked');
        }, 2000);
    });
    return p;            
}

function runAsync3()
{
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务3执行完成');
            resolve('随便什么数据3');
            // reject('step3 blocked');
        }, 2000);
    });
    return p;            
}

// all方法是「谁跑的慢，以谁为准执行回调」
Promise
    .all([runAsync1(), runAsync2(), runAsync3()])
    .then(function(results)
    {
        console.log(results);
    })
    .catch((reasons)=>{
        console.log(reasons)
    });