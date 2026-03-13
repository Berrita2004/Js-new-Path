// let a = 10
// const b = 20 
// var c = 30

//scopes {}
let a = 300
var c = 300
if (true){
    let a = 10
const b = 20 
console.log("Inner: ", a);
// var c = 30
}

for (let i = 0 ; i < 5; i++){
    console.log(i);
}

//console.log(a);
//console.log(b);
// console.log(c);
console.log(a);