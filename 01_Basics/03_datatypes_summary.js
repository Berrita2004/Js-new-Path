//stack ( primitive data types ) 
let myCollege = "VIT"
let anothername = myCollege
anothername = "VIT University"
console.log(myCollege);
console.log(anothername);

//Heap( non-primitive data types )

let user = {
    email: "user@example.com",
    password: "password123"
}
let anotherUser = user
anotherUser.password = "newpassword456"
console.log(user);
console.log(anotherUser);   
