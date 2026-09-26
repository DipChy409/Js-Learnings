'use strict' //strict if variable hasnot any keyword
// function abc(){
//       a2 =23;
// }
// abc()
//     console.log(a2);







// Global Scope and Local Scope.......


// // debugger

// const a= "Dip";    //Inside script scope
// let userAge = 20;  //Inside script scope
// var a1= "CHY";   //Inside window Object
// function add(){  //Inside window Object
//     const x =5;
//     const y = 8;
//     console.log(x+y);
//     console.log(userAge);
    
// }
// add()

// function subtract(){
//     let userAge =25;
//      const x =5;
//     const y = 8;
//     console.log(x-y);
//     console.log(userAge);
// }
// subtract()

// console.log(x);
// console.log("Program Ended");



// Lexical scope and Block Scope......

// debugger

const a= "Dip";    //Inside script scope
let userAge = 20;  //Inside script scope
var a1= "CHY";   //Inside window Object


function add(){  //Inside window Object
    const x =5;
    const y = 8;
    let userName = "dd"
    console.log(x+y);
    console.log(userAge);

    
}
add()


// function subtract(){
    
//      const x =5;
//     const y = 8;
//     console.log(x-y);
//     console.log(a);

//     function child(){
//         debugger

//         const childName = "Motu"
//         console.log(childName);
//         console.log(y); //Closure subtract

//         {
//             let num1 =12;
//             console.log(num1);
//         }

//     }
//     child() 
    
// }
// subtract()


// console.log("Program Ended");
// debugger


// 

    
// debugger
// let x;
// console.log(x);
// x=24;
// console.log(x);




// function subtract(){ //Nested Function
//     // debugger
//      const x =5;
//     const y = 8;
//     console.log(x-y);
    
//     function child(){
//         const childName = "Motu"
//         console.log(childName);
//         console.log(x);
//         console.log(userAge);

//         function abc(){
//             console.log(childName);
//             console.log(y);
//             console.log(a);
//         }
//         abc()
//     }

//     child()
    
    
// }
// subtract()