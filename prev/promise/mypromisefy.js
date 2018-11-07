let fs = require('fs');
let util = require('util');

let readFilepromise = util.promisify(fs.readFile);
readFilepromise('../package1.json')
    .then(data=>{
        console.log(JSON.parse(data.toString()).name);
    })
    .catch(err=>{
        console.log(err);
    });