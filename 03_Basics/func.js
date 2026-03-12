// console.log("I");
// console.log('S');
// //function declaration
// function Name(){
//     console.log("I");
//  console.log('S');

// }

// func refrence
// Name()

// function expression
// function addNumbers(num1,num2){
//     console.log( num1 + num2);
    
// }
// give arguments to function
// addNumbers(5, 10)
// addNumbers(100, 'abc') // 100abc 


function addNumbers(num1,num2){
//    let res = num1 + num2
//     return res
return num1 + num2
}
const sum = addNumbers(5, 10)
// console.log("RES:", sum); // 15

// function loginUserMessage(username){
//     return `${username} just logged in. `
// }
//print the message in console
// console.log(loginUserMessage("Ishita"))
// console.log(message); // "Ishita just logged in. "

//or directly print the message without storing in variable     
// loginUserMessage("Ishita") // "Ishita just logged in. "

// console.log(loginUserMessage())

// function loginUserMessage(username){
//     if(username===undefined){
//        console.log("Please enter a username");
//        return 
//        //the rest wont work if we dont return here because username is undefined and we are trying to print it in the message which will give us "undefined just logged in. " which is not what we want. So we return here to stop the function execution if username is not provided. 
//     }
//     return `${username} just logged in. `
// }
// console.log(loginUserMessage()) // Please enter a username

function loginUserMessage(username = "Guest" ){// adding default value to username parameter so that if we dont pass any argument it will take the default value and not give us undefined.
    //empty string is also a falsy value in js so we can check for that as well in the same condition.
    if(!username){ // this will check for both undefined and empty string
       console.log("Please enter a username");
       return 
       //the rest wont work if we dont return here because username is undefined and we are trying to print it in the message which will give us "undefined just logged in. " which is not what we want. So we return here to stop the function execution if username is not provided. 
    }
    return `${username} just logged in. `
}
// console.log(loginUserMessage("ishu")) // "ishu just logged in. "
// console.log(loginUserMessage()) // "Guest just logged in. "