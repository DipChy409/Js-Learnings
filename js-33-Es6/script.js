//Default Parameters

// function multiply(a,b=2){
//     return a*b
// }
// function rollADie(number =7){
// return Math.floor(Math.random()* number) +1
// }




//Spread Operators

// const num1 = [1,2,3,4]
// const num2 = [5,6,7,8,9]
// let jointArray = [...num1,...num2,10,11]
// const myName = "DIP"
// const user ={
//     name: "DIP",
//     age: 20
// }

// const updatedUser = {...user,city: "Dhaka"}

// function add(){
//     let sum =0
//     console.log(arguments);
//     for(let i = 0; i<arguments.length; i++){
//         sum+= arguments[i]
//     }
//     return sum
// }
// // add(5,6,7,8)
// add(...jointArray)





//Rest Params

// const num1 = [1,2]

// let add= function (a,b,c,...nums){
//     console.log(a,b,c);
//     console.log("NUMS:", nums);
//     // console.log(arguments.length);
//     //  console.log(arguments);
//     // let sum =0
//     // for(let i = 0; i<arguments.length; i++){
//     //     sum+= arguments[i]
//     // }
//     // return sum
// }

// const result = add(...num1,45)


//  function(...num){
//    return [...arguments].reduce((acc, cv, i, arr)=>acc + cv)
// }

// let add = function(...num){
//    return Array.from(arguments).reduce((acc, cv, i, arr)=>acc + cv)
// }

const num1 = [1,2,3,4]

let add= function(...num){
   return num.reduce((acc, cv, i, arr)=>acc + cv)
}

const result = add(...num1)








//Destructuring in JS......

//Array
const colors= ["Green", "Blue", "Yellow", "Black", "red"]


// const color1 = colors[0]
// const color2 = colors[1]
// const color3 = colors[2]


// const [color1,color2,color3,i]= colors //Array Destructuring
// const [,,,p] =colors
const  {3: color3, 5: color5}= colors //we can destructure it with array cause an array is an object




//Object
const user ={
   name: "Dip",
   age: 25,
   address:{
      city: "Chittagong",
      state: "Hathazari",
   }
}

// const age = user.age
// const name = user.name
const {name,age}= user 

// const {name:username,age: userAge}= user //Object Destructuring

// const   {address:{city}}= user //Multilevel Destructuring
// const {address} = user
// const {city} = address





//function
function intro({age,name,address}){
   console.log(age,name,address);
}

intro(user)

function printcolor({4: a}){
   console.log(a);
}
printcolor(colors)














//MY Note...........

// const num1 = [1,2,3,4,5,6,7]
// const num2 = [5,6,7,8,9,10,11,12]
// const myName = "DIP"
// const myName2 = "CHYI"
// const obj= {name: 'DIP'}
// const obj2 ={age: 20}

// let arr = {...obj, ...obj2,age: 21,...myName2,...myName}
// let jointArray2 = [...myName,...myName2,...num1,...num2,]//if i spreadcopy inside an object it willnot copy both array or string together the next one will replace the first one same happen with the array also it willnot copy both object together

// console.log(jointArray2);