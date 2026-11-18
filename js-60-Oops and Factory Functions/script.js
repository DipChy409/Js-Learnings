//OOPs (Encapsulation & Abstraction) and Factory Functions

//Procedural programming
// function getAgeYear(age){
//     return new Date().getFullYear() - age
// }

//Object oriented Programming.
// const user1 = {
//   firstName: "DIP",
//   lastName: "Chowdhury",
//   age: 21,
//   getAgeYear() {
//     return new Date().getFullYear() - user1.age;
//   },
// };

function createUser(firstName, lastName, age) {
  const user = {
    firstName,
    lastName,
    age,
    getAgeYear() {
    return new Date().getFullYear() - user.age;
  },
  };

  return user;
}
const user1 = createUser("Badahan", "Chakraborthy", 45)
const user2 = createUser("DIp", "Chakraborthy", 45)

const arr1 = [1,2,3]
const arr2 = [1,2,3]
