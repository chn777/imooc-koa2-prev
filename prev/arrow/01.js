
//箭头函数中this会共享函数体的this
const arf = () => {
    console.log("xyz");
}

arf();