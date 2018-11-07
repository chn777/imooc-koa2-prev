const co = require('co');
const fetch = require('node-fetch');

console.log('strat')
co(function *() 
{
    const res = yield fetch('https://api.douban.com/v2/movie/1291843');   
    const movie = yield res.json();
    console.log(movie.title);
});
console.log('end');