//arrays in js
let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr[0]);
console.log(arr[4]);
arr[5] = 6;
console.log(arr);
arr.push(7); 

const newarr = arr.join();
console.log(newarr);

//slice method
const slicedArr = arr.slice(2, 5);
console.log(slicedArr);

//splice method
arr.splice(2, 1, 10); 
console.log(arr);   

