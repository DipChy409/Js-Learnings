// function getBirthyear() {
//     // console.log(this);
//     return new Date().getFullYear() - this.age;
// }




// function createUser(firstName, lastName, age) {
//   const user = {
//     firstName,
//     lastName,
//     age,
//     // getBirthyear:createUser.commonMethods.getBirthyear,
    
//   };

//   return user;
// }


function CreateUser(firstName, lastName, age) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
}

CreateUser.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName
}

CreateUser.prototype.getBirthyear = function() {
    return new Date().getFullYear() - this.age;
}



function cc(name){
   return {name:"DO"}
}
let x = new cc("dip")

// CreateUser.commonMethods = {
//  getBirthyear() {
//     return new Date().getFullYear() - this.age;
// }
// }

const user1 = new CreateUser("Badahan", "Chakraborthy", 45)
const user2 = new CreateUser("Dip", "CHowdhury", 21)

const user3 = new CreateUser("Akash")