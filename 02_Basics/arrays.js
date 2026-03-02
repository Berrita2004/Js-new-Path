// //arrays in js
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[4]);
// arr[5] = 6;
// console.log(arr);
// arr.push(7); 

// const newarr = arr.join();
// console.log(newarr);

//slice method(it does not change the array itself)
// const slicedArr = arr.slice(2, 5);
// console.log(slicedArr);

// //splice method it changes the array itself
// arr.splice(2, 1, 10); 
// console.log(arr);   

//arry mutable in js   
// diffrent arrays 

const markets = ["D-Mart", "Reliance", "Big Bazaar"];
const fruits = ["Apple", "Banana", "Mango"];
// markets.push(fruits);
// console.log(markets[3][2]); // Accessing "Mango" from the nested array


// concat the arrays
const combinedArray = markets.concat(fruits);
console.log(combinedArray);
