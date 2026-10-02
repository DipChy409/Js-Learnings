// //Function Declaration....
// function square(num){
//     return num*num
// }
// square()

// //Function Expression.....
// const square = function(num){
//     return num*num
// }

//Arrow Function Expression.....
// const square = (num) =>{
//     return num*num
// }

// const square = (a)=> a*a //Arrow Function Expression with implicit return....

// const add = (a,b) =>{  // //Example of arrow function with explicit return....
//     return a+b
// }

const add = (a, b) => a + b
const random = () =>  Math.floor(Math.random() * 10) + 1

// setTimeout(() =>{
//     console.log("HI");
// }, 2000)

const qube = (a) => {
    return a%2
}
console.log(qube(3));

