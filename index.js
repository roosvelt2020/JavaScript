// -External script makes HTML and JavaScript 
// easier to read and maintain
// -Cached JavaScript files can speed up page loads 
// JavaScript is case sensitive, ignores whitespace
// In Javasrcipt, hyphens are not allowed
// It's a good programming practice to declare all variables at the beginning of a script.
// 	If you add a number to a string, the number will be treated as string, and concatenated.

// 	JavaScript objects are containers for named values (called properties) and methods.
var loginDetails = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor:"blue"
};
var cars = ["Lambo", "Volvo", "BMW"];
var onOrOff = true;
var teacherName = "Mr Fotang";

//
// errors practicing this JS objects topic
//function fullName(firstName, lastName) {
//    return (loginDetails.firstName) + "" + (loginDetails.lastName);
//}

// below is a commment 
document.getElementById("count-el").innerText = "5";

// logging count to be zero ON THE CONSOLE
let count = 0;
console.log(count);

// access object properties
loginDetails.firstName;
loginDetails["lastName"];

// access object methods
loginDetails.fullName();

// use typeof to return variable type
typeof loginDetails;
typeof cars;

// function to change fahrenhite to celsius
function toCelsius(fahrenhite) {
    return (5/9) * (fahrenhite-32);
}
