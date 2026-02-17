//Numbers part 
const score = 100;
const balance = new Number(1000);
console.log(score);
console.log(balance); 


console.log(balance.toString().length); // returns the length of the number as a string
console.log(balance.toFixed(2)); // formats the number to 2 decimal places
console.log(balance.toExponential(2)); // formats the number in exponential notation with 2 decimal places
console.log(balance.toPrecision(4)); // formats the number to a specified length (4 in this case)           


const otherNumber = 123.456789;
console.log(otherNumber.toFixed(2)); // formats the number to 2 decimal places
console.log(otherNumber.toExponential(3)); // formats the number in exponential notation with 3 decimal places
console.log(otherNumber.toPrecision(3)); // formats the number to a specified length (5 in this case)


const hundred = 1000000;
//console.log(hundred.toLocaleString()); // formats the number with commas as thousands separators
console.log(hundred.toLocaleString('en-US')); // formats the number with commas as thousands separators for US locale
