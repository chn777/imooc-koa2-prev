const fs = require('fs');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);

async function test(path) 
{
    try {
        let data = await readFileAsync(path,{encoding:'utf8'});
        console.log(JSON.parse(data).name);
    } catch (error) {
        console.log(error);
    }    
}


console.log('start');
test('../package.json');
console.log('over');
