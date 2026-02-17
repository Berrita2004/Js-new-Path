const name = "John Doe";
const repoCount = 50;
//old way of concatenating strings
console.log("My name is " + name + " and I have " + repoCount + " repositories.");
//new way of concatenating strings using template literals/string interpolation
console.log(`My name is ${name.toUpperCase()} and I have ${repoCount} repositories.`);

//string declaration 
const gameName = new String("Addict-ed");
console.log(gameName[0]);
console.log(gameName.__proto__); 
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4)); 
console.log(gameName.indexOf("d"));

const newString = gameName.substring(0, 5);
console.log(newString);

const anotherString = gameName.slice(-7, 5);
console.log(anotherString);


const string1 = "Hello";
console.log(string1.trim()); // removes whitespace from both ends of the string
 
const url = "https://www.example.com/aqddicted%20game";
console.log(url.replace("%20", "-")); // replaces "%20" with "-"
