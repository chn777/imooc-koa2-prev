function *generator() 
{
    yield  'pause1';
    yield  'pause2';
    yield  'pause3';  
}

let gen = generator();
let x = gen.next();
console.log(x);
let y = gen.next();
console.log(y);
let z = gen.next();
console.log(z);
console.log(gen.next());