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

// const markets = ["D-Mart", "Reliance", "Big Bazaar"];
// const fruits = ["Apple", "Banana", "Mango"];
// markets.push(fruits);
// console.log(markets[3][2]); // Accessing "Mango" from the nested array


// concat the arrays
// const combinedArray = markets.concat(fruits);
// console.log(combinedArray);

// // using spread operator to combine arrays
// const combinedArrayWithSpread = [...markets, ...fruits];
// console.log(combinedArrayWithSpread);       

//multidimensional array    
const multiDimensionalArray = [1,2,3,[4,5,6],7,[8,9,[10,11,12]]];
console.log(multiDimensionalArray[2][1]); // Accessing 5 from the nested array
const nestedArray = multiDimensionalArray.flat(Infinity);
console.log(nestedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] 


//scraping data from website using arrays
console.log(Array.isArray("Ishita"));
console.log(Array.from("Ishita"));
console.log(Array.from({name: "Ishita"})); //interesting case, it will create an array of undefined values with length equal to the number of properties in the object

let score1 =100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Output: [100, 200, 300]
// console.log(Array.of(...scores));