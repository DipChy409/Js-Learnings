// const Math = Math.sqrt(25)
// console.log(Math);
// const width= +prompt("Please enter Rectengular width")
// const height= +prompt("Please enter Rectengular height")


// console.log(typeof width);
// console.log(width * height);

// document.write(`Rectengular Area: ${width * height}`)

// const num1 = 10
// const num2 = undefined
const equation = 2**3**2; // calculates right to left
const math = 37%6 //calculates left to right
console.log(math);

// let a,b;
// a=3,b=2
// console.log(a);
// console.log(b);
// console.log(a+b);


// console.log(equation);
// console.log(typeof equation);

// const num3 = Math.random()
// const equ =num3 *10
// const equ2 = Math.round(equ)
// console.log(num3);
// console.log(equ);
// console.log(equ2);
let num = 15;
let score = num++; //postfix increment: first assigns the value of num to score, then increments num by 1;
console.log(score);
console.log(num);

let num2 = 20;
let score2 = ++num2;//prefix increment: first increments num2 by 1, then assigns the new value of num3 to score2;
console.log(score2);
console.log(num2);

let num4 = 30;
num4 += 5;
console.log(num4); //compound assignment operator also available for subtraction (-=), multiplication (*=), division (/=), and modulus (%=), and exponentiation (**=) operations.

console.log("1" !== "1" );

Math.max()>Math.min() //returns true if the maximum value is greater than the minimum value, otherwise returns false.