let fs = require('fs');

function myPromise (path){
    let p = new Promise((resolve,reject) => {
        fs.readFile(path,(err,dataBuf) => {
            if(err){
                reject(err)
            }
            else{
                resolve(dataBuf);
            }
        });
    });
    return p;
}

myPromise('../package.json')
    .then(data=>{
    console.log(JSON.parse(data.toString()).name);
    })
    .catch(err=>{
    console.log(err);
    });