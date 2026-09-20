// const username = 'Anurag'
// const userAge = 24
// debugger

// if (dayNumber === 0) {
//   console.log('It is Sunday Today')
// } else if (dayNumber === 1) {
//   console.log('It is Monday Today')
// } else if (dayNumber === 2) {
//   console.log('It is Tuesday Today')
// } else if (dayNumber === 3) {
//   console.log('It is Wednesday Today')
// } else if (dayNumber === 4) {
//   console.log('It is Thursday Today')
// } else if (dayNumber === 5) {
//   console.log('It is Friday Today')
// } else if (dayNumber === 6) {
//   console.log('It is Saturday Today')
// } else {
//   console.log('Please Enter a Valid Day Number')
// }
// debugger

// const dayNumber = 6;
// switch (dayNumber) {
//     case 6:
//     console.log("case 6 executted")
//     break
//   case 0:
//   case 1:
//     console.log("number")
//     document.write("hello world")

//   case 2:
//     console.log("case 2 written")
//     break
//   case 3:
//     console.log("case 3 executed")
//     break
//   case 4:
//     console.log("case 4 executted")
//     break
//   case 5:
//     console.log("case 5 executed")
//     break

//     default: console.log("enter valid number");
// }
// console.log("program ended!!");


// debugger
// const username = "Dip"
// const userAge = 20

// switch (true) {
//   case userAge >= 0 && userAge <= 4:
//     console.log(`User is ${username} and a kid.`)
//     console.log("He is Playing legokid game.")
//     break
//   case userAge >= 5 && userAge <= 17:
//     console.log(`User is ${username} and school student.`)
//     console.log("He is studying science")
//     break

//     case userAge >= 18 && userAge <= 24:
//         console.log(`User is ${username} and college student.`)
//   console.log("He is studying computer science") 
//   break

//   case userAge >= 25 && userAge <= 50:
//   console.log(`User is ${username} and working professional.`)
//   console.log("He is doing corporate job")
//   break

//   case true:
//     console.log(`User is ${username} and Retired person.`)
//   console.log("He is reads newspaper")
//   break

//   case userAge >= 60 && userAge <= 120:
//   console.log(`User is ${username} and Retired person.`)
//   console.log("He is reads newspaper")
//   break

//   case userAge >= 120:
//     console.log(`User is ${username} and He/She is Immortal`)
//   console.log("He can't die.")
//   break

//   default :
//   console.log("Please enter a valid age");

// }

// if (userAge >= 0 && userAge <= 4) {
//   console.log(`User is ${username} and a kid.`)
//   console.log("He is Playing legokid game.") // This line runs even if age is 5!
// } else if (userAge >= 5 && userAge <= 17) {
//   console.log(`User is ${username} and school student.`)
//   console.log("He is studying science") // This line runs even if age is 5!
// } else if (userAge >= 18 && userAge <= 24) {
//   console.log(`User is ${username} and college student.`)
//   console.log("He is studying computer science") // This line runs even if age is 5!
//   if (userAge < 20) {
//     console.log("he is above 19")
//   } else {
//     console.log("no he is not above 19")
//   }
//   if (username.length >= 3) {
//     console.log("It is more or equal 3 character name")
//   }
// } else if (userAge >= 25 && userAge <= 50) {
//   console.log(`User is ${username} and working professional.`)
//   console.log("He is doing corporate job") // This line runs even if age is 5!
// } else if (userAge >= 50 && userAge <= 60) {
//   console.log(`User is ${username} and Retired person.`)
//   console.log("He is reads newspaper") // This line runs even if age is 5!
// } else if (userAge >= 60 && userAge <= 120) {
//   console.log(`User is ${username} and Retired person.`)
//   console.log("He is reads newspaper") // This line runs even if age is 5!
// } else if (userAge >= 120) {
//   console.log(`User is ${username} and He/She is Immortal`)
//   console.log("He can't die.") // This line runs even if age is 5!
// }

// const dayNumber = 14

// switch (dayNumber) {
//   case 0:
//     console.log('It is Sunday Today')
//     break
//   case 1:
//     console.log('It is Monday Today')
//     break
//   case 2:
//     console.log('It is Tuesday Today')
//     break
//   case 3:
//     console.log('It is Wednesday Today')
//     break
//   case 4:
//     console.log('It is Thursday Today')
//     break
//   case 5:
//     console.log('It is Friday Today')
//     break
//   case 6:
//     console.log('It is Saturday Today')
//     break
//   default:
//     console.log('Please Enter a Valid Day Number')
// }

// debugger

// switch(true) {
//     case userAge >= 0 && userAge <= 4:
//         console.log(`${username} is a kid.`)
//         break
//     case (userAge >= 5 && userAge <= 17):
//         console.log(`${username} is a school student.`)
//         break
//     case (userAge >= 18 && userAge <= 24):
//         console.log(`${username} is a college student.`)
//         break
//     case true:
//         console.log(`${username} is a working professional.`)
//         break
//     case (userAge > 45 && userAge < 121):
//         console.log(`${username} is retired.`)
//         break
//     default:
//         console.log('Please Enter a Valid Age');
// }

// const grade = "A"
 // debugger

// switch (grade.toLowerCase()){
//   case "a":
//     console.log("Your score is between 85% to 100%");
//     break
//     case "B":
//       console.log("Your score is between 75% to 85%");
//       break
//       case "C":
//         console.log("Your score is between 60% to 75%");
//         break
//          case "D":
//         console.log("Your score is between 50% to 60% ");
//         break
//          case "E":
//         console.log("Your score is between 30% to 50%");
//         break
//         default: 
//         console.log("Sorry you didnot passed");
// }



//ternary operator
// const num = 12>5 ? "True value" : "False value"
// console.log(num);
// // debugger
// let gender = prompt("Type you gender m/f")
// let gName = `${gender.toLocaleLowerCase === "f" ? "She" : "He"} is a college student`


const result = false ? "Dip" : 0 ? "20" : "15"
console.log(result);