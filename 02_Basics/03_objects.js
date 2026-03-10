// singleton object and object literal
//last wala literal tha 
//how to define using constructor function
// const tinderUser = new Object() //object constructor
const tinderUser = {} //object literal

tinderUser.id = "123abc"
tinderUser.name = "John"
tinderUser.isLoggedIn = false 


//console.log(tinderUser) //empty object

const regularUser = {
    Email : "some@gmai.com",
    FullName : {
         userFullName : {
            firstname : "John",
            lastname : "Doe"
        }
    }
}

// 
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

//const obj3 = { obj1 , obj2}
//const obj3 = Object.assign({},obj1, obj2) //merging two objects
//empty {} is added , as a target and others are sources 

const obj3 = {...obj1, ...obj2} //spread operator
//console.log(obj3);
//same as array 

//database value 
const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,   
        email:"i@gmail.com" 
    },
    {
        id:3,
        email:"j@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("name")) //true


