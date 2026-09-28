//Synchrounous code: It is executed line by line, one after the other. Each line of code waits for the previous line to finish before it executes.

// console.log("HI-1");

// // function hello(){
// //     console.log("Hello World");
// // }

// setTimeout(function(){console.log("HI-3");},0)//Even though its before the for loop, it will executed later cause its an asynchronous function.

// for(let i =1; i <= 4; i++){

//     console.log(i);

// }

// // hello()

// console.log("HI-2");

// setTimeout(function(){ //asynchronous function: IT evaluates after the sync code execution is finished
//     console.log("SetInterval");
// }, 000)


// debugger

// // console.log("HI-1");
// function hello(){
//     console.log("Number1");
// }
// hello()
// // for(let i =1; i <= 2; i++){
// //     console.log(i);
// // }
// // hello()
// // debugger

// setTimeout(hello, 100)
// setTimeout(function(){
//     console.log("Number2")
// }, 200)
// setTimeout(hello, 5000)

// console.log("Hello");


debugger
function a(){
    const x =45;
    console.log(x);
}
a()

setInterval(a, 2000)