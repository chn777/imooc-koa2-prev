function getNumber()
{
    var p = new Promise(function(resolve, reject)
    {
        //做一些异步操作
        setTimeout(function()
        {
            var num = Math.ceil(Math.random()*10); //生成1-10的随机数
            if(num<7)
            {
                resolve(num);
            }
            else
            {
                reject('数字太大了'+num);
            }
        }, 2000);
    });
    return p;            
}


// setInterval(()=>{

//     getNumber()
//     .then(
//         function(data)
//         {
//             console.info('resolved',data);
//         }, 
//         function(reason)
//         {
//             console.info('rejected',reason);
//         }
//     );


// },500);

//

//使用catch

setInterval(()=>
{
    getNumber()
    .then(function(data)
    {
        console.log('resolved',data);
        console.log(somedata);
    })
    .catch(function(reason)
    {
        console.log('rejected',reason);
    });

},500);