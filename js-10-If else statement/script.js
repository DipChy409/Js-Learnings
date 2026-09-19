const username = "Dip"
const userAge = 20
// const gender = prompt("Gender-m/f/d");

// debugger

// if (!username) {
//     username = "Dip"
// } else {
//   console.log("validation passed")
// }
// if (!userAge) {
//     userAge = 20
// } else {
//   console.log("validation failed")
// }

if(username){
    console.log(`Name: ${username}`);
}
if(userAge){
    console.log(`Name: ${userAge}`);
}

// console.log(`Name: ${username}`);
// console.log(`Age: ${userAge}`);

// console.log(`Gender: ${gender}`);

// debugger;

if (userAge >= 0 && userAge <= 4) {
  console.log(`User is ${username} and a kid.`);
  console.log("He is Playing legokid game."); // This line runs even if age is 5!
} else if (userAge >= 5 && userAge <= 17) {
  console.log(`User is ${username} and school student.`);
  console.log("He is studying science"); // This line runs even if age is 5!
}

else if (userAge >= 18 && userAge <= 24) {
  console.log(`User is ${username} and college student.`);
  console.log("He is studying computer science"); // This line runs even if age is 5!
  if(userAge< 20){
    console.log("he is above 19");
  } else{
    console.log("no he is not above 19");
  }
  if(username.length >= 3){
    console.log("It is more or equal 3 character name");
  }

 
}

else if (userAge >= 25 && userAge <= 50) {
  console.log(`User is ${username} and working professional.`);
  console.log("He is doing corporate job"); // This line runs even if age is 5!
} else if (userAge >= 50 && userAge <= 60) {
  console.log(`User is ${username} and Retired person.`);
  console.log("He is reads newspaper"); // This line runs even if age is 5!
} else if (userAge >= 60 && userAge <= 120) {
  console.log(`User is ${username} and Retired person.`);
  console.log("He is reads newspaper"); // This line runs even if age is 5!
} else if (userAge >= 120) {
  console.log(`User is ${username} and He/She is Immortal`);
  console.log("He can't die."); // This line runs even if age is 5!
} 
// else {
//   console.log("Please enter a valid age!!");
// }

// console.log("Program ended!!")

// if (userAge || 22)
//      {
//     console.log("User is a college student");
//     console.log("He is studying computer science"); // This line runs even if age is 5!

//     }




//Nested IF ELSE Statement in JavaScript 


// else if (userAge >= 18 && userAge <= 24) {
//   console.log(`User is ${username} and college student.`);
//   console.log("He is studying computer science"); // This line runs even if age is 5!
  
//   if(userAge< 20){
//     console.log("he is above 19");
//   } else{
//     console.log("no he is not above 19");
//   }
//   if(username.length >= 3){
//     console.log("It is more or equal 3 character name");
//   }

 
// }