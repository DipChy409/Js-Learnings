//In JavaScript's execution model has two Phases:
// 1. Creation Phase 2. Execution Phase

// In the creation phase, the JavaScript engine scans the code and allocates memory for variables and functions.
// like: function(){} and var = undefined, let and const are in temporal dead zone until they are initialized.

// In the execution phase, the JavaScript engine executes the code line by line and assigns values to the variables.
// like:let and const are initialized with their values, while var is assigned the value of undefined until it is explicitly assigned a value. 


// JavaScript execution has two phases: the creation (memory/hoisting) phase, where variables and function declarations are set up in memory, followed by the execution phase, 
// where code actually runs line by line.

// debugger

var firstName = "Dip"
console.log(firstName)

let lastName= "Chowdhury"

let age = 20
const yearofBirth = 2005


  
// let userIntro = "Hi, My name is " + firstName + " " + lastName
