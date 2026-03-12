//shopping cart 
//aage ... laga do rest operator hai idhar not spread 
function calculateCartPrice(val1 , val2 ,...num1){
    return num1

}
// console.log(calculateCartPrice(100 , 200, 300, 400)); // [300, 400] aayega kyuki function me sirf num1 hi hai aur usme 100 pass kiya hai isliye 100 aayega, baki 200 aur 300 ignore ho jayenge.
// object ko func mai pass karna 
const user = {
    name : "John",
    prices:199//price se prices kar diya hai kyuki price ek reserved word hai aur usko variable name ke roop me use nahi kar sakte hai.
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
    
}
// handleObject(user); // Username is John and price is 199 aayega kyuki user object me name aur price hai aur humne handleObject function me anyobject parameter pass kiya hai jisme user object hai. 
handleObject({
    username : "John",
    price : 399
})

const newArr = [200,400,600,800]
function returnSecVal(getArr){
    return getArr[1] // 400 aayega kyuki array me index 1 par 400 hai.
}
console.log(returnSecVal(newArr));