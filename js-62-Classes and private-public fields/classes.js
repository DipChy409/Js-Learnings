//Classes lecture and //Private and public fields

class CreateUser {
    
    #age;
  constructor(firstName, lastName, age) {
    // console.log("HIi");
    this.firstName =firstName
    this.lastName = lastName
    this.#age = age
  }

  hi = "Hello world"//Public class field
  #hi = "Hello world"//private class field

  getBirthyear() {
    console.log(this.#hi);
    this.#getFullName()
    return new Date().getFullYear() - this.#age;
  }

  #getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

const user1 = new CreateUser("Akash", "Chakraborthy", 45);
const user2 = new CreateUser("Dip", "CHowdhury", 21);


