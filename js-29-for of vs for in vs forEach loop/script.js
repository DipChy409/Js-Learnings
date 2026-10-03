

//for of loop only works on iterable objects like arrays, strings, maps, sets, etc. It does not work on objects that are not iterable.
//for of loop works on Array......
// const fruits = ["apple", "banana", "jackfruit", "Papaya"]


// for(let i =0; i< fruits.length; i++){
//     console.log(fruits[i]);
// }     //alternative is for of loop.....

// for(const fruit of fruits){
//     console.log(fruit);
// }

// const user = "DIP CHY"

// for(const letter of user){
//     console.log(letter);
// }




//for in loop works on objects ....
// const person = {
//     firstName: "DIP",
//     lastName: "CHY",
//     age: 20,
//     eyeColor: "Black",
//     city: "Chittagong",
// }

// for(const key in person){
//     console.log(key,":",person[key]);
// }

// const personKey = Object.keys(person)

// for (const key of personKey){
//     console.log(key);
// }

// const personKeys = Object.keys(person)//Extract keys from an object and form into an array
// const personValues = Object.values(person)// Extract values from an object and form into an array
// const personEntries = Object.entries(person)
// console.log(personKeys);
// console.log(personValues);
// console.log(personEntries);

// for(const h of personEntries){
//     console.log(h);
// }

// const person2 = {
//     firstName: "DIP",
//     lastName: "CHY",
//     age: 20,
//     eyeColor: "Black",
//     city: "Chittagong",
// }



//for each loop....


const fruits = ["apple", "banana", "jackfruit", "Papaya", "coconut"]


// for(const fruit of fruits){
//     console.log(fruit);
// }

// fruits.forEach((fruit)=>{console.log(fruit)})
// fruits.forEach(function named(el){
//     console.log(el);
// })

// fruits.forEach(named)
// function named(el){
//     console.log(el);
// }


const numbers= [true, false]
const double = numbers.forEach(num =>{
    console.log(num);
    return num
})// forEach does not return anything,it will always return undefined.
//  It is used for side effects like logging, modifying the original array, etc. 
// It does not return a new array like map, filter, etc.

for(x of [1,2,3]){
    return console.log(x);
}//Doesnot have return value will give a warning of illegal statement

