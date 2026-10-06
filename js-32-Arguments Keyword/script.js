function add(){
    console.log(arguments[7]);
    console.log(arguments[6]);
    console.log(arguments[5]);
    console.log(arguments[4]);

    // return a+b;
}

//Argument keyword works in named or anonymous function but (not in Arrow function)

let added= function(){
    let sum =0

    for(let i =0;i<arguments.length; i++){
        console.log(arguments[i]);
        sum += arguments[i]
    }

    return sum
}
added(1,2,3,4,5,6)

let x=function (){
    // console.log(arguments);
   return [...arguments]
}
let y =x(1,2,4)
console.log(y);


//Argument keyword doesnot works in arrow()=> function......

// let added= ()=>{
//     let sum =0

//     for(let i =0;i<arguments.length; i++){
//         console.log(arguments[i]);
//         sum += arguments[i]
//     }

//     return sum
// }
// added(1,2,3,4,5,6)











//Rest Parameter..............Now we can access the arguments by Arrow()=> function

// let added= (...nums)=>{
//     let sum =0

//     for(let i =0;i<nums.length; i++){
//         console.log(nums[i]);
//         sum += nums[i]
//     }

//     return sum
// }
// added(1,2,3,4,5,6)

