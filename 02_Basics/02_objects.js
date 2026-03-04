//singleton object: Only one instance of an object exists in the entire application.
//a literal is declared singleton nahi banega , constructoe se banega
//object literal
const mySym = Symbol(" Key1")    
const JsUser ={
    "Full Name" : "John Doe",
    [mySym] :"myKey1",
    name: "John",
    age: 30,
    location: "New York",
    email: "123@email.com",
    isLoggedIn : true,
    LastLogin :["Monday", "Tuesday", "Wednesday"]

}


// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[mySym])

// JsUser.email = "newwemail@123.com"

// console.log(JsUser.email)
// Object.freeze(JsUser) //freeze krne ke baad object me changes nhi honge
// console.log(JsUser); 

JsUser.greeting = function(){
    console.log("Hello, welcome to JavaScript!")
}

console.log(JsUser.greeting())