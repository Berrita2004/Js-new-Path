//date 

let myDate = new Date()
console.log(myDate);
//console.log(myDate.getMonth());        // 0-11 (IMPORTANT)
// console.log(new Date().toString());
// console.log(new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }));

//let myCreatedDate = new Date(2026,1,18)
let myCreatedDate = new Date(2026,1,18,5,3)

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());
console.log(Date.now()/1000); //decimal aagaya which is a problem 
// so we use math.floor
console.log(Math.floor(Date.now()/1000)); 



//newdate 
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


//`${newDate.getDay()}` 

newDate.toLocaleString('default',{
    weekday: "long"
})